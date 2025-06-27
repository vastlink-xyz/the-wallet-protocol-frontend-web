'use client'

import { useState, useEffect } from 'react'
import { AuthMethod } from '@lit-protocol/types'
import TeamAssets from './components/TeamAssets'
import { getAuthMethodFromStorage } from '@/lib/storage/authmethod'
import { LogoLoading } from '@/components/LogoLoading'

export default function TeamAssetsPage() {
  const [authMethod, setAuthMethod] = useState<AuthMethod | null>(null)

  // Load auth method from storage
  useEffect(() => {
    const storedAuthMethod = getAuthMethodFromStorage()
    setAuthMethod(storedAuthMethod)
  }, [])

  if (!authMethod) {
    return <LogoLoading />
  }

  return <TeamAssets authMethod={authMethod} />
} 