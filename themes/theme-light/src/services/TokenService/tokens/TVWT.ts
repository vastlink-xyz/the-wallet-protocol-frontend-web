import { formatEther, Address, http, createPublicClient } from "viem";
import { Token } from "./Token";
import axios from "axios";
import { polygonAmoy } from "viem/chains";
import { ERC20_TVWT_ABI } from "@/abis/TheVastWalletToken";
import { GasFeeSymbol, TokenType } from "@/types/tokens";

export class TVWT extends Token {

  constructor() {
    super({
      tokenType: TokenType.TVWT,
      name: 'TheVastlinkToken',
      symbol: 'TVWT',
      decimals: 18,
      gasSymbol: GasFeeSymbol.POL,
      logo: '/imgs/logos/tvwt.png',
      color: '#52c41a',
      viemChain: polygonAmoy,
      publicClient: createPublicClient({
        chain: polygonAmoy,
        transport: http(import.meta.env.VITE_POLYGON_JSON_RPC),
      }),
      scanTransactionUrl: `${import.meta.env.VITE_POLYGON_SCAN_TRANSACTION}/`,
      contractAddress: import.meta.env.VITE_TVWT_TOKEN_CONTRACT_ADDRESS as Address,
      contractAbi: ERC20_TVWT_ABI,
    });
  }

  async getBalance(address: Address): Promise<string> {
    const balance = await this.publicClient.readContract({
      address: this.contractAddress as Address,
      abi: this.contractAbi as typeof ERC20_TVWT_ABI,
      functionName: 'balanceOf',
      args: [address],
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
        action: 'tokentx',
        address,
        contractaddress: import.meta.env.VITE_TVWT_TOKEN_CONTRACT_ADDRESS,
        startblock: '0',
        endblock: 'latest',
      }
    })
    const txs = res.data.result
    return txs
  }
}