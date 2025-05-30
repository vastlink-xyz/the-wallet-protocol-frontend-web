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
    chainName: 'sepolia',
    iconUrl: '/cryptocurrency/btc.png',
    contractAddress: '',
    addressKey: 'btc',
    defaultWithdrawLimit: '0.001',
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
  },
  VAST: { // (ERC-20 on baseSepolia)
    symbol: 'VAST',
    name: 'Vast',
    decimals: 18,
    chainType: 'EVM',
    chainName: 'baseSepolia',
    iconUrl: '/cryptocurrency/vast.png',
    contractAddress: '0x4f86c33aE84c46972c2f7F8d33FAE3375F3E191b',
    addressKey: 'eth',
    defaultWithdrawLimit: '10',
  },
} as const;

/**
 * SUPPORTED_TOKENS_INFO as an array for easier iteration and mapping
 */
export const SUPPORTED_TOKENS_ARRAY = Object.values(SUPPORTED_TOKENS_INFO);

export type TokenType = keyof typeof SUPPORTED_TOKENS_INFO;
export const SUPPORTED_TOKEN_SYMBOLS = Object.keys(SUPPORTED_TOKENS_INFO) as TokenType[]; 