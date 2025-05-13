import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { jwtDecode } from 'jwt-decode';
import { ethers } from "ethers"
import { LIT_CHAINS } from "@lit-protocol/constants"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const log = console.log.bind(console, '🚀')

/**
 * Extract email address from Google JWT token
 * @param token Google JWT token
 * @returns Email address, or null if parsing fails
 */
export function getEmailFromGoogleToken(token: string): string | null {
  try {
    // Decode JWT token
    const decoded = jwtDecode<{ email?: string }>(token);
    
    // Return email address
    return decoded.email || null;
  } catch (error) {
    console.error('Failed to decode JWT token:', error);
    return null;
  }
}

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

/**
 * Verify if a Google ID token is still valid
 * @param token Google ID token to verify
 * @returns Promise resolving to true if token is valid, false otherwise
 */
export async function isGoogleTokenValid(token: string): Promise<boolean> {
  if (!token) return false;
  
  try {
    const response = await fetch(`https://oauth2.googleapis.com/tokeninfo?id_token=${token}`);
    
    // If response is OK (status 200), token is valid
    return response.ok;
  } catch (error) {
    console.error('Error validating Google token:', error);
    return false;
  }
}

export function getUserIdFromToken(token: string): string | null {
  try {
    const decoded = jwtDecode<{ sub?: string }>(token);
    return decoded.sub || null;
  } catch (error) {
    console.error('Failed to decode JWT token:', error);
    return null;
  }
}
