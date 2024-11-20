import { useQuery } from '@tanstack/react-query'
import api from '@/lib/api'
import { auth, handleError } from '@/lib/utils'

interface ChartDataItem {
  value: number
  date: string
}

interface DistributionItem {
  label: string
  value: number
}

interface PerformanceChartResponse {
  chartData: ChartDataItem[]
  distribution: DistributionItem[]
}

interface PerformanceChartData {
  chartData: { value: number, date: string }[];
  distribution: { label: string, value: number }[];
}

const PERFORMANCE_CHART_KEY = ['performanceChart'] as const

const fetchPerformanceChart = async (address: string): Promise<PerformanceChartData> => {
  try {
    const res = await api.get<PerformanceChartResponse>('/user-assets/performance-chart', {
      params: { address }
    })
    
    return {
      chartData: res.data.chartData,
      distribution: res.data.distribution,
    }
  } catch (error) {
    throw handleError(error)
  }
}

export function usePerformanceChart(options?: {
  enabled?: boolean
  onError?: (error: Error) => void
}) {
  const { address } = auth.all()
  // const address = '0xf79d08f838a962756370c0f10343f7169ec12dc3'

  return useQuery({
    queryKey: [...PERFORMANCE_CHART_KEY, address],
    queryFn: () => fetchPerformanceChart(address),
    enabled: options?.enabled && !!address,
  })
}