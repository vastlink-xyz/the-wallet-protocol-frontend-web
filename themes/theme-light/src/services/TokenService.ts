import axios from "axios";

import { Address, createPublicClient, formatEther, http, PublicClient } from "viem";
import { mainnet, polygonAmoy, sepolia } from "viem/chains";
import { ERC20_TVWT_ABI } from "@/abis/TheVastWalletToken";
import { TokenType } from "@/types/tokens";
import api from "@/lib/api";

export abstract class Token {
  name: string;
  symbol: string;
  decimals: number;

  constructor(name: string, symbol: string, decimals: number) {
    this.name = name;
    this.symbol = symbol;
    this.decimals = decimals;
  }

  abstract publicClient: PublicClient;
  abstract openUrl: string;
  abstract getBalance(address: Address): Promise<string>;
  abstract getRecentTransactions(address: Address): Promise<any[]>;
}

class ETH extends Token {
  publicClient: PublicClient;
  openUrl: string;

  constructor() {
    super('Ethereum Sepolia', 'SepoliaETH', 18);
    this.publicClient = createPublicClient({
      chain: sepolia,
      transport: http(import.meta.env.VITE_ETH_JSON_RPC),
    })
    this.openUrl = `${import.meta.env.VITE_ETH_SCAN_TRANSACTION}/`
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

class MATIC extends Token {
  publicClient: PublicClient;
  openUrl: string;

  constructor() {
    super('Polygon Amoy', 'POL', 18);
    this.publicClient = createPublicClient({
      chain: polygonAmoy,
      transport: http(import.meta.env.VITE_POLYGON_JSON_RPC),
    })
    this.openUrl = `${import.meta.env.VITE_POLYGON_SCAN_TRANSACTION}/`
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

class TVWT extends Token {
  publicClient: PublicClient;
  private contractAddress: Address;
  private contractAbi: typeof ERC20_TVWT_ABI;
  openUrl: string;

  constructor() {
    super('TheVastlinkToken', 'TVWT', 18);
    this.contractAddress = import.meta.env.VITE_TVWT_TOKEN_CONTRACT_ADDRESS as Address;
    this.contractAbi = ERC20_TVWT_ABI
    this.publicClient = createPublicClient({
      chain: polygonAmoy,
      transport: http(import.meta.env.VITE_POLYGON_JSON_RPC),
    })
    this.openUrl = `${import.meta.env.VITE_POLYGON_SCAN_TRANSACTION}/`
  }

  async getBalance(address: Address): Promise<string> {
    const balance = await this.publicClient.readContract({
      address: this.contractAddress,
      abi: this.contractAbi,
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

export class TokenFactory {
  private static instance: TokenFactory;
  private tokenMap: Map<TokenType, new () => Token>;

  private constructor() {
    this.tokenMap = new Map([
      ['ETH', ETH],
      ['MATIC', MATIC],
      ['TVWT', TVWT],
    ]);
  }

  public static getInstance(): TokenFactory {
    if (!TokenFactory.instance) {
      TokenFactory.instance = new TokenFactory();
    }
    return TokenFactory.instance;
  }

  public createToken(type: TokenType): Token {
    const TokenClass = this.tokenMap.get(type);
    if (!TokenClass) {
      throw new Error(`Unsupported token type: ${type}`);
    }
    return new TokenClass();
  }

  public getAllTokenTypes(): TokenType[] {
    return Array.from(this.tokenMap.keys());
  }
}
