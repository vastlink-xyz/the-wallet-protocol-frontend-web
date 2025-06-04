import { Button } from "@/components/ui/button";
import { litNodeClient } from "@/lib/lit/providers";
import { log } from "@/lib/utils";
import { LitActionResource, LitPKPResource } from "@lit-protocol/auth-helpers";
import { AUTH_METHOD_SCOPE, AUTH_METHOD_TYPE, LIT_ABILITY, LIT_NETWORK } from "@lit-protocol/constants";
import { getAuthIdByAuthMethod } from "@lit-protocol/lit-auth-client";
import { AuthMethod, IRelayPKP } from "@lit-protocol/types";
import { useState, useEffect } from "react";
import { getLitActionIpfsCid, getSessionSigsByPkp, mintPKP, uploadViaPinata } from "@/lib/lit";
import { PKPEthersWallet } from "@lit-protocol/pkp-ethers";
import { LitContracts } from "@lit-protocol/contracts-sdk";
import { editAuthmethodForDebugLitActionCode } from "@/app/debug/components/Example/EditAuthmethod/edit-authmethod-for-debug";
import { Loader2 } from "lucide-react";

interface EditAuthmethodProps {
  authMethod: AuthMethod;
  actionPkp: IRelayPKP | null;
  loading: boolean;
}

