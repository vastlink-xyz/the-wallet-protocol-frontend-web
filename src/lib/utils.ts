import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const log = console.log.bind(console, '🚀')

export function isValidEmail(email: string): boolean {
  return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email);
}
