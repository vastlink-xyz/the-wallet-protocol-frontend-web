import { useQuery } from '@tanstack/react-query';
import api from '@/lib/api';
import { formatEther } from 'viem';
import { TokenRecord, TokenType } from '@/types/tokens';
import { theTokenListingService } from '@/services/TokenListingService';

const DEFAULT_LIMITS: TokenRecord<string> = theTokenListingService.createTokenMap(() => '0');

const fetchDailyWithdrawalLimits = async (): Promise<TokenRecord<string>> => {
  const { data } = await api.get('/transaction/default-daily-withdrawal-limits', {
    params: {
      includeUserLimits: true,
    }
  });

  // Convert Wei to Ether for each token
  const limits = Object.values(TokenType).reduce((acc, type) => {
    acc[type] = formatEther(BigInt(data[type] ?? 0));
    return acc;
  }, {} as TokenRecord<string>);
  return limits;
};

export const useDailyWithdrawalLimits = (options?: {
  enabled?: boolean;
  onError?: (error: any) => void;
  onSettled?: (data: TokenRecord<string> | undefined, error: any) => void;
}) => {
  return useQuery({
    queryKey: ['dailyWithdrawalLimits'],
    queryFn: fetchDailyWithdrawalLimits,
    enabled: options?.enabled !== false,
    gcTime: 0,
    staleTime: 0,
    initialData: DEFAULT_LIMITS,
    ...options
  });
};