export function EditAuthmethod({
  authMethod,
  actionPkp,
  loading
}: EditAuthmethodProps) {
  const [pkp, setPkp] = useState<IRelayPKP | null>(actionPkp);

  // Update pkp when actionPkp changes
  useEffect(() => {
    setPkp(actionPkp);
  }, [actionPkp]);

  const permittedIpfsIdFromLitActionCode = async () => {
    const ipfsIdHex = await getLitActionIpfsCid({
      input: editAuthmethodForDebugLitActionCode,
      outputFormat: "hex"
    })
    log('ipfsId hex', ipfsIdHex)
    return ipfsIdHex;
  }

  const handleMintPKP = async () => {
    const ipfsIdHex = await permittedIpfsIdFromLitActionCode();
    const ipfsId = await uploadViaPinata(editAuthmethodForDebugLitActionCode);
    log('ipfsId', ipfsId)
    const pkp = await mintPKP({
      authMethod,
      options: {
        permittedAuthMethodTypes: [AUTH_METHOD_TYPE.LitAction],
        permittedAuthMethodIds: [ipfsIdHex],
        permittedAuthMethodPubkeys: ['0x'],
        permittedAuthMethodScopes: [[AUTH_METHOD_SCOPE.SignAnything]],
        addPkpEthAddressAsPermittedAddress: false,
        sendPkpToItself: true,
        keyType: 2 // Standard PKP type
      },
    });
    log('pkp', pkp)
    setPkp(pkp);
  }

  const getSessionSigs = async () => {
    if (!pkp || !actionPkp) {
      throw new Error('No PKP available');
    }

    if (!litNodeClient.ready) {
      await litNodeClient.connect();
    }

    const sessionSigs = await litNodeClient.getPkpSessionSigs({
      pkpPublicKey: pkp.publicKey,
      authMethods: [authMethod],
      resourceAbilityRequests: [
        {
          resource: new LitPKPResource('*'),
          ability: LIT_ABILITY.PKPSigning,
        },
        {
          resource: new LitActionResource('*'),
          ability: LIT_ABILITY.LitActionExecution,
        }
      ],
    });
  
    return sessionSigs;
  }

  const handleAddAuthmethod = async () => {
    const sessionSigs = await getSessionSigs();
    log('sessionSigs', sessionSigs)
    // const authMethodId = await getAuthIdByAuthMethod(authMethod)
    const ipfsIdHex = await getLitActionIpfsCid({
      input: editAuthmethodForDebugLitActionCode,
      outputFormat: 'hex',
    })
    const authMethodType = authMethod.authMethodType
    const response = await litNodeClient.executeJs({
      code: editAuthmethodForDebugLitActionCode,
      sessionSigs,
      jsParams: {
        pkpPublicKey: actionPkp?.publicKey,
        litDatilNetwork: LIT_NETWORK.DatilDev,
        // authMethodMetadata: {
        //   addOrRemove: 'add',
        //   keyType: 2,
        //   authMethodType: AUTH_METHOD_TYPE.LitAction,
        //   authMethodId: ipfsIdHex,
        //   authMethodPubkey: '0x',
        //   permittedScopes: [AUTH_METHOD_SCOPE.SignAnything],
        // }
        authMethodMetadata: {
          addOrRemove: 'add',
          keyType: 2,
          authMethodType,
          authMethodId: '0x92ae1dbc4ec9fe1eb01549bbaa858e58b8e6ccb69a59ceeca67971ddacaec925',
          authMethodPubkey: '0x',
          permittedScopes: [AUTH_METHOD_SCOPE.NoPermissions],
        }
      },
    });
    log('response', response)
  }

  const handleRemoveAuthmethod = async () => {
    if (!pkp || !actionPkp) {
      log('No PKP available');
      return;
    }

    const sessionSigs = await getSessionSigs();
    log('sessionSigs', sessionSigs)
    const authMethodType = authMethod.authMethodType
    const authMethodId = await getAuthIdByAuthMethod(authMethod)
    const response = await litNodeClient.executeJs({
      code: editAuthmethodForDebugLitActionCode,
      sessionSigs,
      jsParams: {
        pkpPublicKey: actionPkp.publicKey,
        litDatilNetwork: LIT_NETWORK.DatilDev,
        authMethodMetadata: {
          addOrRemove: 'remove',
          keyType: 2,
          authMethodType,
          authMethodId: authMethodId,
          authMethodPubkey: '0x',
        }
      },
    });
    log('response', response)
  }

  const handleUploadLitAction = async () => {
    const ipfsId = await uploadViaPinata(editAuthmethodForDebugLitActionCode);
    log('ipfsId', ipfsId)
  }


  const handleCheckPermittedAuthmethods = async () => {
    if (!actionPkp) {
      log('No PKPs available');
      return;
    }

    try {
      const sessionSigs = await getSessionSigsByPkp({authMethod, pkp: actionPkp})
      const pkpWallet = new PKPEthersWallet({
        controllerSessionSigs: sessionSigs,
        pkpPubKey: actionPkp.publicKey,
        litNodeClient: litNodeClient,
      });
      
      await pkpWallet.init();
      log('pkpWallet init')

      const litContracts = new LitContracts({
        signer: pkpWallet,
      });
      await litContracts.connect();
      log('litcontract conneected')

      const permittedActions = await litContracts.pkpPermissionsContractUtils.read.getPermittedActions(actionPkp.tokenId)
      log('permitted actions', permittedActions)

      const permittedAuthMethods = await litContracts.pkpPermissionsContract.read.getPermittedAuthMethods(actionPkp.tokenId)
      log('permitted authmethods', permittedAuthMethods)
    } catch (err) {
      console.error(err);
    }
  }


  return (
    <div className="space-y-4">
      {loading ? (
        <div className="flex items-center gap-2">
          <Loader2 className="h-4 w-4 animate-spin" />
          <span>Loading PKPs...</span>
        </div>
      ) : (
        <>
          <Button
            onClick={handleMintPKP}
            disabled={!authMethod || loading}
          >
            Mint PKP
          </Button>

          <Button
            onClick={handleRemoveAuthmethod}
            disabled={!pkp || !authMethod || !actionPkp || loading}
          >
            Remove Authmethod
          </Button>

          <Button
            onClick={handleUploadLitAction}
            disabled={loading}
          >
            Upload Lit Action
          </Button>

          <Button
            onClick={handleCheckPermittedAuthmethods}
            disabled={!actionPkp || loading}
          >
            Check Permitted Authmethods
          </Button>
        </>
      )}
    </div>
  );
}
