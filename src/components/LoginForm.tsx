'use client'

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import useAccounts from '@/hooks/useAccounts';
import useSession from '@/hooks/useSession';
import { ORIGIN, signInWithGoogle, litNodeClient } from '@/lib/lit/lit';
import { log } from '@/lib/utils';
import useAuthenticate from '@/hooks/useAuthenticate';
import { Button } from '@/components/ui/button';
import { LitPKPResource } from '@lit-protocol/auth-helpers';
import { LIT_ABILITY } from '@lit-protocol/constants';
import { AuthSig } from '@lit-protocol/types';
import { PKPEthersWallet } from '@lit-protocol/pkp-ethers';
import { ethers } from 'ethers';

export default function LitDemoPage() {
  const redirectUri = ORIGIN + '/';
  const router = useRouter();
  const [signature, setSignature] = useState('');
  const [recoveredAddress, setRecoveredAddress] = useState('');
  const [verified, setVerified] = useState(false);

  const {
    authMethod,
    loading: authLoading,
    error: authError,
  } = useAuthenticate(redirectUri);
  
  const {
    fetchAccounts,
    currentAccount,
    accounts,
    loading: accountsLoading,
    error: accountsError,
  } = useAccounts();
  
  const {
    initSession,
    sessionSigs,
    loading: sessionLoading,
    error: sessionError,
  } = useSession();

  const error = authError || accountsError || sessionError;

  async function handleGoogleLogin() {
    await signInWithGoogle(redirectUri);
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

  useEffect(() => {
    // If user is authenticated, fetch accounts
    if (authMethod) {
      log('authmethod', authMethod)
      fetchAccounts(authMethod);
    }
  }, [authMethod, fetchAccounts]);

  useEffect(() => {
    // If user is authenticated and has selected an account, initialize session
    if (authMethod && currentAccount) {
      initSession(authMethod, currentAccount);
    }
  }, [authMethod, currentAccount, initSession]);

  async function handleLogout() {
    localStorage.removeItem('lit-wallet-sig');
    window.location.reload();
  }

  if (authLoading) {
    return <div>Authenticating...</div>;
  }

  if (accountsLoading) {
    return <div>Finding accounts...</div>;
  }

  if (sessionLoading) {
    return <div>Initializing secure session...</div>;
  }

  // If user is authenticated, has an account, and session signatures are generated, show dashboard
  if (currentAccount && sessionSigs) {
    return (
      <div>
        <h1>Login successful</h1>
        <p>Account Index: {JSON.stringify(sessionSigs)}</p>
        <p className="break-all">Account public key: {currentAccount.publicKey}</p>
        <p className="break-all">Account eth address: {currentAccount.ethAddress}</p>
        <Button onClick={signMessageWithPKP} className="mt-4">
          Sign Message
        </Button>
        {signature && (
          <div className="mt-4">
            <p className="font-bold">Signature:</p>
            <pre className="break-all whitespace-pre-wrap">{JSON.stringify(signature, null, 2)}</pre>
          </div>
        )}
        {recoveredAddress && (
          <div className="mt-4">
            <p className="font-bold">Recovered Address:</p>
            <p className="break-all">{recoveredAddress}</p>
          </div>
        )}
        {verified && (
          <div className="mt-4">
            <p className="font-bold">Verified:</p>
            <p className="break-all">{verified ? 'Yes' : 'No'}</p>
          </div>
        )}
        <div className="flex gap-4 mt-4">
          <Button onClick={handleLogout} variant="outline">Logout</Button>
        </div>
      </div>
    );
  }

  // If user is not authenticated, show login button
  return (
    <div>
      <Button onClick={handleGoogleLogin}>
        Sign in with Google
      </Button>
      {error && <p style={{ color: 'red' }}>{error.message}</p>}
    </div>
  );
}
