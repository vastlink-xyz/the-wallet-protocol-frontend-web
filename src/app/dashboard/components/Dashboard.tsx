import { useEffect, useState } from 'react';
import { getPKPs, litNodeClient, mintPKP, getSessionSigsByPkp, mintPKPWithPermanentLitAction, MAGIC_NUMBER_LIT_ACTION_IPFS_ID, SIGN_MESSAGE_LIT_ACTION_IPFS_ID, SIGN_AND_COMBINE_ECDSA_LIT_ACTION_IPFS_ID, SIGN_EIP_191_LIT_ACTION_IPFS_ID } from '@/lib/lit';
import { log } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { AuthMethod, IRelayPKP, SessionSigs } from '@lit-protocol/types';
import { useRouter } from 'next/navigation';
import { SignMessageCard } from "./SignMessageCard";
import { AccountList } from "./AccountList";
import { ExecuteLitActionCard } from "./ExecuteLitActionCard";

export default function Dashboard({ authMethod, redirectUri }: { authMethod: AuthMethod, redirectUri: string }) {
  const router = useRouter();
  const [pkps, setPkps] = useState<IRelayPKP[]>([]);
  const [currentPkp, setCurrentPkp] = useState<IRelayPKP | null>(null)
  const [sessionSigs, setSessionSigs] = useState<SessionSigs | null>(null)

  const handleFetchPkps = async () => {
    const pkps = await getPKPs({
      authMethod,
      redirectUri,
    });
    if (pkps.length) {
      setCurrentPkp(pkps[pkps.length - 1])
    }
    setPkps(pkps);
  }

  const handleMintPkp = async () => {
    // const newPKP = await mintPKP(authMethod);
    const newPKP = await mintPKPWithPermanentLitAction({
      authMethod,
      litActionIpfsId: SIGN_EIP_191_LIT_ACTION_IPFS_ID,
    });
    setPkps(prev => [...prev, newPKP]);
    setCurrentPkp(newPKP);
  }

  async function handleLogout() {
    // localStorage.removeItem('lit-wallet-sig');
    litNodeClient.disconnect()
    router.push('/');
  }

  async function handleSelectPkp(pkp: IRelayPKP) {
    setCurrentPkp(pkp);
  }

  // Handle PKP changes and refresh sessionSigs
  useEffect(() => {
    const refreshSession = async () => {
      if (!currentPkp) return;
      
      try {
        const newSessionSigs = await getSessionSigsByPkp(authMethod, currentPkp);
        if (newSessionSigs) {
          setSessionSigs(newSessionSigs);
        }
      } catch (err) {
        console.error("Failed to refresh session:", err);
      }
    };

    refreshSession();
  }, [currentPkp, authMethod]);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <Button onClick={handleLogout} variant="outline">Logout</Button>
      </div>

      <Button onClick={handleFetchPkps}>Fetch Pkps</Button>
      <Button onClick={handleMintPkp}>Mint Pkp</Button>

      {
        currentPkp ? (
          <AccountList
            currentPkp={currentPkp}
            pkps={pkps}
            onSelectPkp={handleSelectPkp}
          />
        ) : null
      }

      {
        (currentPkp && sessionSigs) ? (
          <>
            <SignMessageCard
              currentPkp={currentPkp}
              sessionSigs={sessionSigs}
            />
            <ExecuteLitActionCard
              currentPkp={currentPkp}
              sessionSigs={sessionSigs}
              authMethod={authMethod}
            />
          </>
        ) : null
      }


    </div>
  );
} 