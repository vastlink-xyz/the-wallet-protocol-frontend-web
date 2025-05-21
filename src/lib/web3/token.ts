export interface TokenInfo {
  symbol: string;
  name: string;
  decimals: number;
  iconUrl?: string;
  chainType: 'EVM' | 'UTXO' | 'Solana' | string;
  contractAddress?: string;
}

export const SUPPORTED_TOKENS_INFO = {
  ETH: {
    symbol: 'ETH',
    name: 'Ethereum',
    decimals: 18,
    chainType: 'EVM',
  },
  BTC: {
    symbol: 'BTC',
    name: 'Bitcoin',
    decimals: 8,
    chainType: 'UTXO',
  },
  // SOL: {
  //   symbol: 'SOL',
  //   name: 'Solana',
  //   decimals: 9,
  //   chainType: 'Solana',
  // },
  // USDT: { // (ERC-20 on Ethereum)
  //   symbol: 'USDT',
  //   name: 'Tether (ERC-20)',
  //   decimals: 6,
  //   chainType: 'EVM',
  //   contractAddress: ''
  // }
} as const;

export type TokenType = keyof typeof SUPPORTED_TOKENS_INFO;
export const SUPPORTED_TOKEN_SYMBOLS = Object.keys(SUPPORTED_TOKENS_INFO) as TokenType[]; 