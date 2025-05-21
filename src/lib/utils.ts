import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { ethers } from "ethers"
import { LIT_CHAINS } from "@lit-protocol/constants"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const log = console.log.bind(console, '🚀')

// ETH amount formatting function
export function formatEthAmount(amount: string | number): string {
  if (!amount || amount === "Error") return amount as string;
  
  // Convert input to string
  const amountStr = typeof amount === "number" ? amount.toString() : amount;
  
  // If it's an integer or decimal part is all zeros, remove decimal part
  if (!amountStr.includes('.') || /\.\d*0+$/.test(amountStr) && !/\.\d*[1-9]/.test(amountStr)) {
    return amountStr.split('.')[0];
  }
  
  // Remove trailing zeros
  return amountStr.replace(/\.(\d*?)0+$/, '.$1');
}

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

export function setUserDataToStorage(user: any) {
  localStorage.setItem('user', JSON.stringify(user))
}

/**
 * Get user email from localStorage
 * @returns user email string, throws error if not found
 */
export function getUserEmailFromStorage(): string {
  const userData = localStorage.getItem('user')
  if (!userData) {
    throw new Error('User data not found in localStorage')
  }
  const parsedUserData = JSON.parse(userData)
  return parsedUserData.email
}
