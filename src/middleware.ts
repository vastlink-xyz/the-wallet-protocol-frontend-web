import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  // Check if in local environment
  const isLocalhost = req.headers.get('host')?.includes('localhost')
                      
  // If not in local environment and request protocol is HTTP, redirect to HTTPS
  if (!isLocalhost && req.url.startsWith('http://')) {
    const httpsUrl = req.url.replace('http://', 'https://');
    return NextResponse.redirect(httpsUrl);
  }
  
  // Otherwise continue with the request
  return NextResponse.next();
}
