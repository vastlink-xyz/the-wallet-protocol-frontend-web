import { useQuery } from '@tanstack/react-query'
import { User } from '@/app/api/user/storage'
import { useMemo } from 'react'
import { useAuthContext } from '@/hooks/useAuthContext'

interface UseUserDataReturn {
  userData: User | null
  authMethodId: string | null
  isLoading: boolean
  error: string | null
  hasPkp: boolean
  refetch: () => void
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
async function fetchUserWithAuthId(authMethodId: string): Promise<{ user: User; authMethodId: string }> {
  if (!authMethodId) {
    throw new Error('No auth method ID provided')
  }
  
  const user = await fetchUserData(authMethodId)
  return { user, authMethodId }
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
    queryFn: () => fetchUserWithAuthId(contextAuthMethodId!),
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