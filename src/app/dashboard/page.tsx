'use client'

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Dashboard from '@/app/dashboard/components/Dashboard';
import { DEFAULT_SIGNIN_REDIRECT, googleProvider } from '@/lib/lit';
import { log } from '@/lib/utils';
import { isSignInRedirect, getProviderFromUrl } from '@lit-protocol/lit-auth-client';
import { AuthMethod } from '@lit-protocol/types';
import { Button } from '@/components/ui/button';

const AUTH_METHOD_STORAGE_KEY = 'lit-auth-method';

export default function DashboardPage() {
  const router = useRouter();
  const [authMethod, setAuthMethod] = useState<AuthMethod | null>(null);
  const [loading, setLoading] = useState(true);
  const [googleAuthMethodId, setGoogleAuthMethodId] = useState<string | null>(null)

  // Initialize by reading authMethod from localStorage
  useEffect(() => {
    const storedAuthMethod = localStorage.getItem(AUTH_METHOD_STORAGE_KEY);
    if (storedAuthMethod) {
      try {
        setAuthMethod(JSON.parse(storedAuthMethod));
      } catch (error) {
        console.error('Failed to parse stored auth method:', error);
        localStorage.removeItem(AUTH_METHOD_STORAGE_KEY);
      }
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    async function getGoogleAuthMethodId() {
      if (authMethod) {
        const id = await googleProvider.getAuthMethodId(authMethod)
        setGoogleAuthMethodId(id)
        // router.push('/debug')
        router.push('/multisig')
      }
    }
    getGoogleAuthMethodId()
  }, [authMethod])

  // Handle authentication redirect from Google
  useEffect(() => {
    if (isSignInRedirect(DEFAULT_SIGNIN_REDIRECT)) {
      log('Detected redirect from Google OAuth in dashboard page');
      const providerName = getProviderFromUrl();
      if (providerName === 'google') {
        handleGoogleAuth();
      }
    }
  }, []);

  const handleGoogleAuth = async () => {
    try {
      const authMethod = await googleProvider.authenticate();
      // Store authMethod in localStorage
      localStorage.setItem(AUTH_METHOD_STORAGE_KEY, JSON.stringify(authMethod));
      setAuthMethod(authMethod);
    } catch (error) {
      console.error('Google authentication failed:', error);
      localStorage.removeItem(AUTH_METHOD_STORAGE_KEY);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem(AUTH_METHOD_STORAGE_KEY);
    setAuthMethod(null);
    router.push('/');
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (authMethod) {
    return (
      <Dashboard 
        authMethod={authMethod} 
        onLogout={handleLogout}
        googleAuthMethodId={googleAuthMethodId}
      />
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="bg-card p-6 rounded-lg border text-center space-y-4">
        <h2 className="text-lg font-semibold">Welcome to Lit Protocol Dashboard</h2>
        <p className="text-muted-foreground">
          Please sign in with Google to access your PKP and manage your digital assets.
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
