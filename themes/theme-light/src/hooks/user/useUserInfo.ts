import { useQuery } from '@tanstack/react-query';
import api from '@/lib/api';
import { auth } from '@/lib/utils';

export interface IPurchasedProduct {
  productId: string;
  purchaseDate: string;  // iso string
  deleteDate?: string;  // iso string
  status: 'active' | 'deleted';
  unread?: boolean;
  lastUsedAt?: string;  // iso string
}

export interface UserInfo {
  email: string;
  displayName: string;
  address: string;
  avatarIndex: number;
  avatar: string;
  kycVerified: boolean;
  kycVerificationTimestamp?: string;  // iso string
  purchasedProducts: IPurchasedProduct[];
  dailyWithdrawalLimits?: {
    ETH?: string;
    MATIC?: string;
    TVWT?: string;
  };
}

const fetchUserInfo = async (): Promise<UserInfo> => {
  const { data } = await api.get('/user/info');
  return data;
};

export const useUserInfo = (options?: { 
  enabled?: boolean;
  onError?: (error: any) => void;
  onSettled?: (data: UserInfo | undefined, error: any) => void;
}) => {
  return useQuery({
    queryKey: ['userInfo'],
    queryFn: fetchUserInfo,
    enabled: options?.enabled !== false,
    retry: false,
    gcTime: 0,
    ...options
  });
};
