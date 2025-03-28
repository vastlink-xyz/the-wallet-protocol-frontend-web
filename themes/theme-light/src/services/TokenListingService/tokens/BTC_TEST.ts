import { formatEther, Address, http, createPublicClient } from "viem";
import { Token } from "./Token";
import axios from "axios";
import { sepolia } from "viem/chains";
import { GasFeeSymbol, TokenType } from "@/types/tokens";

export class BTC_TEST extends Token {
  constructor() {
    super({
      tokenType: TokenType.BTC_TEST,
      name: 'Bitcoin Testnet',
      symbol: 'BTC_TEST',
      decimals: 8,
      gasSymbol: GasFeeSymbol.BTC,
      logo: '/imgs/logos/eth.png',
      color: '#3d7dc9',
      viemChain: sepolia,
      publicClient: createPublicClient({
        chain: sepolia,
        transport: http(import.meta.env.VITE_ETH_JSON_RPC),
      }),
      scanTransactionUrl: `${import.meta.env.VITE_ETH_SCAN_TRANSACTION}/`,
    });
  }
  
  async getBalance(address: Address): Promise<string> {
    return '0'
  }
  
  async getRecentTransactions(address: string): Promise<any[]> {
    return []
  }
}