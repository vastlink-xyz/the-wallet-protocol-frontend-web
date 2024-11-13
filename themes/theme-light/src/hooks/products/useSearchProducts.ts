import { useQuery } from '@tanstack/react-query'
import api from '@/lib/api'
import { handleError } from '@/lib/utils'
import { IProduct } from '@/pages/marketplace/types'

interface SearchProductsParams {
  page?: number
  pageSize?: number
  category?: string
  keyword?: string
  freeOnly?: boolean
  sortBy?: string
  isRecommended?: boolean
}

interface SearchProductsResponse {
  products: IProduct[]
  total: number
}

const SEARCH_PRODUCTS_KEY = ['searchProducts'] as const

const fetchProducts = async (params: SearchProductsParams): Promise<SearchProductsResponse> => {
  try {
    const res = await api.post<SearchProductsResponse>('/marketplace/product/search-products', params)
    return res.data
  } catch (error) {
    throw handleError(error)
  }
}

export function useSearchProducts(params: SearchProductsParams, options?: {
  enabled?: boolean
  onError?: (error: Error) => void
}) {
  return useQuery({
    queryKey: [...SEARCH_PRODUCTS_KEY, params],
    queryFn: () => fetchProducts(params),
    enabled: options?.enabled,
  })
}
