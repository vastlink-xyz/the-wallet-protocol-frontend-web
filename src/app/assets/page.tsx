'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function AssetsDefaultPage() {
  const router = useRouter()

  // Default redirect to personal assets page
  useEffect(() => {
    router.replace('/assets/personal')
  }, [router])

  return null // No need to render anything, will redirect immediately
} 