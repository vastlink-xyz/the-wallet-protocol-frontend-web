import { useQuery } from '@tanstack/react-query';
import api from '@/lib/api';
import { formatEther } from 'viem';

export interface DailyWithdrawalLimits {
  [key: string]: string;
  ETH: string;
  MATIC: string;
  TVWT: string;
}

const DEFAULT_LIMITS: DailyWithdrawalLimits = {
  ETH: '0',
  MATIC: '0',
  TVWT: '0'
};

const fetchDailyWithdrawalLimits = async (): Promise<DailyWithdrawalLimits> => {
  console.log('fetchDailyWithdrawalLimits')
  const { data } = await api.get('/transaction/default-daily-withdrawal-limits', {
    params: {
      includeUserLimits: true,
    }
  });

  // Convert Wei to Ether for each token
  return {
    ETH: formatEther(BigInt(data.ETH ?? 0)),
    MATIC: formatEther(BigInt(data.MATIC ?? 0)),
    TVWT: formatEther(BigInt(data.TVWT ?? 0)),
  };
};

export const useDailyWithdrawalLimits = (options?: {
  enabled?: boolean;
  onError?: (error: any) => void;
  onSettled?: (data: DailyWithdrawalLimits | undefined, error: any) => void;
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
