import { useQuery } from '@tanstack/react-query'
import api from '@/lib/api'
import { auth, getRandomizedTime, handleError, OneHourMs } from '@/lib/utils'

interface TransactionHistoryParams {
  startDate?: number;
  endDate?: number;
  tokenType?: string;
  useCache?: boolean;
}

const TRANSACTION_HISTORY_KEY = ['transactionHistory'] as const

const fetchTransactionHistory = async (
  address: string, 
  params?: TransactionHistoryParams
): Promise<any[]> => {
  try {
    const res = await api.get<any[]>('/user-assets/transaction-history', {
      params: {
        address,
        startDate: params?.startDate,
        endDate: params?.endDate,
        tokenType: params?.tokenType === 'ALL' ? undefined : params?.tokenType,
        useCache: params?.useCache,
      }
    })
    
    return res.data
  } catch (error) {
    throw handleError(error)
  }
}

export function useTransactionHistory(params?: TransactionHistoryParams & {
  enabled?: boolean;
  onError?: (error: Error) => void;
}) {
  const { address } = auth.all()

  return useQuery({
    queryKey: [...TRANSACTION_HISTORY_KEY, address, params?.startDate, params?.endDate, params?.tokenType, params?.useCache],
    queryFn: () => fetchTransactionHistory(address, params),
    enabled: params?.enabled && !!address,
    staleTime: getRandomizedTime(OneHourMs),
  })
}
