import { getLitActionIpfsCid, getSessionSigs, litNodeClient, mintPersonalPKP } from "@/lib/lit";
import { log } from "@/lib/utils";
import { AuthMethod, IRelayPKP } from "@lit-protocol/types";
import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { upgradeLitActionCode } from "@/lib/lit-action-code/upgrade.lit";
import { LitActionResource } from "@lit-protocol/auth-helpers";
import { AUTH_METHOD_SCOPE, AUTH_METHOD_TYPE, LIT_ABILITY, LIT_NETWORK } from "@lit-protocol/constants";
import { LitPKPResource } from "@lit-protocol/auth-helpers";
import { PKPEthersWallet } from "@lit-protocol/pkp-ethers";
import { LitContracts } from "@lit-protocol/contracts-sdk";
import { getPersonalTransactionIpfsId, getUpdateWalletIpfsId } from "@/lib/lit/ipfs-id-env";

export function Upgrade({
  authMethod,
  sessionPkp,
  actionPkp,
}: {
  authMethod: AuthMethod;
  sessionPkp: IRelayPKP | null;
  actionPkp: IRelayPKP | null;
}) {
  const [isMinting, setIsMinting] = useState(false);
  const [isUpgrading, setIsUpgrading] = useState(false);

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

      const ipfsIdHex = await getUpdateWalletIpfsId('hex')
      
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
            authMethodId: '0x12207c77cc36cbed78a0cbad49516cc7bdfe6b7391be0ff8c55f8df69c099e24d31f',
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
