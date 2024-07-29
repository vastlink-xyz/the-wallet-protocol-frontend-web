import { Chain, http } from "viem"
import {hardhat, sepolia, polygonAmoy} from "viem/chains"

export const formatDecimal = (amount: string, decimal=6) => parseFloat(amount).toFixed(decimal)

export function truncateMiddle(str: string, startChars = 8, endChars = 10, ellipsis = '...') {
  if (str.length <= startChars + endChars) {
    return str;
  }

  const start = str.slice(0, startChars);
  const end = str.slice(-endChars);

  return `${start}${ellipsis}${end}`;
}
