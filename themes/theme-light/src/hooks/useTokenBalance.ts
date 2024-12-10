import { useQuery } from '@tanstack/react-query';
import { TokenType } from '@/types/tokens';
import { TokenFactory } from '@/services/TokenService';
import { auth, formatDecimal } from '@/lib/utils';

export interface TokenBalance {
  balance: string;
  tokenType: TokenType;
}

const fetchTokenBalance = async (tokenType: TokenType): Promise<TokenBalance> => {
  const token = TokenFactory.getInstance().createToken(tokenType)
  const { address } = auth.all()
  const b = await token.getBalance(address)
  const bFormatted = formatDecimal(b)
  return { balance: bFormatted, tokenType }
}

export const useTokenBalance = (
  tokenType: TokenType,
  options?: {
    enabled?: boolean;
    onError?: (error: any) => void;
    onSettled?: (data: TokenBalance | undefined, error: any) => void;
  }
) => {
  return useQuery({
    queryKey: ['tokenBalance', tokenType],
    queryFn: () => fetchTokenBalance(tokenType),
    enabled: options?.enabled !== false,
    retry: false,
    gcTime: 0,
    ...options
  });
};
