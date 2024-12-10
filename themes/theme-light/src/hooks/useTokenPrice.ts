import { useQuery } from '@tanstack/react-query';
import api from '@/lib/api';

export interface TokenPrices {
  ETH: string;
  MATIC: string;
  TVWT: string;
}

const fetchTokenPrices = async (): Promise<TokenPrices> => {
  const { data } = await api.get('/user-assets/token-prices');
  return data;
};

export const useTokenPrice = (options?: {
  enabled?: boolean;
  onError?: (error: any) => void;
  onSettled?: (data: TokenPrices | undefined, error: any) => void;
}) => {
  return useQuery({
    queryKey: ['tokenPrices'],
    queryFn: fetchTokenPrices,
    enabled: options?.enabled !== false,
    retry: false,
    staleTime: 1000 * 60 * 60,  // data is fresh within 60 minutes
    gcTime: 1000 * 60 * 60,    // cache for 120 minutes
    ...options
  });
};
