'use client'

import { useState, useEffect } from 'react'
import { AuthMethod } from '@lit-protocol/types'

interface PersonalAssetsProps {
  authMethod: AuthMethod
}

export default function PersonalAssets({ authMethod }: PersonalAssetsProps) {

  return (
    <div>
      Personal Assets
    </div>
  )
} 