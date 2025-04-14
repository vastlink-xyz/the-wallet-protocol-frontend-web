'use client'

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Dashboard from '@/components/Dashboard';
import useAuthenticate from '@/hooks/useAuthenticate';
import { DEFAULT_SIGNIN_REDIRECT, DEFAULT_SIGNUP_REDIRECT } from '@/lib/lit';
import { log } from '@/lib/utils';
import { isSignInRedirect, getProviderFromUrl } from '@lit-protocol/lit-auth-client';

export default function DashboardPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectUri = searchParams.get('redirectUri') || DEFAULT_SIGNIN_REDIRECT;
  const { authMethod, loading, error, authWithGoogle } = useAuthenticate(redirectUri);

  // Handle authentication redirect from Google
  useEffect(() => {
    // Check if redirected from Google login
    if (isSignInRedirect(DEFAULT_SIGNIN_REDIRECT)) {
      log('Detected redirect from Google OAuth in dashboard page');
      const providerName = getProviderFromUrl();
      if (providerName === 'google') {
        // Continue Google authentication flow
        authWithGoogle();
      }
    }
  }, [authWithGoogle]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center space-y-4">
          <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full mx-auto"></div>
          <p className="text-muted-foreground">Loading your account...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center space-y-4">
          <div className="text-destructive text-2xl">⚠️</div>
          <p className="text-destructive">Error: {error.message}</p>
          <button 
            className="px-4 py-2 bg-primary text-primary-foreground rounded-md"
            onClick={() => router.push('/')}
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  if (!authMethod) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center space-y-4">
          <p className="text-muted-foreground">Waiting for authentication...</p>
        </div>
      </div>
    );
  }

  return <Dashboard authMethod={authMethod} redirectUri={redirectUri} />;
}
