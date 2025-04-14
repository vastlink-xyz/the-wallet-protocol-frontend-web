'use client'

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import useAuthenticate from '@/hooks/useAuthenticate';
import { DEFAULT_SIGNUP_REDIRECT } from '@/lib/lit';
import { log } from '@/lib/utils';
import { isSignInRedirect, getProviderFromUrl } from '@lit-protocol/lit-auth-client';
import { mintPKPWithPermanentLitAction } from '@/lib/lit/litPermanentBinding';

export default function RegisterPage() {
  const router = useRouter();
  const { authMethod, loading, error, authWithGoogle } = useAuthenticate(DEFAULT_SIGNUP_REDIRECT);
  const [isMinting, setIsMinting] = useState(false);
  const [mintError, setMintError] = useState<Error | null>(null);

  const dashboardPathWithRedirect = `/dashboard?redirectUri=${encodeURIComponent(DEFAULT_SIGNUP_REDIRECT)}`;

  // Handle authentication redirect from Google
  useEffect(() => {
    // Check if redirected from Google login
    if (isSignInRedirect(DEFAULT_SIGNUP_REDIRECT)) {
      log('Detected redirect from Google OAuth in register page');
      const providerName = getProviderFromUrl();
      if (providerName === 'google') {
        // Continue Google authentication flow
        authWithGoogle();
      }
    }
  }, [authWithGoogle]);

  // Handle PKP registration
  useEffect(() => {
    async function createPKP() {
      // Only create PKP when it's a real signup (isSignUp=true) and has authMethod
      if (authMethod) {
        try {
          setIsMinting(true);
          setMintError(null);
          log('Creating new PKP...');
          const pkp = await mintPKPWithPermanentLitAction({
            authMethod,
            litActionIpfsId: 'QmT5Vi5byp1vcjE9gkxdWYz3zmScg3BBoM5wnWcUEqXiF7',
            redirectUri: DEFAULT_SIGNUP_REDIRECT,
          });
          log('PKP created:', pkp);
          // After successful registration, redirect to dashboard page with redirectUri
          router.replace(dashboardPathWithRedirect);
        } catch (err) {
          console.error('Failed to mint PKP:', err);
          setMintError(err instanceof Error ? err : new Error(String(err)));
        } finally {
          setIsMinting(false);
        }
      }
    }
    
    createPKP();
  }, [authMethod, router]);

  useEffect(() => {
    if (!loading && !authMethod && !isMinting) {
      router.push('/');
    }
  }, [loading, authMethod, router, isMinting]);

  if (loading || isMinting) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center space-y-4">
          <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full mx-auto"></div>
          <p className="text-muted-foreground">
            {isMinting ? "Creating your new account..." : "Authenticating..."}
          </p>
        </div>
      </div>
    );
  }

  if (error || mintError) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center space-y-4">
          <div className="text-destructive text-2xl">⚠️</div>
          <p className="text-destructive">Error: {(error || mintError)?.message}</p>
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

  // This will typically not be rendered as we redirect once auth is complete
  return null;
} 
