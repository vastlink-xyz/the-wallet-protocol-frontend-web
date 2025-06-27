'use client'

import { useState, useEffect } from 'react'
import { AuthMethod } from '@lit-protocol/types'
import PersonalAssets from './components/PersonalAssets'
import { getAuthMethodFromStorage } from '@/lib/storage/authmethod'
import { LogoLoading } from '@/components/LogoLoading'

export default function PersonalAssetsPage() {
  const [authMethod, setAuthMethod] = useState<AuthMethod | null>(null)

  // Load auth method from storage
  useEffect(() => {
    const storedAuthMethod = getAuthMethodFromStorage()
    setAuthMethod(storedAuthMethod)
  }, [])

  if (!authMethod) {
    return <LogoLoading />
  }

  return <PersonalAssets authMethod={authMethod} />
} 