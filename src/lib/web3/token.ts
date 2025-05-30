export interface TokenInfo {
  symbol: string;
  name: string;
  decimals: number;
  iconUrl?: string;
  chainType: 'EVM' | 'UTXO' | 'Solana' | string;
  contractAddress?: string;
}

export const SUPPORTED_TOKENS_INFO = {
  BTC: {
    symbol: 'BTC',
    name: 'Bitcoin',
    decimals: 8,
    chainType: 'UTXO',
    iconUrl: '/cryptocurrency/btc.png',
    contractAddress: '',
    addressKey: 'btc',
  },
  ETH: {
    symbol: 'ETH',
    name: 'Ethereum',
    decimals: 18,
    chainType: 'EVM',
    iconUrl: '/cryptocurrency/eth.png',
    contractAddress: '',
    addressKey: 'eth',
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
    iconUrl: '/cryptocurrency/usdt.png',
    contractAddress: '0xaA8E23Fb1079EA71e0a56F48a2aA51851D8433D0',
    addressKey: 'eth',
  }
} as const;

/**
 * SUPPORTED_TOKENS_INFO as an array for easier iteration and mapping
 */
export const SUPPORTED_TOKENS_ARRAY = Object.values(SUPPORTED_TOKENS_INFO);

export type TokenType = keyof typeof SUPPORTED_TOKENS_INFO;
export const SUPPORTED_TOKEN_SYMBOLS = Object.keys(SUPPORTED_TOKENS_INFO) as TokenType[]; 