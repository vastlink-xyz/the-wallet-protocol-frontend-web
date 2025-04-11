import { useState, useCallback } from 'react';
import { AuthMethod, IRelayPKP } from '@lit-protocol/types';
import { getPKPs, mintPKP } from '@/lib/lit/lit';

export default function useAccounts() {
  const [accounts, setAccounts] = useState<IRelayPKP[]>([]);
  const [currentAccount, setCurrentAccount] = useState<IRelayPKP | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | undefined>();

  const fetchAccounts = useCallback(async (authMethod: AuthMethod) => {
    setLoading(true);
    setError(undefined);

    try {
      const pkps = await getPKPs(authMethod);
      setAccounts(pkps);
      
      if (pkps.length > 0) {
        const lastIndex = pkps.length - 1;
        setCurrentAccount(pkps[lastIndex]);
      }
    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err : new Error(String(err)));
    } finally {
      setLoading(false);
    }
  }, []);

  const createAccount = useCallback(async (authMethod: AuthMethod): Promise<IRelayPKP | null> => {
    setLoading(true);
    setError(undefined);

    try {
      const newPKP = await mintPKP(authMethod);
      setAccounts(prev => [...prev, newPKP]);
      setCurrentAccount(newPKP);
      return newPKP;
    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err : new Error(String(err)));
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    accounts,
    currentAccount,
    setCurrentAccount,
    fetchAccounts,
    createAccount,
    loading,
    error,
  };
}