import { LIT_CHAINS } from "@lit-protocol/constants";

const VAST_CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_VAST_CONTRACT_ADDRESS!;

export interface TokenInfo {
  symbol: string;
  name: string;
  decimals: number;
  iconUrl?: string;
  chainType: 'EVM' | 'UTXO' | 'Solana' | string;
  chainName: string;
  contractAddress?: string;
  addressKey: string;
  defaultWithdrawLimit: string;
}

export const SUPPORTED_TOKENS_INFO = {
  BTC: {
    symbol: 'BTC',
    name: 'Bitcoin',
    decimals: 8,
    chainType: 'UTXO',
    chainName: 'testnet3',
    iconUrl: '/cryptocurrency/btc.png',
    contractAddress: '',
    addressKey: 'btc',
    defaultWithdrawLimit: '0.001',
    gasFeeSymbol: 'BTC',
  },
  ETH: {
    symbol: 'ETH',
    name: 'Ethereum',
    decimals: 18,
    chainType: 'EVM',
    chainName: 'sepolia',
    iconUrl: '/cryptocurrency/eth.png',
    contractAddress: '',
    addressKey: 'eth',
    defaultWithdrawLimit: '0.001',
    gasFeeSymbol: 'ETH',
  },
  // SOL: {
  //   symbol: 'SOL',
  //   name: 'Solana',
  //   decimals: 9,
  //   chainType: 'Solana',
  // },
  USDT: { // (ERC-20 on sepolia)
    symbol: 'USDT',
    name: 'Tether (ERC-20)',
    decimals: 6,
    chainType: 'EVM',
    chainName: 'sepolia',
    iconUrl: '/cryptocurrency/usdt.png',
    contractAddress: '0xaA8E23Fb1079EA71e0a56F48a2aA51851D8433D0',
    addressKey: 'eth',
    defaultWithdrawLimit: '100',
    gasFeeSymbol: 'ETH',
  },
  USDC: { // (ERC-20 on sepolia)
    symbol: 'USDC',
    name: 'USD Coin (ERC-20)',
    decimals: 6,
    chainType: 'EVM',
    chainName: 'sepolia',
    iconUrl: '/cryptocurrency/usdc.png',
    contractAddress: '0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238',
    addressKey: 'eth',
    defaultWithdrawLimit: '100',
    gasFeeSymbol: 'ETH',
  },
  VAST: { // (ERC-20 on baseSepolia)
    symbol: 'VAST',
    name: 'VAST (ERC-20)',
    decimals: 18,
    chainType: 'EVM',
    chainName: 'baseSepolia',
    iconUrl: '/cryptocurrency/vast.png',
    contractAddress: VAST_CONTRACT_ADDRESS,
    addressKey: 'eth',
    defaultWithdrawLimit: '10',
    gasFeeSymbol: 'ETH',
  },
  TSTLPX: { // (Chronicle Yellowstone - Lit Protocol Testnet)
    symbol: 'TSTLPX',
    name: 'Chronicle Yellowstone - Lit Protocol Testnet',
    decimals: 18,
    chainType: 'EVM',
    chainName: 'yellowstone',
    iconUrl: '/cryptocurrency/tstlpx.png',
    contractAddress: '',
    addressKey: 'eth',
    defaultWithdrawLimit: '10',
    gasFeeSymbol: 'TSTLPX',
  },
} as const;

/**
 * SUPPORTED_TOKENS_INFO as an array for easier iteration and mapping
 */
export const SUPPORTED_TOKENS_ARRAY = Object.values(SUPPORTED_TOKENS_INFO);

export type TokenType = keyof typeof SUPPORTED_TOKENS_INFO;
export const SUPPORTED_TOKEN_SYMBOLS = Object.keys(SUPPORTED_TOKENS_INFO) as TokenType[]; 

export function getChainIdByChainName(chainName: string): string {
  const chainId = LIT_CHAINS[chainName as keyof typeof LIT_CHAINS].chainId;
  return "0x" + chainId.toString(16);
}
