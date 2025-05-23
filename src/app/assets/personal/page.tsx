'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { AuthMethod } from '@lit-protocol/types'
import PersonalAssets from './components/PersonalAssets'
import { getAuthMethodFromStorage } from '@/lib/storage/authmethod'

export default function PersonalAssetsPage() {
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

  if (loading || !authMethod) {
    return <div className="flex items-center justify-center">Loading...</div>
  }

  return <PersonalAssets authMethod={authMethod} />
} 