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
