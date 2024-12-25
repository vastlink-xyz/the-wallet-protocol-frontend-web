import { formatEther, Address, http, createPublicClient } from "viem";
import { Token } from "./Token";
import axios from "axios";
import { sepolia } from "viem/chains";
import { GasFeeSymbol, TokenType } from "@/types/tokens";

export class ETH extends Token {
  constructor() {
    super({
      tokenType: TokenType.ETH,
      name: 'Ethereum Sepolia',
      symbol: 'SepoliaETH',
      decimals: 18,
      gasSymbol: GasFeeSymbol.ETH,
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
    const balance = await this.publicClient.getBalance({
      address,
    })
    const b = formatEther(balance)
    return b
  }
  
  async getRecentTransactions(address: string): Promise<any[]> {
    const scanApi = import.meta.env.VITE_ETH_SCAN_API as string
    const apiKey = import.meta.env.VITE_ETH_SCAN_API_KEY
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