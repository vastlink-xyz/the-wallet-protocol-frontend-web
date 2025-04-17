import { useEffect, useState } from 'react';
import { getPKPs, litNodeClient, getSessionSigsByPkp, mintPKPWithPermanentLitAction, MAGIC_NUMBER_LIT_ACTION_IPFS_ID, SIGN_MESSAGE_LIT_ACTION_IPFS_ID, SIGN_AND_COMBINE_ECDSA_LIT_ACTION_IPFS_ID, SIGN_EIP_191_LIT_ACTION_IPFS_ID, mintPKPNormally, mintPKPTest } from '@/lib/lit';
import { log } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { AuthMethod, IRelayPKP, SessionSigs } from '@lit-protocol/types';
import { useRouter } from 'next/navigation';
import { SignMessageCard } from "./SignMessageCard";
import { PkpList } from "./PkpList";
import { ExecuteLitActionCard } from "./ExecuteLitActionCard";
import { PermissionManageCard } from "./PermissionManageCard";
import { Loader2 } from "lucide-react";
import { Multisig } from './Multisig';

interface DashboardProps {
  authMethod: AuthMethod;
  redirectUri: string;
  onLogout: () => void;
  googleAuthMethodId: string | null;  
}

export default function Dashboard({ authMethod, redirectUri, onLogout, googleAuthMethodId }: DashboardProps) {
  const router = useRouter();
  const [pkps, setPkps] = useState<IRelayPKP[]>([]);
  const [currentPkp, setCurrentPkp] = useState<IRelayPKP | null>(null)
  const [sessionSigs, setSessionSigs] = useState<SessionSigs | null>(null)
  const [isLoading, setIsLoading] = useState(false);

  const handleFetchPkps = async () => {
    setIsLoading(true);
    try {
      const pkps = await getPKPs({
        authMethod,
        redirectUri,
      });
      if (pkps.length) {
        setCurrentPkp(pkps[pkps.length - 1])
      }
      setPkps(pkps);
    } catch (error) {
      console.error("Error fetching PKPs:", error);
    } finally {
      setIsLoading(false);
    }
  }

  const handleMintPkpTest = async () => {
    setIsLoading(true);
    try {
      const newPKP = await mintPKPTest({
        authMethod,
        litActionIpfsId: ''
      });
      setPkps(prev => [...prev, newPKP]);
      setCurrentPkp(newPKP);
    } catch (error) {
      console.error("Error minting test PKP:", error);
    } finally {
      setIsLoading(false);
    }
  }

  const handleMintPkpNormally = async () => {
    setIsLoading(true);
    try {
      const newPKP = await mintPKPNormally(authMethod);
      setPkps(prev => [...prev, newPKP]);
      setCurrentPkp(newPKP);
    } catch (error) {
      console.error("Error minting PKP normally:", error);
    } finally {
      setIsLoading(false);
    }
  }

  const handleMintPkpWithPermanentLitAction = async () => {
    setIsLoading(true);
    try {
      const newPKP = await mintPKPWithPermanentLitAction({
        authMethod,
        litActionIpfsId: SIGN_EIP_191_LIT_ACTION_IPFS_ID,
      });
      setPkps(prev => [...prev, newPKP]);
      setCurrentPkp(newPKP);
    } catch (error) {
      console.error("Error minting PKP with permanent Lit Action:", error);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleLogout() {
    litNodeClient.disconnect();
    onLogout();
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

      <div className="flex flex-wrap gap-2 mb-4">
        <Button 
          onClick={handleFetchPkps} 
          disabled={isLoading}
        >
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Fetch Pkps
        </Button>
        <Button 
          onClick={handleMintPkpNormally} 
          disabled={isLoading}
        >
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Mint pkp normally
        </Button>
        <Button 
          onClick={handleMintPkpWithPermanentLitAction} 
          disabled={isLoading}
        >
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          mintPKPWithPermanentLitAction
        </Button>
        <Button 
          onClick={handleMintPkpTest} 
          disabled={isLoading}
        >
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Mint pkp test
        </Button>
      </div>

      <div>
        <p>Google AuthMethodId: {googleAuthMethodId}</p>
      </div>

      {
        currentPkp ? (
          <PkpList
            currentPkp={currentPkp}
            pkps={pkps}
            onSelectPkp={handleSelectPkp}
            authMethod={authMethod}
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
            <PermissionManageCard
              currentPkp={currentPkp}
              sessionSigs={sessionSigs}
            />
          </>
        ) : null
      }

      {
        (currentPkp && sessionSigs) ? (
          <Multisig
            currentPkp={currentPkp}
            sessionSigs={sessionSigs}
          />
        ) : null
      }
    </div>
  );
} 
