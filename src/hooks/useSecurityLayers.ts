import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useAuthContext } from '@/hooks/useAuthContext'
import { SecurityLayer } from '@/types/security'

interface UseSecurityLayersOptions {
  enabled?: boolean
}

interface SecurityLayersResponse {
  securityLayers: SecurityLayer[]
}

// Fetch security layers function
async function fetchSecurityLayers(authMethodId: string, accessToken: string): Promise<SecurityLayer[]> {
  const response = await fetch(`/api/security/layers?authMethodId=${authMethodId}`, {
    headers: {
      'Authorization': `Bearer ${accessToken}`,
    },
  })

  if (!response.ok) {
    throw new Error(`Failed to fetch security layers: ${response.status}`)
  }

  const data: SecurityLayersResponse = await response.json()
  return data.securityLayers || []
}

/**
 * Custom hook for managing security layers data with React Query
 * Provides automatic caching, deduplication, and background updates
 */
export function useSecurityLayers(options: UseSecurityLayersOptions = {}) {
  const { enabled = true } = options
  const { authMethodId, getCurrentAccessToken } = useAuthContext()
  const queryClient = useQueryClient()

  const query = useQuery({
    queryKey: ['security-layers', authMethodId],
    queryFn: async () => {
      if (!authMethodId) {
        throw new Error('No auth method ID available')
      }

      const accessToken = await getCurrentAccessToken()
      if (!accessToken) {
        throw new Error('No access token available')
      }

      return fetchSecurityLayers(authMethodId, accessToken)
    },
    enabled: enabled && !!authMethodId,
    staleTime: 30 * 1000, // 30 seconds - data is fresh for 30 seconds
    gcTime: 5 * 60 * 1000, // 5 minutes - keep in cache for 5 minutes (renamed from cacheTime in v5)
    refetchOnWindowFocus: false, // Don't refetch when window gains focus
    refetchOnMount: false, // Don't refetch on component mount if data exists
    retry: 2, // Retry failed requests 2 times
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000), // Exponential backoff
  })

  // Helper function to manually refetch security layers
  const refetch = query.refetch

  // Helper function to invalidate and refetch security layers
  const invalidateAndRefetch = async () => {
    await queryClient.invalidateQueries({
      queryKey: ['security-layers', authMethodId]
    })
  }

  // Helper function to update security layers cache after mutations
  const updateSecurityLayers = (updater: (old: SecurityLayer[]) => SecurityLayer[]) => {
    queryClient.setQueryData(['security-layers', authMethodId], updater)
  }

  return {
    securityLayers: query.data || [],
    isLoading: query.isLoading,
    isError: query.isError,
    error: query.error,
    isSuccess: query.isSuccess,
    refetch,
    invalidateAndRefetch,
    updateSecurityLayers,
  }
}
