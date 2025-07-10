/**
 * Route constants for authentication and navigation
 */

// Routes that require authentication
export const PROTECTED_ROUTES = [
  '/assets',
  '/wallet',
  '/proposals',
  '/swap',
  '/debug'
] as const;

// Routes that don't require authentication (also used for hiding notifications and navbar)
export const PUBLIC_ROUTES = [
  '/',
  '/invite',
  '/auth/google-callback',
  '/auth/stytch-callback'
] as const;

/**
 * Check if a path requires authentication
 */
export function isProtectedRoute(pathname: string): boolean {
  // Check if it's a public route
  if (PUBLIC_ROUTES.some(route => pathname === route || pathname.startsWith(route + '/'))) {
    return false;
  }
  
  // Check if it's a protected route
  return PROTECTED_ROUTES.some(route => pathname.startsWith(route));
}

/**
 * Check if notifications should be shown on a path
 * (Hidden on public routes)
 */
export function shouldShowNotificationOnPath(pathname: string): boolean {
  return !PUBLIC_ROUTES.some(route => 
    pathname === route || pathname.startsWith(route + '/')
  );
}

/**
 * Check if AppNavbar should be hidden on a path
 * (Hidden on public routes)
 */
export function shouldHideNavbar(pathname: string): boolean {
  return PUBLIC_ROUTES.some(route => 
    pathname === route || pathname.startsWith(route + '/')
  );
}