import { CURRENT_AUTH_PROVIDER_KEY, getLitActionIpfsCid, getProviderByAuthMethodType, getSessionSigs, litNodeClient, mintPersonalPKP } from "@/lib/lit";
import { log } from "@/lib/utils";
import { AuthMethod, IRelayPKP } from "@lit-protocol/types";
import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { SIGN_PROPOSAL_LIT_ACTION_IPFS_ID } from "@/lib/lit/config";
import { upgradeLitActionCode } from "@/lib/lit-action-code/upgrade.lit";
import { LitActionResource } from "@lit-protocol/auth-helpers";
import { AUTH_METHOD_SCOPE, AUTH_METHOD_TYPE, LIT_ABILITY, LIT_NETWORK } from "@lit-protocol/constants";
import { LitPKPResource } from "@lit-protocol/auth-helpers";
import { PKPEthersWallet } from "@lit-protocol/pkp-ethers";
import { LitContracts } from "@lit-protocol/contracts-sdk";
import { getPersonalTransactionIpfsId } from "@/lib/lit/ipfs-id-env";

export function Upgrade({
  authMethod,
}: {
  authMethod: AuthMethod;
}) {
  const [sessionPkp, setSessionPkp] = useState<IRelayPKP | null>(null);
  const [actionPkp, setActionPkp] = useState<IRelayPKP | null>(null);
  const [isMinting, setIsMinting] = useState(false);
  const [isUpgrading, setIsUpgrading] = useState(false);

  // Fetch user PKPs from API
  const fetchUserPkps = useCallback(async () => {
    if (!authMethod) return;
    
    try {
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
    }
  }, [authMethod]);

  // Initial data fetch when authMethod is available
  useEffect(() => {
    if (authMethod) {
      fetchUserPkps();
    }
  }, [authMethod, fetchUserPkps]);

  // Handle mint button click
  const handleMint = async () => {
    if (!authMethod) return;
    
    try {
      setIsMinting(true);
    } catch (error) {
      console.error("Error minting personal PKP:", error);
    } finally {
      setIsMinting(false);
    }
  };

  // Handle upgrade button click (empty implementation for now)
  const handleUpgrade = async () => {
    if (!authMethod) return;
    
    try {
      setIsUpgrading(true);

      const sessionSigs = await getSessionSigs({
        pkpPublicKey: sessionPkp!.publicKey,
        authMethod,
        refreshStytchAccessToken: true,
      });
      log('sessionSigs', sessionSigs)

      const ipfsIdHex = await getPersonalTransactionIpfsId('hex')
      
      const response = await litNodeClient.executeJs({
        code: upgradeLitActionCode,
        sessionSigs,
        jsParams: {
          publicKey: actionPkp!.publicKey,
          litDatilNetwork: LIT_NETWORK.DatilDev,
          env: process.env.NEXT_PUBLIC_ENV,
          // authMethodMetadata: {
          //   addOrRemove: 'remove',
          //   keyType: 2,
          //   authMethodType: AUTH_METHOD_TYPE.LitAction,
          //   authMethodId: ipfsIdHex,
          //   authMethodPubkey: '0x',
          //   // permittedScopes: [AUTH_METHOD_SCOPE.NoPermissions],
          // }
          authMethodMetadata: {
            addOrRemove: 'add',
            keyType: 2,
            authMethodType: AUTH_METHOD_TYPE.LitAction,
            authMethodId: ipfsIdHex,
            authMethodPubkey: '0x',
            permittedScopes: [AUTH_METHOD_SCOPE.SignAnything],
          }
        },
      });
      log('response', response)
    } catch (error) {
      console.error("Error upgrading PKP:", error);
    } finally {
      setIsUpgrading(false);
    }
  };


  const handleCheckPermittedAuthmethods = async () => {
    try {
      if (!litNodeClient.ready) {
        await litNodeClient.connect();
      }

      const sessionSigs = await getSessionSigs({
        pkpPublicKey: sessionPkp!.publicKey,
        authMethod,
        refreshStytchAccessToken: true,
      })
      const pkpWallet = new PKPEthersWallet({
        controllerSessionSigs: sessionSigs,
        pkpPubKey: sessionPkp!.publicKey,
        litNodeClient: litNodeClient,
      });
      
      await pkpWallet.init();
      log('pkpWallet init')

      const litContracts = new LitContracts({
        signer: pkpWallet,
      });
      await litContracts.connect();
      log('litcontract conneected')

      const permittedActions = await litContracts.pkpPermissionsContractUtils.read.getPermittedActions(actionPkp!.tokenId)
      log('permitted actions', permittedActions)

      const permittedAuthMethods = await litContracts.pkpPermissionsContract.read.getPermittedAuthMethods(actionPkp!.tokenId)
      log('permitted authmethods', permittedAuthMethods)
    } catch (err) {
      log('err', err);
    } finally {
    }
  }

  const handleRemoveLitAction = async () => {
    if (!litNodeClient.ready) {
      await litNodeClient.connect();
    }
    
    try {
      const sessionSigs = await getSessionSigs({
        pkpPublicKey: sessionPkp!.publicKey,
        authMethod,
        refreshStytchAccessToken: true,
      });
      log('sessionSigs', sessionSigs)
      
      const response = await litNodeClient.executeJs({
        code: upgradeLitActionCode,
        sessionSigs,
        jsParams: {
          publicKey: actionPkp!.publicKey,
          litDatilNetwork: LIT_NETWORK.DatilDev,
          env: process.env.NEXT_PUBLIC_ENV,
          authMethodMetadata: {
            addOrRemove: 'remove',
            keyType: 2,
            authMethodType: AUTH_METHOD_TYPE.LitAction,
            authMethodId: '0x1220c8be04ad08917a4e9de3293feb98b5f09bd762f72620b4621d6b6643b0c4ab2e',
            authMethodPubkey: '0x',
            // permittedScopes: [AUTH_METHOD_SCOPE.NoPermissions],
          }
        },
      });
      log('response', response)
    } catch (error) {
      console.error("Error upgrading PKP:", error);
    } finally {
      setIsUpgrading(false);
    }
  }

  return (
    <div className="space-y-6 p-4 border rounded-lg">
      <h2 className="text-xl font-semibold">PKP Management</h2>
      
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Current PKPs</h3>
        <div className="text-sm">
          <p>Session PKP: {sessionPkp ? sessionPkp.ethAddress : 'None'}</p>
          <p>Action PKP: {actionPkp ? actionPkp.ethAddress : 'None'}</p>
        </div>
      </div>
      
      <div className="flex gap-4">
        <Button 
          onClick={handleMint} 
          disabled={isMinting}
          className="flex-1"
        >
          {isMinting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Mint Personal PKP
        </Button>
        <Button 
          onClick={handleUpgrade} 
          disabled={isUpgrading || !actionPkp}
          variant="outline"
          className="flex-1"
        >
          {isUpgrading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Upgrade PKP
        </Button>
        <Button 
          onClick={handleRemoveLitAction} 
          variant="outline"
          className="flex-1"
        >
          {isUpgrading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Remove Lit Action
        </Button>
        <Button 
          onClick={handleCheckPermittedAuthmethods} 
          disabled={!actionPkp}
          variant="outline"
          className="flex-1"
        >
          Check Permitted Authmethods
        </Button>
      </div>
    </div>
  )
}
