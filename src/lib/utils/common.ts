import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const isDev = process.env.NEXT_PUBLIC_ENV === 'development';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
