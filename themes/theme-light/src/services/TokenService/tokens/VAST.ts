import { formatEther, Address, http, createPublicClient, erc20Abi, PublicClient } from "viem";
import { Token } from "./Token";
import axios from "axios";
import { baseSepolia } from "viem/chains";
import { GasFeeSymbol, TokenType } from "@/types/tokens";

export class VAST extends Token {

  constructor() {
    super({
      tokenType: TokenType.VAST,
      name: 'TheVastlinkToken',
      symbol: 'VAST',
      decimals: 18,
      gasSymbol: GasFeeSymbol.BASE,
      logo: '/imgs/logos/tvwt.png',
      color: '#52c41a',
      viemChain: baseSepolia,
      publicClient: createPublicClient({
        chain: baseSepolia,
        transport: http(import.meta.env.VITE_BASE_JSON_RPC),
      }) as PublicClient,
      scanTransactionUrl: `${import.meta.env.VITE_BASE_SCAN_TRANSACTION}/`,
      contractAddress: import.meta.env.VITE_VAST_TOKEN_CONTRACT_ADDRESS as Address,
      contractAbi: erc20Abi, // kkktodo: add vast abi
    });
  }

  async getBalance(address: Address): Promise<string> {
    const balance = await this.publicClient.readContract({
      address: this.contractAddress as Address,
      abi: this.contractAbi as typeof erc20Abi,
      functionName: 'balanceOf',
      args: [address],
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
        action: 'tokentx',
        address,
        contractaddress: import.meta.env.VITE_VAST_TOKEN_CONTRACT_ADDRESS,
        startblock: '0',
        endblock: 'latest',
      }
    })
    const txs = res.data.result
    return txs
  }
}