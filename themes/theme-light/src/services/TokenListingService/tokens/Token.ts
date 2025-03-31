import { ChainType, GasFeeSymbol, TokenType } from "@/types/tokens";
import { PublicClient, Chain } from "viem";
import { Address } from "viem";

export abstract class Token {
  tokenType: TokenType;
  chainType: ChainType;
  name: string;
  symbol: string;
  decimals: number;
  gasSymbol: GasFeeSymbol;
  logo: string;
  color: string;
  viemChain: Chain;
  publicClient: PublicClient;
  scanTransactionUrl: string;
  contractAddress?: Address;
  contractAbi?: any;
  gasless?: boolean;

  constructor({
    tokenType,
    chainType,
    name,
    symbol,
    decimals,
    gasSymbol,
    logo,
    color,
    viemChain,
    publicClient,
    scanTransactionUrl,
    contractAddress,
    contractAbi,
    gasless = false,
  }: {
    tokenType: TokenType;
    chainType: ChainType;
    name: string;
    symbol: string;
    decimals: number;
    gasSymbol: GasFeeSymbol;
    logo: string;
    color: string;
    viemChain: Chain;
    publicClient: PublicClient;
    scanTransactionUrl: string;
    contractAddress?: Address;
    contractAbi?: any;
    gasless?: boolean;
  }) {
    this.tokenType = tokenType;
    this.chainType = chainType;
    this.name = name;
    this.symbol = symbol;
    this.decimals = decimals;
    this.gasSymbol = gasSymbol;
    this.logo = logo;
    this.color = color;
    this.viemChain = viemChain;
    this.publicClient = publicClient;
    this.scanTransactionUrl = scanTransactionUrl;
    this.contractAddress = contractAddress;
    this.contractAbi = contractAbi;
    this.gasless = gasless;
  }

  abstract getBalance(address: Address): Promise<string>;
  abstract getRecentTransactions(address: Address): Promise<any[]>;
}
