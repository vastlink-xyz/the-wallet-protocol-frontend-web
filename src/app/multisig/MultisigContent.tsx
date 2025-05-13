'use client'

import { useEffect, useState, useCallback } from 'react';
import { AuthMethod, IRelayPKP } from '@lit-protocol/types';
import { Button } from '@/components/ui/button';
import { Multisig } from './components';
import { Loader2 } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { getProviderByAuthMethodType } from '@/lib/lit';
import { CURRENT_AUTH_PROVIDER_KEY } from '@/lib/lit';

const AUTH_METHOD_STORAGE_KEY = 'lit-auth-method';

export default function MultisigContent() {
  const searchParams = useSearchParams();
  const walletId = searchParams.get('walletId');
  
  const [authMethod, setAuthMethod] = useState<AuthMethod | null>(null);
  const [loading, setLoading] = useState(true);
  const [fetchingData, setFetchingData] = useState(false);
  const [authMethodId, setAuthMethodId] = useState<string | null>(null)
  const [sessionPkp, setSessionPkp] = useState<IRelayPKP | null>(null);
  const [litActionPkp, setLitActionPkp] = useState<IRelayPKP | null>(null);

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

  // Fetch user PKPs from API
  const fetchUserPkps = useCallback(async () => {
    if (!authMethod) return;
    
    try {
      setFetchingData(true);
      const currentAuthProvider = localStorage.getItem(CURRENT_AUTH_PROVIDER_KEY)
      if (!currentAuthProvider) {
        throw new Error('No current auth provider found')
      }
      const provider = getProviderByAuthMethodType(currentAuthProvider)
      const authMethodId = await provider.getAuthMethodId(authMethod);
      setAuthMethodId(authMethodId);
      
      const response = await fetch(`/api/user/pkp?authMethodId=${authMethodId}`);
      
      if (response.ok) {
        const data = await response.json();
        if (data.sessionPkp) {
          setSessionPkp(data.sessionPkp);
        }
        if (data.litActionPkp) {
          setLitActionPkp(data.litActionPkp);
        }
      }
    } catch (error) {
      console.error("Error fetching user PKPs:", error);
    } finally {
      setFetchingData(false);
    }
  }, [authMethod]);

  // Initial data fetch when authMethod is available
  useEffect(() => {
    if (authMethod) {
      fetchUserPkps();
    }
  }, [authMethod, fetchUserPkps]);
  
  // Callback function for when Mint component completes PKP minting
  const handleMintComplete = useCallback((newSessionPkp: IRelayPKP, newLitActionPkp: IRelayPKP) => {
    setSessionPkp(newSessionPkp);
    setLitActionPkp(newLitActionPkp);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-2" />
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  if (authMethod && fetchingData) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-2" />
          <p>Loading user data...</p>
        </div>
      </div>
    );
  }

  if (authMethod && authMethodId) {
    return (
      <>
        {/* <Mint 
          authMethod={authMethod} 
          litActionPkp={litActionPkp}
          isLoading={fetchingData}
          onMintComplete={handleMintComplete}
        /> */}

        {
          (litActionPkp && sessionPkp) ? (
            <div className="max-w-4xl mx-auto p-4 space-y-6">
              <Multisig
                currentPkp={litActionPkp}
                sessionPkp={sessionPkp}
                authMethod={authMethod}
                authMethodId={authMethodId}
                initialWalletId={walletId || ''}
              />
            </div>
          ) : null
        }
      </>
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
