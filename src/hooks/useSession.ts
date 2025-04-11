import { useState, useCallback } from 'react';
import { AuthMethod, SessionSigs } from '@lit-protocol/types';
import { getSessionSigs } from '@/lib/lit/lit';

export default function useSession() {
  const [sessionSigs, setSessionSigs] = useState<SessionSigs | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | undefined>();

  const initSession = useCallback(
    async (authMethod: AuthMethod, account: any) => {
      setLoading(true);
      setError(undefined);
      setSessionSigs(null);

      try {
        const sessionSigsParams = {
          chain: 'ethereum',
          resourceAbilityRequests: [
            {
              resource: {
                resource_id: '*',
                resource_type: 'pkp',
              },
              ability: 'litAction',
            },
          ],
        };

        const sigs = await getSessionSigs({
          pkpPublicKey: account.publicKey,
          authMethod,
          //@ts-ignore
          sessionSigsParams,
        });

        setSessionSigs(sigs);
      } catch (err) {
        console.error(err);
        setError(err instanceof Error ? err : new Error(String(err)));
      } finally {
        setLoading(false);
      }
    },
    []
  );

  return {
    sessionSigs,
    initSession,
    loading,
    error,
  };
}