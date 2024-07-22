import { createPublicClient, http } from "viem"
import { hardhat, kavaTestnet, sepolia } from "viem/chains"

export const formatDecimal = (amount: string, decimal=6) => parseFloat(amount).toFixed(decimal)

export const publicClient = createPublicClient({
  chain: process.env.NEXT_PUBLIC_ENV === 'development' ? hardhat : sepolia,
  transport: http(process.env.NEXT_PUBLIC_JSON_RPC),
})
