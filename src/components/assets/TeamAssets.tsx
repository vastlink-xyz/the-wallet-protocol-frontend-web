'use client'

import { useState, useEffect } from 'react'
import { AuthMethod } from '@lit-protocol/types'

interface TeamAssetsProps {
  authMethod: AuthMethod
}

export default function TeamAssets({ authMethod }: TeamAssetsProps) {
  return (
    <div>
      Team Assets
    </div>
  )
} 