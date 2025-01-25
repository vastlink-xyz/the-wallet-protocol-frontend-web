import { useQuery } from '@tanstack/react-query';
import api from '@/lib/api';
import { TokenRecord } from '@/types/tokens';
import { getRandomizedTime, OneHourMs } from '@/lib/utils';

const fetchTokenPrices = async (): Promise<TokenRecord<string>> => {
  const { data } = await api.get('/user-assets/token-prices');
  return data;
};

export const useTokenPrice = (options?: {
  enabled?: boolean;
  onError?: (error: any) => void;
  onSettled?: (data: TokenRecord<string> | undefined, error: any) => void;
}) => {
  return useQuery({
    queryKey: ['tokenPrices'],
    queryFn: fetchTokenPrices,
    enabled: options?.enabled !== false,
    retry: false,
    staleTime: getRandomizedTime(OneHourMs),
    ...options
  });
};
