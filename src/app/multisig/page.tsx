'use client'

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Dashboard from '@/app/dashboard/components/Dashboard';
import { DEFAULT_SIGNIN_REDIRECT, getPKPs, googleProvider } from '@/lib/lit';
import { log } from '@/lib/utils';
import { isSignInRedirect, getProviderFromUrl } from '@lit-protocol/lit-auth-client';
import { AuthMethod, IRelayPKP } from '@lit-protocol/types';
import { Button } from '@/components/ui/button';
import { Multisig } from './components';
import { Loader2 } from 'lucide-react';

const AUTH_METHOD_STORAGE_KEY = 'lit-auth-method';

const signer1PKPIndex = 24
const signer2PKPIndex = 1

export default function MultisigPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [authMethod, setAuthMethod] = useState<AuthMethod | null>(null);
  const redirectUri = searchParams.get('redirectUri') || DEFAULT_SIGNIN_REDIRECT;
  const [loading, setLoading] = useState(true);
  const [fetchingData, setFetchingData] = useState(false);
  const [googleAuthMethodId, setGoogleAuthMethodId] = useState<string | null>(null)
  const [currentPkp, setCurrentPkp] = useState<IRelayPKP | null>(null);
  const [pkpIndex, setPkpIndex] = useState(0)

  // Initialize by reading authMethod from localStorage
  useEffect(() => {
    const storedAuthMethod = localStorage.getItem(AUTH_METHOD_STORAGE_KEY);
    log('storedAuthMethod', storedAuthMethod)
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
    async function initAndFetchData() {
      if (authMethod) {
        setFetchingData(true);
        try {
          // Step 1: Get Google Auth Method ID
          const id = await googleProvider.getAuthMethodId(authMethod)
          setGoogleAuthMethodId(id)
          log('id', id)

          // Set PKP index based on ID
          let selectedIndex = 0;
          if (id === '0xe948f294fa97170e5abf6b7f001d5c130e2950baed4384994f78e860d40dccab') {
            selectedIndex = signer1PKPIndex;
          } else if (id === '0x92ae1dbc4ec9fe1eb01549bbaa858e58b8e6ccb69a59ceeca67971ddacaec925') {
            selectedIndex = signer2PKPIndex;
          }
          setPkpIndex(selectedIndex);

          // Step 2: Get PKPs
          const pkps = await getPKPs({
            authMethod,
            redirectUri,
          });
          if (pkps.length) {
            setCurrentPkp(pkps[selectedIndex])
          }
        } catch (error) {
          console.error("Error in initialization process:", error);
        } finally {
          setFetchingData(false);
        }
      }
    }
    
    initAndFetchData();
  }, [authMethod, redirectUri])

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

  if (authMethod && googleAuthMethodId && currentPkp) {
    return (
      <div className="max-w-4xl mx-auto p-4 space-y-6">
        <div className="bg-card p-4 rounded-lg border">
          <h2 className="text-lg font-semibold mb-2">Current PKP Information</h2>
          <div className="space-y-2">
            <div>
              <span className="font-medium">Address:</span> 
              <div className="text-sm bg-muted p-2 rounded break-all mt-1">
                {currentPkp.ethAddress}
              </div>
            </div>
            <div>
              <span className="font-medium">Public Key:</span>
              <div className="text-sm bg-muted p-2 rounded break-all mt-1">
                {currentPkp.publicKey}
              </div>
            </div>
            <div>
              <span className="font-medium">PKP ID:</span>
              <div className="text-sm bg-muted p-2 rounded break-all mt-1">
                {currentPkp.tokenId ? 
                  (typeof currentPkp.tokenId === 'object' ? 
                    JSON.stringify(currentPkp.tokenId) : 
                    String(currentPkp.tokenId)
                  ) : 'N/A'}
              </div>
            </div>
            <div>
              <span className="font-medium">PKP Number:</span>
              <div className="text-sm bg-muted p-2 rounded break-all mt-1">
                # {pkpIndex + 1}
              </div>
            </div>
          </div>
        </div>
        <Multisig
          currentPkp={currentPkp}
          authMethod={authMethod}
          googleAuthMethodId={googleAuthMethodId}
        />
      </div>
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
