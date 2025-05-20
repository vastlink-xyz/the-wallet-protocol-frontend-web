import { AuthMethod, IRelayPKP, SessionSigs } from "@lit-protocol/types";
import { EditAuthmethod } from "./EditAuthmethod";
import { ExecuteLitActionCode } from "./ExecuteLitActionCode";
import { Upgrade } from "./Upgrade";
import { useState, useEffect, useCallback } from "react";
import { CURRENT_AUTH_PROVIDER_KEY, getProviderByAuthMethodType, getSessionSigs } from "@/lib/lit";
import { log } from "@/lib/utils";
import { AllUsers } from "./AllUsers";
import { AllMultisigWallets } from "./AllMultisigWallets";

export function Example({
  authMethod,
}: {
  authMethod: AuthMethod;
}) {
  const [sessionPkp, setSessionPkp] = useState<IRelayPKP | null>(null);
  const [actionPkp, setActionPkp] = useState<IRelayPKP | null>(null);
  const [loading, setLoading] = useState(false);
  const [sessionSigs, setSessionSigs] = useState<SessionSigs | null>(null);

  // Fetch user PKPs from API
  const fetchUserPkps = useCallback(async () => {
    if (!authMethod) return;
    
    try {
      setLoading(true);
      const currentAuthProvider = localStorage.getItem(CURRENT_AUTH_PROVIDER_KEY);
      if (!currentAuthProvider) {
        throw new Error('No current auth provider found');
      }
      const provider = getProviderByAuthMethodType(currentAuthProvider);
      const authMethodId = await provider.getAuthMethodId(authMethod);
      
      const response = await fetch(`/api/user/pkp?authMethodId=${authMethodId}`);
      
      if (response.ok) {
        const data = await response.json();
        if (data.sessionPkp) {
          setSessionPkp(data.sessionPkp);
          log('Session PKP loaded:', data.sessionPkp);
        }
        if (data.litActionPkp) {
          setActionPkp(data.litActionPkp);
          log('Action PKP loaded:', data.litActionPkp);
        }
      }
    } catch (error) {
      console.error("Error fetching user PKPs:", error);
    } finally {
      setLoading(false);
    }
  }, [authMethod]);

  // Initial data fetch when authMethod is available
  useEffect(() => {
    if (authMethod) {
      fetchUserPkps();
    }
  }, [authMethod, fetchUserPkps]);

  // Fetch session signatures
  useEffect(() => {
    const fetchSessionSigs = async () => {
      if (!sessionSigs && sessionPkp && authMethod) {
        const sigs = await getSessionSigs({
          pkpPublicKey: sessionPkp.publicKey,
          authMethod: authMethod,
          refreshStytchAccessToken: true,
        });
        setSessionSigs(sigs);
      }
    };

    fetchSessionSigs();
  }, [sessionPkp, authMethod, sessionSigs]);

  return <div className="space-y-8">
    <EditAuthmethod 
      authMethod={authMethod} 
      sessionPkp={sessionPkp}
      actionPkp={actionPkp}
      loading={loading}
    />
    <ExecuteLitActionCode 
      authMethod={authMethod} 
      sessionPkp={sessionPkp}
      actionPkp={actionPkp}
      loading={loading}
    />
    <Upgrade 
      authMethod={authMethod} 
      sessionPkp={sessionPkp}
      actionPkp={actionPkp}
    />
    <AllUsers 
      currentUserSessionPkp={sessionPkp}
      currentUserAuthMethod={authMethod}
      sessionSigs={sessionSigs}
    />
    <AllMultisigWallets 
      currentUserSessionPkp={sessionPkp}
      currentUserAuthMethod={authMethod}
      sessionSigs={sessionSigs}
    />
  </div>;
}
