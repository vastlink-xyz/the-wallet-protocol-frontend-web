'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { AuthMethod } from '@lit-protocol/types'
import TeamAssets from './components/TeamAssets'
import { getAuthMethodFromStorage } from '@/lib/storage/authmethod'

export default function TeamAssetsPage() {
  const router = useRouter()
  const [authMethod, setAuthMethod] = useState<AuthMethod | null>(null)
  const [loading, setLoading] = useState(true)

  // Check if user is logged in
  useEffect(() => {
    const storedAuthMethod = getAuthMethodFromStorage()
    if (storedAuthMethod) {
      setAuthMethod(storedAuthMethod)
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