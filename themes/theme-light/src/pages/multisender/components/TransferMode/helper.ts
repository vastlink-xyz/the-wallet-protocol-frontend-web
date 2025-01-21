import api from "@/lib/api";
import { emailRegex, erc20Abi, formatDecimal, log, trimTrailingZeros } from "@/lib/utils";
import { GasFeeSymbol, TokenType } from "@/types/tokens";
import { Address, Block, createPublicClient, encodeFunctionData, formatUnits, http, isAddress, parseUnits } from "viem";
import { PromiseCache } from "@/lib/utils/promiseCache";
import { GasFees } from "./useMultisender";
import { theTokenListingService } from "@/services/TokenListingService";

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

// create a global PromiseCache instance
const promiseCache = new PromiseCache(5000);

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
  const cacheKey = generateCacheKey({ tokenType, transferParams, fromAddress });

  return promiseCache.getOrCreate(cacheKey, async () => {
    // check result cache
    const cached = gasFeeCache.get(cacheKey);
    if (cached) {
      return cached.result;
    }

    try {
      const chain = theTokenListingService.getToken(tokenType).viemChain;
      if (!chain) return null;

      if (theTokenListingService.getToken(tokenType).gasless) {
        return {
          estimatedGas: BigInt(0),
          maxFeePerGas: BigInt(0),
          maxPriorityFeePerGas: BigInt(0),
          estimatedTotalFee: BigInt(0),
          baseFee: BigInt(0),
          gasPrice: BigInt(0),
          feeInTokens: '0',
        };
      }

      const publicClient = createPublicClient({
        chain,
        transport: http()
      });

      // original contract address and transaction object creation logic
      let contractAddress = undefined;
      if (theTokenListingService.isERC20Token(tokenType)) {
        contractAddress = theTokenListingService.getToken(tokenType).contractAddress;
        if (!contractAddress) {
          throw new Error('Invalid token contract address');
        }
      }

      let transaction;
      if (theTokenListingService.isERC20Token(tokenType)) {
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
        (Number(estimatedTotalFee) / Math.pow(10, 18)).toString(),
        18
      );
      
      const result = {
        estimatedGas,
        maxFeePerGas,
        maxPriorityFeePerGas,
        estimatedTotalFee,
        baseFee,
        gasPrice,
        feeInTokens: trimTrailingZeros(feeInTokens),
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
      console.log('Cache updated:', cacheKey);

      return result;
    } catch (error) {
      console.error('Gas estimation error:', error);
      throw error;
    }
  });
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
  const valjwts = theTokenListingService.getAllTokens().map(token => token.tokenType);
  
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
    if (!row[2] || !valjwts.includes(row[2].toUpperCase())) {
      return {
        isValid: false,
        error: `Invalid token type at row ${i + 1}. Allowed tokens: ${valjwts.join(', ')}`
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

export const mergeGasFees = (gasFees: GasFees | null) => {
  if (!gasFees) return null;

  return Object.entries(gasFees).reduce((acc, [token, gasAmount]) => {
    if (token === 'usdValue') return acc;
    const gasSymbol = theTokenListingService.getToken(token as TokenType).gasSymbol;
    // const gasSumAmount = parseFloat(acc[gasSymbol] || '0');
    // acc[gasSymbol] = (gasSumAmount + parseFloat(gasAmount)).toString();
    const gasSumAmount = parseUnits(acc[gasSymbol] || '0', 18);
    acc[gasSymbol] = formatUnits(gasSumAmount + parseUnits(gasAmount, 18), 18);

    return acc;
  }, {} as Record<GasFeeSymbol, string>);
}
