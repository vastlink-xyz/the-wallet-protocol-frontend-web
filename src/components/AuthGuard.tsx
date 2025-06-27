'use client'

import { useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { useAuthExpiration } from '@/hooks/useAuthExpiration'

// Define routes that require authentication
const PROTECTED_ROUTES = [
  '/assets',
  '/wallet',
  '/swap',
  '/debug'
]

// Define public routes (no authentication required)
const PUBLIC_ROUTES = [
  '/',
  '/invite',
  '/auth/google-callback',
  '/auth/stytch-callback'
]

/**
 * Check if a path requires authentication
 */
function isProtectedRoute(pathname: string): boolean {
  // Check if it's a public route
  if (PUBLIC_ROUTES.some(route => pathname === route || pathname.startsWith(route + '/'))) {
    return false
  }
  
  // Check if it's a protected route
  return PROTECTED_ROUTES.some(route => pathname.startsWith(route))
}

/**
 * Global authentication guard component
 * Monitors route changes and automatically checks authentication status for protected routes
 * This component does not render anything, it only performs authentication checks
 */
export default function AuthGuard() {
  const pathname = usePathname()
  const { verifyAuthOrRedirect } = useAuthExpiration(true, 5 * 60 * 1000) // Enable periodic check every 5 minutes

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