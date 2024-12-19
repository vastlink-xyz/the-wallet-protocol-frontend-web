import api from "@/lib/api";
import { emailRegex, erc20Abi, formatDecimal, log, viemChainByToken } from "@/lib/utils";
import { TokenType } from "@/types/tokens";
import { Address, Block, createPublicClient, encodeFunctionData, http, isAddress } from "viem";

interface GasEstimationResult {
  estimatedGas: bigint;
  maxFeePerGas: bigint;
  maxPriorityFeePerGas: bigint;
  estimatedTotalFee: bigint;
  baseFee: bigint;
  gasPrice: bigint;
  feeInTokens: string;
}

interface GasFeeCache {
  result: GasEstimationResult;
  params: {
    tokenType: TokenType;
    transferParams: {
      to: Address;
      amount: bigint;
    };
    fromAddress: Address;
  };
}

// create a global cache map
const gasFeeCache = new Map<string, GasFeeCache>();

// generate cache key function
const generateCacheKey = ({
  tokenType,
  transferParams,
  fromAddress,
}: {
  tokenType: TokenType;
  transferParams: {
    to: Address;
    amount: bigint;
  };
  fromAddress: Address;
}) => {
  return JSON.stringify({
    tokenType,
    to: transferParams.to.toLowerCase(),
    amount: transferParams.amount.toString(),
    from: fromAddress.toLowerCase(),
  });
};

export async function getEstimatedGasFeeByToken({
  tokenType,
  transferParams,
  fromAddress,
  defaultGasPrice,
  defaultBlock
}: {
  tokenType: TokenType,
  transferParams: {
    to: Address,
    amount: bigint,
  },
  fromAddress: Address,
  defaultGasPrice?: bigint,
  defaultBlock?: Block
}) {
  // generate cache key
  const cacheKey = generateCacheKey({ tokenType, transferParams, fromAddress });
  
  // check cache
  const cached = gasFeeCache.get(cacheKey);
  if (cached) {
    return cached.result;
  }

  try {
    const chain = viemChainByToken(tokenType);
    if (!chain) return null;

    const publicClient = createPublicClient({
      chain,
      transport: http()
    });

    // original contract address and transaction object creation logic
    let contractAddress = undefined;
    if (tokenType === 'TVWT') {
      contractAddress = import.meta.env.VITE_TVWT_TOKEN_CONTRACT_ADDRESS as Address;
      if (!contractAddress) {
        throw new Error('Invalid token contract address');
      }
    }

    let transaction;
    if (tokenType === 'TVWT') {
      const data = encodeFunctionData({
        abi: erc20Abi,
        functionName: 'transfer',
        args: [transferParams.to, transferParams.amount]
      });

      transaction = {
        to: contractAddress!,
        data,
        value: BigInt(0)
      };
    } else {
      transaction = {
        to: transferParams.to,
        value: transferParams.amount
      };
    }

    log('start to call getEstimatedGasFeeByToken', { tokenType, transferParams, fromAddress });
    // calculate gas fee
    const estimatedGas = await publicClient.estimateGas({
      ...transaction,
      account: fromAddress,
    });
    
    const gasPrice = defaultGasPrice || await publicClient.getGasPrice();
    const block = defaultBlock || await publicClient.getBlock();
    const baseFee = block.baseFeePerGas || BigInt(0);
    
    const maxPriorityFeePerGas = gasPrice > baseFee 
      ? gasPrice - baseFee 
      : BigInt(1000000000);
    const maxFeePerGas = baseFee + maxPriorityFeePerGas * BigInt(2);

    const estimatedTotalFee = estimatedGas * maxFeePerGas;
    
    const feeInTokens = formatDecimal(
      (Number(estimatedTotalFee) / Math.pow(10, 18)).toString()
    );
    
    const result = {
      estimatedGas,
      maxFeePerGas,
      maxPriorityFeePerGas,
      estimatedTotalFee,
      baseFee,
      gasPrice,
      feeInTokens,
    };

    // store to cache
    gasFeeCache.set(cacheKey, {
      result,
      params: {
        tokenType,
        transferParams,
        fromAddress
      }
    });

    return result;
  } catch (error) {
    console.error('Gas estimation error:', error);
    throw error;
  }
}

export const validateCsvData = (data: any[]): { isValid: boolean; error?: string } => {
  if (!data.length) {
    return { isValid: false, error: 'CSV file is empty' };
  }

  // First row should be headers
  const headerRow = data[0];
  if (!Array.isArray(headerRow) || headerRow.length < 4) {
    return { 
      isValid: false, 
      error: 'Invalid CSV format: missing required columns' 
    };
  }

  // Validate headers
  const expectedHeaders = ['To', 'Note', 'Token', 'Amount'];
  const headers = headerRow.map(h => h.trim());
  
  for (let i = 0; i < expectedHeaders.length; i++) {
    if (headers[i] !== expectedHeaders[i]) {
      return {
        isValid: false,
        error: `Invalid header format. Expected: ${expectedHeaders.join(', ')}`
      };
    }
  }

  // Validate data rows
  const validTokens = ['TVWT', 'ETH', 'MATIC'];
  
  for (let i = 1; i < data.length; i++) {
    const row = data[i];
    
    // Skip empty rows (check if first column is empty)
    if (!row[0] || row[0].trim() === '') {
      continue;
    }
    
    if (!(isAddress(row[0]) || emailRegex.test(row[0]))) {
      return { 
        isValid: false, 
        error: `Invalid to format at row ${i + 1}` 
      };
    }

    // Token validation (third column)
    if (!row[2] || !validTokens.includes(row[2].toUpperCase())) {
      return {
        isValid: false,
        error: `Invalid token type at row ${i + 1}. Allowed tokens: ${validTokens.join(', ')}`
      };
    }

    // Amount validation (fourth column)
    if (!row[3] || isNaN(Number(row[3])) || Number(row[3]) <= 0) {
      return { 
        isValid: false, 
        error: `Invalid amount at row ${i + 1}` 
      };
    }
  }

  return { isValid: true };
};

interface EmailValidationCache {
  data: {
    success: boolean;
    address: string;
  };
  timestamp: number;
}

// create email validation cache map
const emailValidationCache = new Map<string, EmailValidationCache>();

// cache expiry time (ms)
const EMAIL_CACHE_EXPIRY = 5 * 60 * 1000; // 5 minutes

export async function validateEmailWithCache(email: string) {
  // check cache
  const cached = emailValidationCache.get(email);
  const now = Date.now();
  
  if (cached && (now - cached.timestamp < EMAIL_CACHE_EXPIRY)) {
    // return cache data in the same format as the original API response
    return {
      data: cached.data
    };
  }

  // call original API
  const res = await api.get(`/address/`, {
    params: { email }
  });

  // update cache
  emailValidationCache.set(email, {
    data: res.data,
    timestamp: now
  });

  return res;
}

export function clearEmailValidationCache() {
  emailValidationCache.clear();
}
