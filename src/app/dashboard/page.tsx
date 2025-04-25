'use client'

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { DEFAULT_SIGNIN_REDIRECT, googleProvider } from '@/lib/lit';
import { log } from '@/lib/utils';
import { isSignInRedirect, getProviderFromUrl } from '@lit-protocol/lit-auth-client';
import { AuthMethod } from '@lit-protocol/types';

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
        // Redirect to assets page
        router.push('/assets/personal')
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
  
  // Show loading state
  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }
  
  if (!authMethod) {
    return <div className="flex items-center justify-center min-h-screen">Please login first</div>;
  }
  
  return null;
}
