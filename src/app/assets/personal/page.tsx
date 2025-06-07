'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { AuthMethod } from '@lit-protocol/types'
import PersonalAssets from './components/PersonalAssets'
import { getAuthMethodFromStorage } from '@/lib/storage/authmethod'
import { LogoLoading } from '@/components/LogoLoading'

export default function PersonalAssetsPage() {
  const router = useRouter()
  const [authMethod, setAuthMethod] = useState<AuthMethod | null>(null)

  // Check if user is logged in
  useEffect(() => {
    const storedAuthMethod = getAuthMethodFromStorage()
    if (storedAuthMethod) {
      setAuthMethod(storedAuthMethod)
    } else {
      // Redirect to homepage if not logged in
      router.push('/')
    }
  }, [router])

  if (!authMethod) {
    return null
  }

  return <PersonalAssets authMethod={authMethod} />
} 