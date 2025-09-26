import { useQuery } from '@tanstack/react-query'
import { User } from '@/app/api/user/storage'
import { useMemo } from 'react'
import { useAuthContext } from '@/hooks/useAuthContext'
import { getUser } from '@/services/userManagementService';

interface UseUserDataReturn {
  userData: User | null
  authMethodId: string | null
  isLoading: boolean
  error: string | null
  hasPkp: boolean
  refetch: () => void
}

export function useUserData(): UseUserDataReturn {
  // Get authMethodId from Context
  const { authMethodId: contextAuthMethodId } = useAuthContext()
  
  // Use React Query to fetch user data
  const {
    data,
    isLoading,
    error,
    refetch
  } = useQuery({
    queryKey: ['userData', contextAuthMethodId],
    queryFn: () => getUser(contextAuthMethodId!),
    enabled: !!contextAuthMethodId, // Only run query if authMethodId exists
    staleTime: 5 * 60 * 1000, // Consider data stale after 5 minutes
    gcTime: 10 * 60 * 1000, // Keep in cache for 10 minutes
  })

  // Memoize computed values
  const userData = useMemo(() => data?.user || null, [data?.user])
  const authMethodId = useMemo(() => contextAuthMethodId || null, [contextAuthMethodId])
  
  const hasPkp = useMemo(() => {
    if (!userData) return false
    return !!(userData.litActionPkp?.ethAddress && 
             userData.litActionPkp?.publicKey && 
             userData.litActionPkp?.tokenId)
  }, [userData])

  const errorMessage = useMemo(() => {
    if (!error) return null
    return error instanceof Error ? error.message : 'Failed to load user data'
  }, [error])

  return {
    userData,
    authMethodId,
    isLoading,
    error: errorMessage,
    hasPkp,
    refetch: () => refetch()
  }
}