import { ethers } from "ethers"
import { LIT_CHAINS } from "@lit-protocol/constants"

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
