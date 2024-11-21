import { useQuery } from '@tanstack/react-query'
import api from '@/lib/api'
import { auth, formatNumberWithCommas, handleError } from '@/lib/utils'

interface TotalAssetResponse {
  totalAssets: number
}

interface TotalAssetData {
  raw: number
  formatted: string
  isZero: boolean
  isUSDZero: boolean
}

const TOTAL_ASSET_KEY = ['totalAsset'] as const
const MIN_USD_THRESHOLD = 0.01; // 0.01 USD

const fetchTotalAsset = async (address: string): Promise<TotalAssetData> => {
  try {
    const res = await api.get<TotalAssetResponse>('/user-assets/total-assets', {
      params: { address }
    })
    const raw = res.data.totalAssets
    return {
      raw,
      formatted: formatNumberWithCommas(raw, 2),
      isZero: raw === 0,
      isUSDZero: raw < MIN_USD_THRESHOLD,
    }
  } catch (error) {
    throw handleError(error)
  }
}

export function useTotalAsset(options?: { 
  enabled?: boolean,
  onError?: (error: Error) => void 
}) {
  const { address } = auth.all()
  // const address = '0xf79d08f838a962756370c0f10343f7169ec12dc3'
  
  return useQuery({
    queryKey: [...TOTAL_ASSET_KEY, address],
    queryFn: () => fetchTotalAsset(address),
    enabled: options?.enabled && !!address,
    staleTime: 1000 * 60 * 5,  // data is fresh within 5 minutes
    gcTime: 1000 * 60 * 30,    // cache for 30 minutes
  })
}