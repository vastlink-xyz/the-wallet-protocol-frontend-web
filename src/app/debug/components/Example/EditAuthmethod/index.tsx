import { Button } from "@/components/ui/button";
import { litNodeClient } from "@/lib/lit/providers";
import { log } from "@/lib/utils";
import { LitActionResource, LitPKPResource } from "@lit-protocol/auth-helpers";
import { AUTH_METHOD_SCOPE, AUTH_METHOD_TYPE, LIT_ABILITY, LIT_NETWORK } from "@lit-protocol/constants";
import { IRelayPKP } from "@lit-protocol/types";
import { VastbaseAuthMethod } from "@/lib/lit/custom-auth";
import { useState, useEffect } from "react";
import { useAuthContext } from "@/hooks/useAuthContext";
import { getLitActionIpfsCid, mintPKP, SELECTED_LIT_NETWORK, uploadViaPinata } from "@/lib/lit";
import { getMultiProviderSessionSigs } from "@/lib/lit/pkpManager";
import { PKPEthersWallet } from "@lit-protocol/pkp-ethers";
import { LitContracts } from "@lit-protocol/contracts-sdk";
import { editAuthmethodForDebugLitActionCode } from "@/app/debug/components/Example/EditAuthmethod/edit-authmethod-for-debug";
import { Loader2 } from "lucide-react";

interface EditAuthmethodProps {
  authMethod: VastbaseAuthMethod;
  actionPkp: IRelayPKP | null;
  loading: boolean;
}

export function EditAuthmethod({
  authMethod,
  actionPkp,
  loading
}: EditAuthmethodProps) {
  const [pkp, setPkp] = useState<IRelayPKP | null>(actionPkp);
  const { getCurrentAccessToken } = useAuthContext();

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
      permittedAuthMethodTypes: [AUTH_METHOD_TYPE.LitAction],
      permittedAuthMethodIds: [ipfsIdHex],
      permittedAuthMethodPubkeys: ['0x'],
      permittedAuthMethodScopes: [[AUTH_METHOD_SCOPE.SignAnything]],
      addPkpEthAddressAsPermittedAddress: true,
      sendPkpToItself: true,
      keyType: 2 // Standard PKP type
    });
    log('pkp', pkp)
    setPkp(pkp);
  }



  const handleAddAuthmethod = async () => {
    if (!pkp || !actionPkp) {
      throw new Error('No PKP available');
    }

    const accessToken = await getCurrentAccessToken();
    if (!accessToken) {
      throw new Error('No access token available');
    }

    const sessionSigs = await getMultiProviderSessionSigs({
      pkpPublicKey: pkp.publicKey,
      pkpTokenId: pkp.tokenId,
      accessToken,
      providerType: authMethod.providerType,
      userEmail: authMethod.primaryEmail,
    });
    log('sessionSigs', sessionSigs)
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
        litDatilNetwork: SELECTED_LIT_NETWORK,
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

    const accessToken = await getCurrentAccessToken();
    if (!accessToken) {
      log('No access token available');
      return;
    }

    const sessionSigs = await getMultiProviderSessionSigs({
      pkpPublicKey: pkp.publicKey,
      pkpTokenId: pkp.tokenId,
      accessToken,
      providerType: authMethod.providerType,
      userEmail: authMethod.primaryEmail,
    });
    log('sessionSigs', sessionSigs)
    const authMethodType = authMethod.authMethodType
    const authMethodId = authMethod.authMethodId
    const response = await litNodeClient.executeJs({
      code: editAuthmethodForDebugLitActionCode,
      sessionSigs,
      jsParams: {
        pkpPublicKey: actionPkp.publicKey,
        litDatilNetwork: SELECTED_LIT_NETWORK,
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
      // Check if it's the new VastbaseAuthMethod type
      if ('providerType' in authMethod && 'primaryEmail' in authMethod) {
        // Use new multi-provider session sigs
        const accessToken = await getCurrentAccessToken();
        if (!accessToken) {
          log('No access token available');
          return;
        }

        const sessionSigs = await getMultiProviderSessionSigs({
          pkpPublicKey: actionPkp.publicKey,
          pkpTokenId: actionPkp.tokenId,
          accessToken,
          providerType: authMethod.providerType,
          userEmail: authMethod.primaryEmail,
        });
        
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
      } else {
        console.error('AuthMethod type not supported. Please use VastbaseAuthMethod.');
        log('AuthMethod type not supported');
      }
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
