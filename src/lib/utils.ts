import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { jwtDecode } from 'jwt-decode';

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
