import { readableColor } from 'color2k';
import convert from 'color-convert'
import { HEX } from 'color-convert/conversions';
import { CustomStorage } from './storage';

export interface ThemeColors {
  [key: string]: string;
}

export const themeElements = [
  'background',
  'primary',
  'card',
  'brand',
]


export function hexToHsl(hex: HEX) {
  const [h, s, l] = convert.hex.hsl(hex);
  return `${h} ${s}% ${l.toFixed(2)}%`;
}

export function updateTheme(theme: ThemeColors): void {
  if (typeof window !== 'undefined') {
    Object.entries(theme).forEach(([key, value]) => {
      document.documentElement.style.setProperty(`--${key}`, hexToHsl(value));
    });
  }
}

export function generateForegroundColor(backgroundColor: string): string {
  return readableColor(backgroundColor);
}

export const customSkinStorage = new CustomStorage('customSkin')
