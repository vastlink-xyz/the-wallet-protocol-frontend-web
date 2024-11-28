import { TokenType } from "@/types/tokens";
import { CHAIN_NAMESPACES, CustomChainConfig } from "@web3auth/base";
import { http, createPublicClient, Address } from "viem";
import {sepolia, polygonAmoy} from "viem/chains"

export const formatDecimal = (amount: string, decimal=6) => parseFloat(amount).toFixed(decimal)

export const formatNumberWithCommas = (amount: string | number, decimal = 2) => {
  // Convert to number and fix decimal places
  const num = typeof amount === 'string' ? parseFloat(amount) : amount;
  const fixedNum = num.toFixed(decimal);
  
  // Split number into integer and decimal parts
  const [integerPart, decimalPart] = fixedNum.split('.');
  
  // Add commas to integer part
  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  
  // Return formatted number with decimal part if it exists
  return decimalPart ? `${formattedInteger}.${decimalPart}` : formattedInteger;
}

export function truncateMiddle(str: string, startChars = 8, endChars = 10, ellipsis = '...') {
  if (str.length <= startChars + endChars) {
    return str;
  }

  const start = str.slice(0, startChars);
  const end = str.slice(-endChars);

  return `${start}${ellipsis}${end}`;
}

export const chainConfigByToken = (tokenType: TokenType): CustomChainConfig | undefined => {
  if (tokenType === 'ETH') {
    return {
      chainId: "0xaa36a7",
      displayName: "Sepolia Testnet ETH",
      chainNamespace: CHAIN_NAMESPACES.EIP155,
      tickerName: "Sepolia Testnet ETH",
      ticker: "ETH",
      decimals: 18,
      rpcTarget: import.meta.env.VITE_ETH_JSON_RPC!,
      blockExplorerUrl: "https://sepolia.etherscan.io",
    };
  } else if (tokenType === 'MATIC' || tokenType === 'TVWT') {
    return {
      chainId: '0x13882',
      displayName: 'Polygon Amoy Testnet',
      chainNamespace: CHAIN_NAMESPACES.EIP155,
      tickerName: 'Amoy MATIC',
      ticker: 'MATIC',
      decimals: 18,
      rpcTarget: import.meta.env.VITE_POLYGON_JSON_RPC!,
      blockExplorerUrl: "https://amoy.polygonscan.com",
    }
  }
}

export function viemChainByToken(tokenType: TokenType) {
  if (tokenType === 'ETH') {
    return sepolia
  } else if (tokenType === 'MATIC' || tokenType === 'TVWT') {
    return polygonAmoy
  }
}

export async function getEstimatedGasFeeByToken(
  tokenType: TokenType,
  transferParams: {
    to: Address,
    amount: bigint,
  }
) {
  const chain = viemChainByToken(tokenType);
  if (!chain) return null;

  // Get contract address from mapping if it's an ERC20 token
  let contractAddress = undefined
  if (tokenType === 'TVWT') {
    contractAddress = import.meta.env.VITE_TVWT_TOKEN_CONTRACT_ADDRESS as Address
  }

  // create transaction object
  let transaction;
  if (tokenType === 'TVWT') {
    // ERC20 transfer: construct transfer method call data
    const data = {
      to: contractAddress!,  // Use mapped contract address
      data: encodeERC20TransferData(transferParams.to, transferParams.amount),
      value: BigInt(0)
    };
    transaction = data;
  } else {
    // native token transfer
    transaction = {
      to: transferParams.to,
      value: transferParams.amount
    };
  }

  const publicClient = createPublicClient({
    chain,
    transport: http()
  });

  try {
    // 1. Estimate gas usage
    const estimatedGas = await publicClient.estimateGas(transaction as any);
    
    // 2. Get current gas price information
    const gasPrice = await publicClient.getGasPrice();
    const block = await publicClient.getBlock();
    const baseFee = block.baseFeePerGas || BigInt(0);
    
    // 3. Calculate gas fee components
    const maxPriorityFeePerGas = gasPrice > baseFee 
      ? gasPrice - baseFee 
      : BigInt(1000000000);
    const maxFeePerGas = baseFee + maxPriorityFeePerGas * BigInt(2);

    // 4. Calculate estimated total transaction fee
    const estimatedTotalFee = estimatedGas * maxFeePerGas;
    
    // Convert to ETH/MATIC units (from Wei)
    const feeInTokens = Number(estimatedTotalFee) / Math.pow(10, 18);  // 18 decimals for both ETH and MATIC
    
    return {
      estimatedGas,           // Estimated gas usage
      maxFeePerGas,          // Maximum gas price per unit
      maxPriorityFeePerGas,  // Priority fee (tip)
      estimatedTotalFee,     // Estimated total fee (in Wei)
      baseFee,               // Base fee
      gasPrice,              // Current gas price
      feeInTokens,           // Fee in ETH or MATIC
    };
  } catch (error) {
    console.error('Error estimating gas:', error);
    return null;
  }
}

// helper function: encode ERC20 transfer method call
function encodeERC20TransferData(to: Address, amount: bigint): string {
  // ABI encoding for transfer(address,uint256) method
  const transferSignature = '0xa9059cbb';
  const encodedAddress = to.slice(2).padStart(64, '0');
  const encodedAmount = amount.toString(16).padStart(64, '0');
  return `${transferSignature}${encodedAddress}${encodedAmount}`;
}
