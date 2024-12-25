import { GasFeeSymbol, TokenType } from "@/types/tokens";
import { PublicClient, Chain } from "viem";
import { Address } from "viem";

export abstract class Token {
  tokenType: TokenType;
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

  constructor({
    tokenType,
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
  }: {
    tokenType: TokenType;
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
  }) {
    this.tokenType = tokenType;
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
  }

  abstract getBalance(address: Address): Promise<string>;
  abstract getRecentTransactions(address: Address): Promise<any[]>;
}
