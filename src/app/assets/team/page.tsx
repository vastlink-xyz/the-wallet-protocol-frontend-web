'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { AuthMethod } from '@lit-protocol/types'
import TeamAssets from '@/components/assets/TeamAssets'

const AUTH_METHOD_STORAGE_KEY = 'lit-auth-method'

export default function TeamAssetsPage() {
  const router = useRouter()
  const [authMethod, setAuthMethod] = useState<AuthMethod | null>(null)
  const [loading, setLoading] = useState(true)

  // Check if user is logged in
  useEffect(() => {
    const storedAuthMethod = localStorage.getItem(AUTH_METHOD_STORAGE_KEY)
    if (storedAuthMethod) {
      try {
        setAuthMethod(JSON.parse(storedAuthMethod))
      } catch (error) {
        console.error('Failed to parse stored auth method:', error)
        router.push('/')
      }
    } else {
      // Redirect to homepage if not logged in
      router.push('/')
    }
    setLoading(false)
  }, [router])

  if (loading) {
    return <div className="flex items-center justify-center">Loading...</div>
  }

  if (!authMethod) {
    return null // No need to render anything, will be redirected
  }

  return <TeamAssets authMethod={authMethod} />
} 