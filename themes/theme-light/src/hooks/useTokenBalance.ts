import { useQuery } from '@tanstack/react-query';
import { TokenRecord, TokenType } from '@/types/tokens';
import { theTokenService } from '@/services/TokenService';
import { auth, formatDecimal } from '@/lib/utils';

const fetchTokenBalance = async (tokenType: TokenType): Promise<string> => {
  const token = theTokenService.getToken(tokenType)
  const { address } = auth.all()
  const b = await token.getBalance(address)
  return formatDecimal(b) || '0'
}

const fetchAllTokenBalances = async (): Promise<TokenRecord<string>> => {
  const emptyMap = theTokenService.createTokenMap(() => '0');
  const tokens = Object.values(TokenType);
  const balances = await Promise.all(tokens.map(type => fetchTokenBalance(type)));
  
  return tokens.reduce((acc, type, index) => ({
    ...acc,
    [type]: balances[index] || '0'
  }), emptyMap);
}

// fetch single token balance
export const useSingleTokenBalance = (tokenType: TokenType) => {
  return useQuery<string>({
    queryKey: ['tokenBalance', tokenType],
    queryFn: () => fetchTokenBalance(tokenType),
    enabled: true,
    retry: false,
    gcTime: 0,
  });
};

// fetch all token balances
export const useAllTokenBalances = () => {
  return useQuery<TokenRecord<string>>({
    queryKey: ['tokenBalances'],
    queryFn: fetchAllTokenBalances,
    enabled: true,
    retry: false,
    gcTime: 0,
  });
};
