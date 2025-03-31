import { formatEther, Address, http, createPublicClient } from "viem";
import { Token } from "./Token";
import axios from "axios";
import { polygonAmoy } from "viem/chains";
import { ChainType, GasFeeSymbol, TokenType } from "@/types/tokens";

export class MATIC extends Token {
  constructor() {
    super({
      tokenType: TokenType.MATIC,
      chainType: ChainType.ETHEREUM,
      name: 'Polygon Amoy',
      symbol: 'POL',
      decimals: 18,
      gasSymbol: GasFeeSymbol.POL,
      logo: '/imgs/logos/matic.png',
      color: '#c08fec',
      viemChain: polygonAmoy,
      publicClient: createPublicClient({
        chain: polygonAmoy,
        transport: http(import.meta.env.VITE_POLYGON_JSON_RPC),
      }),
      scanTransactionUrl: `${import.meta.env.VITE_POLYGON_SCAN_TRANSACTION}/`,
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
    const scanApi = import.meta.env.VITE_POLYGON_SCAN_API as string
    const apiKey = import.meta.env.VITE_POLYGON_SCAN_API_KEY
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