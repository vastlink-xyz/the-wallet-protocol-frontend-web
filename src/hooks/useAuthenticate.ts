import { useCallback, useEffect, useState } from 'react';
import {
  isSignInRedirect,
  getProviderFromUrl,
} from '@lit-protocol/lit-auth-client';
import { AuthMethod } from '@lit-protocol/types';
import { authenticateWithGoogle } from '@/lib/lit/lit';

export default function useAuthenticate(redirectUri?: string) {
  const [authMethod, setAuthMethod] = useState<AuthMethod>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | undefined>();

  /**
   * Handle Google OAuth redirect
   */
  const authWithGoogle = useCallback(async (): Promise<void> => {
    setLoading(true);
    setError(undefined);
    setAuthMethod(undefined);

    try {
      const result = await authenticateWithGoogle(redirectUri as string);
      setAuthMethod(result);
    } catch (err) {
      setError(err instanceof Error ? err : new Error(String(err)));
    } finally {
      setLoading(false);
    }
  }, [redirectUri]);

  useEffect(() => {
    // Check if user is redirected back from social login
    if (redirectUri && isSignInRedirect(redirectUri)) {
      // If redirected, authenticate with social provider
      const providerName = getProviderFromUrl();
      if (providerName === 'google') {
        authWithGoogle();
      }
    }
  }, [redirectUri, authWithGoogle]);

  return {
    authWithGoogle,
    authMethod,
    loading,
    error,
  };
}