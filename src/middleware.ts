import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { isDev, log } from '@/lib/utils';

const themePorts = {
  theme_light: 5173,
  theme_dark: 5174,
}

export function middleware(request: NextRequest) {
  log('middleware', request.url)

  if (isDev) {
    // get theme from url params or cookie
    const themeFromUrl = request.nextUrl.searchParams.get('theme')
    const themeFromCookie = request.cookies.get('current-theme')?.value
    const currentTheme = themeFromUrl || themeFromCookie || 'theme_light'

    // get the request url
    const url = request.nextUrl.clone()
    const port = themePorts[currentTheme as keyof typeof themePorts]
    log('dev currentTheme', currentTheme, 'port', port)
    
    // redirect to Vite dev server with cookie
    const response = NextResponse.rewrite(`http://localhost:${port}${url.pathname}${url.search}`)
    response.cookies.set('current-theme', currentTheme, {
      path: '/',
      sameSite: 'lax'
    })
    return response
  } else {
    // get current theme from cookie or localStorage
    const currentTheme = request.cookies.get('current-theme')?.value || 'theme_light'

    // Skip middleware for static assets in /dist/
    // This allows direct access to Vite's build output (JS, CSS, etc.)
    // Used by Theme.tsx to load the micro-frontend resources
    if (request.nextUrl.pathname.startsWith('/dist/')) {
      return NextResponse.next()
    }
    
    // Handle theme-specific image requests
    // Maps /imgs/* to /dist/${currentTheme}/imgs/*
    // Enables dynamic theme-based asset loading
    if (request.nextUrl.pathname.startsWith('/imgs/')) {
      const newUrl = request.nextUrl.clone()
      newUrl.pathname = `/dist/${currentTheme}/imgs${request.nextUrl.pathname.slice(5)}`
      return NextResponse.rewrite(newUrl)
    }

    // Rewrite all routes to root (/) to support:
    // - Single-page application routing
    // - Micro-frontend initialization
    // - Browser refresh handling
    return NextResponse.rewrite(new URL('/', request.url))
  }
}

export const config = {
  matcher: [
    // Exclude Next.js system paths and static assets from middleware processing
    // This ensures:
    // 1. Next.js internal routes work correctly (_next/*)
    // 2. API routes are handled properly (api/*)
    // 3. Static assets are served directly (static/*)
    // 4. System files are accessible (favicon.ico)
    '/((?!api|_next/static|_next/image|static|favicon.ico).*)',
  ]
}
