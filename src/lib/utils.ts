import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const log = console.log.bind(console, '🚀')

export function isValidEmail(email: string): boolean {
  return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,6}$/g.test(email);
}

// Function to truncate text in the middle
export function truncateMiddle(text: string | null | undefined, maxLength: number = 20) {
  const value = text ?? '';
  if (maxLength <= 0) return '';
  if (value.length <= maxLength) return value;

  const ellipsis = '...';
  const keep = Math.max(0, maxLength - ellipsis.length);
  const start = Math.ceil(keep / 2);
  const end = Math.floor(keep / 2);

  if (start <= 0 || end <= 0) return ellipsis;
  return `${value.slice(0, start)}${ellipsis}${value.slice(value.length - end)}`;
}
