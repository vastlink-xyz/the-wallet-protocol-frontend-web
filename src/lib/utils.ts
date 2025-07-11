import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const log = console.log.bind(console, '🚀')

export function isValidEmail(email: string): boolean {
  return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email);
}

// Function to truncate text in the middle
export function truncateMiddle(text: string, maxLength: number = 20) {
  if (text.length <= maxLength) return text;
  const start = Math.ceil(maxLength / 2) - 2;
  const end = Math.floor(maxLength / 2) - 2;
  return `${text.slice(0, start)}...${text.slice(-end)}`;
}