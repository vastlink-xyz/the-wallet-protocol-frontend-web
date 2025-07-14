import { useState, useEffect } from 'react'
import { AuthMethod } from '@lit-protocol/types'
import { getProviderByAuthMethodType } from '@/lib/lit'
import { User } from '@/app/api/user/storage'

interface UseUserDataReturn {
  userData: User | null
  authMethodId: string | null
  isLoading: boolean
  error: string | null
  hasPkp: boolean
}

export function useUserData(authMethod: AuthMethod | null): UseUserDataReturn {
  const [userData, setUserData] = useState<User | null>(null)
  const [authMethodId, setAuthMethodId] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [hasPkp, setHasPkp] = useState(false)

  useEffect(() => {
    const fetchUserData = async () => {
      if (!authMethod) {
        setIsLoading(false)
        return
      }

      try {
        setIsLoading(true)
        setError(null)
        
        // Get authMethodId
        const provider = getProviderByAuthMethodType(authMethod.authMethodType)
        const authId = await provider.getAuthMethodId(authMethod)
        setAuthMethodId(authId)
        
        // Fetch user data
        const userResponse = await fetch(`/api/user?authMethodId=${authId}`)
        if (!userResponse.ok) {
          throw new Error('Failed to fetch user information')
        }
        
        const user = await userResponse.json()
        setUserData(user)
        
        // Validate PKP completeness
        const hasValidPkp = user.litActionPkp?.ethAddress && 
                           user.litActionPkp?.publicKey && 
                           user.litActionPkp?.tokenId
        
        setHasPkp(hasValidPkp)
        
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Failed to load user data'
        console.error('Error fetching user data:', err)
        setError(errorMessage)
        setHasPkp(false)
      } finally {
        setIsLoading(false)
      }
    }
    
    fetchUserData()
  }, [authMethod])

  return {
    userData,
    authMethodId,
    isLoading,
    error,
    hasPkp
  }
}