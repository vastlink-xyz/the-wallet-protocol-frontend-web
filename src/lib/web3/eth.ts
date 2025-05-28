import { ethers } from "ethers"
import { LIT_CHAINS } from "@lit-protocol/constants"
import { log } from "../utils";

/**
 * Fetch ETH balance for an address
 * @param address Ethereum address to check balance for
 * @param chainName Chain name from LIT_CHAINS (defaults to 'sepolia')
 * @returns Formatted balance in ETH as string, or '0' if error occurs
 */
export async function fetchEthBalance(address: string, chainName: string = 'sepolia'): Promise<string> {
  if (!address) return '0';
  
  try {
    // Get RPC URL from LIT_CHAINS
    const rpcUrl = LIT_CHAINS[chainName as keyof typeof LIT_CHAINS]?.rpcUrls[0];
    if (!rpcUrl) {
      console.error(`Chain ${chainName} not found in LIT_CHAINS`);
      return '0';
    }
    
    // Create provider
    const provider = new ethers.providers.JsonRpcProvider(rpcUrl);
    
    // Get balance in Wei
    const balanceWei = await provider.getBalance(address);
    
    // Convert to ETH
    return ethers.utils.formatEther(balanceWei);
  } catch (error) {
    console.error(`Failed to fetch balance for ${address}:`, error);
    return '0';
  }
}

/**
 * Fetch ETH transaction history with pagination support
 * @param address - Ethereum address to fetch transaction history for
 * @param page - Page number (starts from 1, default: 1)
 * @param limit - Number of transactions per page (default: 20, max: 100 for Etherscan)
 * @returns Transaction array and pagination information
 */
export const fetchEthTransactionHistory = async (
  address: string,
  page: number = 1,
  limit: number = 20
) => {
  try {
    // Use our internal API that wraps Etherscan API calls
    const apiUrl = `${process.env.NEXT_PUBLIC_APP_URL}/api/eth/etherscan?address=${address}&action=txlist&page=${page}&limit=${limit}`;
    
    const response = await fetch(apiUrl);
    
    if (!response.ok) {
      throw new Error(`API returned ${response.status}: ${response.statusText}`);
    }
    
    const data = await response.json();
    
    if (data.status !== '1' && data.message !== 'No transactions found') {
      throw new Error(`Etherscan API error: ${data.message}`);
    }
    
    const transactions = data.result || [];
    
    return {
      transactions,
      hasMore: transactions.length === limit,
      page: page,
      limit: limit
    };
  } catch (error) {
    console.error("Error fetching ETH transaction history:", error);
    return {
      transactions: [],
      hasMore: false,
      page: page,
      limit: limit
    };
  }
}