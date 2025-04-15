'use client'

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Dashboard from '@/app/dashboard/components/Dashboard';
import { DEFAULT_SIGNIN_REDIRECT, googleProvider } from '@/lib/lit';
import { log } from '@/lib/utils';
import { isSignInRedirect, getProviderFromUrl } from '@lit-protocol/lit-auth-client';
import { AuthMethod } from '@lit-protocol/types';
import { Button } from '@/components/ui/button';

export default function DashboardPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [authMethod, setAuthMethod] = useState<AuthMethod | null>(null);
  const redirectUri = searchParams.get('redirectUri') || DEFAULT_SIGNIN_REDIRECT;
  const [loading, setLoading] = useState(true)

  // Handle authentication redirect from Google
  useEffect(() => {
    // Check if redirected from Google login
    if (isSignInRedirect(DEFAULT_SIGNIN_REDIRECT)) {
      log('Detected redirect from Google OAuth in dashboard page');
      const providerName = getProviderFromUrl();
      if (providerName === 'google') {
        // Continue Google authentication flow
        handleGoogleAuth();
        setLoading(false)
      }
    }
  }, []);

  const handleGoogleAuth = async () => {
    const authMethod = await googleProvider.authenticate();
    setAuthMethod(authMethod);
  }

  if (authMethod) {
    return <Dashboard authMethod={authMethod} redirectUri={redirectUri} />;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="bg-card p-6 rounded-lg border text-center space-y-4">
        <h2 className="text-lg font-semibold">Welcome to Lit Protocol Dashboard</h2>
        <p className="text-muted-foreground">
          Please sign in with Google to access your PKP accounts and manage your digital assets.
        </p>
        <Button 
          onClick={() => window.location.href = '/'} 
          variant="outline"
        >
          Sign In
        </Button>
      </div>
    </div>
  );
}
