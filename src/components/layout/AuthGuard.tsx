'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { useAuthExpiration } from '@/hooks/useAuthExpiration'
import { isProtectedRoute } from '@/constants/routes'

/**
 * Global authentication guard component
 * Monitors route changes and automatically checks authentication status for protected routes
 * This component does not render anything, it only performs authentication checks
 */
export default function AuthGuard() {
  const pathname = usePathname()
  const { verifyAuthOrRedirect } = useAuthExpiration() // No longer handles periodic checks

  // Global periodic authentication check (only one timer for the entire app)
  useEffect(() => {
    const interval = setInterval(() => {
      // Only check if we're on a protected route
      if (isProtectedRoute(pathname)) {
        verifyAuthOrRedirect()
      }
    }, 5 * 60 * 1000) // Check every 5 minutes

    return () => clearInterval(interval)
  }, [pathname, verifyAuthOrRedirect])

  useEffect(() => {
    // Check if current route requires authentication
    if (isProtectedRoute(pathname)) {
      console.log(`[AuthGuard] Checking authentication for protected route: ${pathname}`)
      verifyAuthOrRedirect()
    } else {
      console.log(`[AuthGuard] Public route accessed: ${pathname}`)
    }
  }, [pathname, verifyAuthOrRedirect])

  return null
}