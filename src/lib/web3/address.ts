import { SUPPORTED_TOKENS_INFO, TokenType } from './token';

export const addressByTokenSymbol = (
  tokenSymbol: TokenType,
  { btc, eth }: { btc: string; eth: string }
) => {
  const tokenInfo = SUPPORTED_TOKENS_INFO[tokenSymbol];
  if (tokenInfo.chainType === 'UTXO') return btc;
  if (tokenInfo.chainType === 'EVM') return eth;
  return '';
};
