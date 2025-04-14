import { useEffect, useState } from 'react';
import useAccounts from '@/hooks/useAccounts';
import useSession from '@/hooks/useSession';
import { DEFAULT_SIGNIN_REDIRECT, litNodeClient } from '@/lib/lit';
import { log } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { LitPKPResource } from '@lit-protocol/auth-helpers';
import { LIT_ABILITY } from '@lit-protocol/constants';
import { PKPEthersWallet } from '@lit-protocol/pkp-ethers';
import { ethers } from 'ethers';
import { IRelayPKP } from '@lit-protocol/types';
import { useRouter } from 'next/navigation';

export default function Dashboard({ authMethod, redirectUri }: { authMethod: any, redirectUri: string }) {
  const router = useRouter();
  const [signature, setSignature] = useState('');
  const [recoveredAddress, setRecoveredAddress] = useState('');
  const [verified, setVerified] = useState(false);

  const {
    fetchAccounts,
    currentAccount,
    accounts,
    loading: accountsLoading,
    error: accountsError,
    setCurrentAccount,
  } = useAccounts();
  
  const {
    initSession,
    sessionSigs,
    loading: sessionLoading,
    error: sessionError,
  } = useSession();

  const error = accountsError || sessionError;

  async function handleLogout() {
    // localStorage.removeItem('lit-wallet-sig');
    litNodeClient.disconnect()
    router.push('/');
  }

  async function signMessageWithPKP() {
    try {
      await litNodeClient.connect();

      if (!sessionSigs) {
        throw new Error('Session signatures not found');
      }

      if (!currentAccount) {
        throw new Error('Current account not found');
      }

      const pkpWallet = new PKPEthersWallet({
        controllerSessionSigs: sessionSigs,
        pkpPubKey: currentAccount.publicKey,
        litNodeClient: litNodeClient,
      });

      await pkpWallet.init();

      const message = 'Hello, Lit Protocol!';
      const signature = await pkpWallet.signMessage(message);
      log('signature', signature)
      setSignature(signature);

      // Get the address associated with the signature created by signing the message
      const recoveredAddr = ethers.utils.verifyMessage(message, signature);
      setRecoveredAddress(recoveredAddr);

      // Check if the address associated with the signature is the same as the current PKP
      const verified =
        currentAccount.ethAddress.toLowerCase() === recoveredAddr.toLowerCase();
      setVerified(verified);
    } catch (err) {
      console.error(err);
    }
  }

  async function handleSelectAccount(account: IRelayPKP) {
    setCurrentAccount(account);
    // Reset signature state when switching accounts
    setSignature('');
    setRecoveredAddress('');
    setVerified(false);
  }

  useEffect(() => {
    if (authMethod) {
      log('authmethod', authMethod)
      fetchAccounts({
        authMethod,
        redirectUri,
      });
    }
  }, [authMethod, fetchAccounts]);

  useEffect(() => {
    if (authMethod && currentAccount) {
      initSession(authMethod, currentAccount);
    }
  }, [authMethod, currentAccount, initSession]);

  if (accountsLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center space-y-4">
          <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full mx-auto"></div>
          <p className="text-muted-foreground">Finding accounts...</p>
        </div>
      </div>
    );
  }

  if (sessionLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center space-y-4">
          <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full mx-auto"></div>
          <p className="text-muted-foreground">Initializing secure session...</p>
        </div>
      </div>
    );
  }

  if (!currentAccount || !sessionSigs) {
    return (
      <div className="max-w-4xl mx-auto p-4">
        <div className="bg-card p-6 rounded-lg border text-center space-y-4">
          <h2 className="text-lg font-semibold">No Active Account</h2>
          <p className="text-muted-foreground">
            {!currentAccount ? "No account found. Please make sure you're logged in with Google." : "Session initialization failed. Please try refreshing the page."}
          </p>
          <Button 
            onClick={() => window.location.href = '/'} 
            variant="outline"
          >
            Back to Login
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <Button onClick={handleLogout} variant="outline">Logout</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-card p-4 rounded-lg border">
          <h2 className="text-lg font-semibold mb-2">Current Account</h2>
          <div className="space-y-1 text-sm">
            <p><span className="font-medium">Public Key:</span> <span className="break-all">{currentAccount.publicKey}</span></p>
            <p><span className="font-medium">ETH Address:</span> <span className="break-all">{currentAccount.ethAddress}</span></p>
          </div>
        </div>

        <div className="bg-card p-4 rounded-lg border">
          <h2 className="text-lg font-semibold mb-4">All Accounts</h2>
          <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2">
            {accounts.map((account, index) => (
              <div 
                key={index} 
                className={`group relative p-3 rounded-lg border transition-all ${
                  currentAccount.publicKey === account.publicKey 
                    ? 'border-primary bg-primary/5' 
                    : 'border-border hover:border-primary/50'
                }`}
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-muted-foreground">Account #{index + 1}</span>
                    {currentAccount.publicKey === account.publicKey && (
                      <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">
                        Current
                      </span>
                    )}
                  </div>
                  <div className="space-y-1">
                    <div>
                      <span className="text-xs font-medium text-muted-foreground">Public Key</span>
                      <p className="text-sm break-all font-mono">{account.publicKey}</p>
                    </div>
                    <div>
                      <span className="text-xs font-medium text-muted-foreground">ETH Address</span>
                      <p className="text-sm break-all font-mono">{account.ethAddress}</p>
                    </div>
                  </div>
                </div>
                {currentAccount.publicKey !== account.publicKey && (
                  <Button 
                    variant="secondary" 
                    size="sm" 
                    className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() => handleSelectAccount(account)}
                  >
                    Switch to
                  </Button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-card p-4 rounded-lg border mb-6">
        <h2 className="text-lg font-semibold mb-2">Sign Message</h2>
        <Button onClick={signMessageWithPKP} className="mb-4">
          Sign Message
        </Button>
        {signature && (
          <div className="space-y-2">
            <div>
              <p className="font-medium">Signature:</p>
              <pre className="text-sm break-all whitespace-pre-wrap bg-muted p-2 rounded">{signature}</pre>
            </div>
            {recoveredAddress && (
              <div>
                <p className="font-medium">Recovered Address:</p>
                <p className="text-sm break-all bg-muted p-2 rounded">{recoveredAddress}</p>
              </div>
            )}
            {verified && (
              <div>
                <p className="font-medium">Verified:</p>
                <p className="text-sm bg-muted p-2 rounded">{verified ? 'Yes' : 'No'}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
} 