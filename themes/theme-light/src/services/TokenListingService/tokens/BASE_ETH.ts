import { formatEther, Address, http, createPublicClient, PublicClient } from "viem";
import { Token } from "./Token";
import axios from "axios";
import { baseSepolia } from "viem/chains";
import { ChainType, GasFeeSymbol, TokenType } from "@/types/tokens";

export class BASE_ETH extends Token {
  constructor() {
    super({
      tokenType: TokenType.BASE_ETH,
      chainType: ChainType.BASE_SEPOLIA,
      name: 'Base Sepolia',
      symbol: 'BaseSepoliaETH',
      decimals: 18,
      gasSymbol: GasFeeSymbol.BaseSepoliaETH,
      logo: '/imgs/logos/eth.png',
      color: '#3d7dc9',
      viemChain: baseSepolia,
      publicClient: createPublicClient({
        chain: baseSepolia,
        transport: http(import.meta.env.VITE_BASE_JSON_RPC),
      }) as PublicClient,
      scanTransactionUrl: `${import.meta.env.VITE_BASE_SCAN_TRANSACTION}/`,
    });
  }
  
  async getBalance(address: Address): Promise<string> {
    const balance = await this.publicClient.getBalance({
      address,
    })
    const b = formatEther(balance)
    return b
  }
  
  async getRecentTransactions(address: string): Promise<any[]> {
    const scanApi = import.meta.env.VITE_BASE_SCAN_API as string
    const apiKey = import.meta.env.VITE_BASE_SCAN_API_KEY
    const query = {
      apikey: apiKey,
      module: 'account',
      sort: 'desc',
      page: 1,
      offset: 10,
    }
    const res = await axios.get(scanApi, {
      params: {
        ...query,
        action: 'txlist',
        address,
        startblock: '0',
        endblock: 'latest',
      }
    })
    const txs = res.data.result
    return txs
  }
}