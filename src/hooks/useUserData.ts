import { useQuery } from '@tanstack/react-query'
import { AuthMethod } from '@lit-protocol/types'
import { getProviderByAuthMethodType } from '@/lib/lit'
import { User } from '@/app/api/user/storage'
import { useMemo } from 'react'

interface UseUserDataReturn {
  userData: User | null
  authMethodId: string | null
  isLoading: boolean
  error: string | null
  hasPkp: boolean
  refetch: () => void
}

// Separate function to get authMethodId
async function getAuthMethodId(authMethod: AuthMethod): Promise<string> {
  const provider = getProviderByAuthMethodType(authMethod.authMethodType)
  return await provider.getAuthMethodId(authMethod)
}

// Fetch user data function
async function fetchUserData(authMethodId: string): Promise<User> {
  const userResponse = await fetch(`/api/user?authMethodId=${authMethodId}`)
  if (!userResponse.ok) {
    throw new Error('Failed to fetch user information')
  }
  return await userResponse.json()
}

// Combined fetch function for both authMethodId and user data
async function fetchUserWithAuthId(authMethod: AuthMethod): Promise<{ user: User; authMethodId: string }> {
  const authMethodId = await getAuthMethodId(authMethod)
  const user = await fetchUserData(authMethodId)
  return { user, authMethodId }
}

export function useUserData(authMethod: AuthMethod | null): UseUserDataReturn {
  // Use React Query to fetch user data
  const {
    data,
    isLoading,
    error,
    refetch
  } = useQuery({
    queryKey: ['userData', authMethod?.accessToken], // Use accessToken as part of key for cache invalidation
    queryFn: () => {
      if (!authMethod) {
        throw new Error('No auth method provided')
      }
      return fetchUserWithAuthId(authMethod)
    },
    enabled: !!authMethod, // Only run query when authMethod exists
    staleTime: 5 * 60 * 1000, // Consider data stale after 5 minutes
    gcTime: 10 * 60 * 1000, // Keep in cache for 10 minutes
  })

  // Memoize computed values
  const userData = useMemo(() => data?.user || null, [data?.user])
  const authMethodId = useMemo(() => data?.authMethodId || null, [data?.authMethodId])
  
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