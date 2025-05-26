import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

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
