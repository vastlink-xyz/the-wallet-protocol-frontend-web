import { useCallback, useEffect, useState } from 'react';
import { AuthMethod } from '@lit-protocol/types';
import { authenticateWithGoogle, DEFAULT_SIGNIN_REDIRECT, DEFAULT_SIGNUP_REDIRECT } from '@/lib/lit';
import { log } from '@/lib/utils';

export default function useAuthenticate(redirectUri?: string) {
  const [authMethod, setAuthMethod] = useState<AuthMethod>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | undefined>();

  /**
   * Handle Google OAuth authentication
   */
  const authWithGoogle = useCallback(async (): Promise<void> => {
    setLoading(true);
    setError(undefined);
    setAuthMethod(undefined);

    try {
      log('start authenticateWithGoogle', redirectUri);
      const result = await authenticateWithGoogle(redirectUri as string);
      log('authenticateWithGoogle result', result);
      setAuthMethod(result);
    } catch (err) {
      setError(err instanceof Error ? err : new Error(String(err)));
    } finally {
      setLoading(false);
    }
  }, [redirectUri]);

  return {
    authWithGoogle,
    authMethod,
    loading,
    error,
  };
}