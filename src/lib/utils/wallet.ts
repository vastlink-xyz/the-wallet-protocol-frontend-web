import { Chain, createPublicClient, http } from "viem"
import {hardhat, sepolia, polygonAmoy} from "viem/chains"

export const formatDecimal = (amount: string, decimal=6) => parseFloat(amount).toFixed(decimal)

export function getChain() {
  switch (process.env.NEXT_PUBLIC_CHAIN) {
    case "hardhat":
      return hardhat;
    case "sepolia":
      return sepolia;
    case "polygonAmoy":
      return polygonAmoy;
  };
}

export const publicClient = createPublicClient({
  chain: getChain(),
  transport: http(process.env.NEXT_PUBLIC_JSON_RPC),
})
