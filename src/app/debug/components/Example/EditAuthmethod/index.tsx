import { Button } from "@/components/ui/button";
import { googleProvider, litNodeClient } from "@/lib/lit/googleProvider";
import { log } from "@/lib/utils";
import { LitActionResource, LitPKPResource } from "@lit-protocol/auth-helpers";
import { AUTH_METHOD_SCOPE, AUTH_METHOD_TYPE, LIT_ABILITY, LIT_NETWORK } from "@lit-protocol/constants";
import { getAuthIdByAuthMethod } from "@lit-protocol/lit-auth-client";
import { AuthMethod, IRelayPKP } from "@lit-protocol/types";
import { ethers } from "ethers";
import { LitActionCode } from "./code";
import { useState } from "react";
import { getLitActionIpfsCid, getSessionSigsByPkp, mintPKP, uploadViaPinata } from "@/lib/lit";
import { PKPEthersWallet } from "@lit-protocol/pkp-ethers";
import { LitContracts } from "@lit-protocol/contracts-sdk";

// pkp sign anything
const sessionPKP = {
  "ethAddress" : "0xd027F558d7ae10E673816adb5CdCc23be7814C0e",
  "publicKey" : "0x04042e218a8729f011641a78da1939ab72299ebb70a0ba750645468311694ad1f24787945ebb91fe24caa76717203546748e89d4c589fe76bfa9e1fbd55f118eb0",
  "tokenId" : "0xb7aaf498c4d450855f7a3cccc900b24b348f0e108d5d5a7ba9072e9403f6ff4e",
}

const mintedPKP = {
  "tokenId": "0xcc7953a147320669a77db3d9926410d118fc470227d434285ef1c1faa3b5b6fa",
  "publicKey": "0x042e22c4a03485f227be882e7d6ef242b6b5d24e817cd16f79e81421dc9e9101f59e162ddab92d5d59f989112b5067df40502ab65833b8e5a34911a486c3ca74c3",
  "ethAddress": "0x076728CEc0052a27773576d1Ab5f198E3C73303A"
}

export function EditAuthmethod({
  authMethod,
}: {
  authMethod: AuthMethod;
}) {
  const [pkp, setPkp] = useState<IRelayPKP | null>(mintedPKP);

  const permittedIpfsIdFromLitActionCode = async () => {
    const ipfsIdHex = await getLitActionIpfsCid({
      input: LitActionCode,
      outputFormat: "hex"
    })
    log('ipfsId hex', ipfsIdHex)
    return ipfsIdHex;
  }

  const handleMintPKP = async () => {
    const ipfsIdHex = await permittedIpfsIdFromLitActionCode();
    const ipfsId = await uploadViaPinata(LitActionCode);
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
      provider: googleProvider,
    });
    log('pkp', pkp)
    setPkp(pkp);
  }

  const getSessionSigs = async () => {
    if (!litNodeClient.ready) {
      await litNodeClient.connect();
    }

    const sessionSigs = await litNodeClient.getPkpSessionSigs({
      pkpPublicKey: pkp!.publicKey,
      // expiration: new Date(Date.now() + 1000 * 60 * 60 * 24).toISOString(), // 24 hours
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
    const authMethodId = await getAuthIdByAuthMethod(authMethod)
    const response = await litNodeClient.executeJs({
      code: LitActionCode,
      sessionSigs,
      jsParams: {
        pkpPublicKey: pkp!.publicKey,
        litDatilNetwork: LIT_NETWORK.DatilDev,
        authMethodMetadata: {
          addOrRemove: 'add',
          keyType: 2,
          authMethodType: AUTH_METHOD_TYPE.GoogleJwt,
          authMethodId: authMethodId,
          authMethodPubkey: '0x',
          permittedScopes: [AUTH_METHOD_SCOPE.NoPermissions],
        }
      },
    });
    log('response', response)
  }

  const handleRemoveAuthmethod = async () => {
    const sessionSigs = await getSessionSigs();
    log('sessionSigs', sessionSigs)
    const authMethodId = await getAuthIdByAuthMethod(authMethod)
    const response = await litNodeClient.executeJs({
      code: LitActionCode,
      sessionSigs,
      jsParams: {
        pkpPublicKey: pkp!.publicKey,
        litDatilNetwork: LIT_NETWORK.DatilDev,
        authMethodMetadata: {
          addOrRemove: 'remove',
          keyType: 2,
          authMethodType: AUTH_METHOD_TYPE.GoogleJwt,
          authMethodId: authMethodId,
          authMethodPubkey: '0x',
          // permittedScopes: [AUTH_METHOD_SCOPE.NoPermissions],
        }
      },
    });
    log('response', response)
  }

  const handleUploadLitAction = async () => {
    const ipfsId = await uploadViaPinata(LitActionCode);
    log('ipfsId', ipfsId)
  }


  const handleCheckPermittedAuthmethods = async () => {
    try {
      if (!litNodeClient.ready) {
        await litNodeClient.connect();
      }

      const sessionSigs = await getSessionSigsByPkp(authMethod, sessionPKP)
      const pkpWallet = new PKPEthersWallet({
        controllerSessionSigs: sessionSigs,
        pkpPubKey: sessionPKP.publicKey,
        litNodeClient: litNodeClient,
      });
      
      await pkpWallet.init();
      log('pkpWallet init')

      const litContracts = new LitContracts({
        signer: pkpWallet,
      });
      await litContracts.connect();
      log('litcontract conneected')

      const permittedActions = await litContracts.pkpPermissionsContractUtils.read.getPermittedActions(pkp!.tokenId)
      log('permitted actions', permittedActions)

      const permittedAuthMethods = await litContracts.pkpPermissionsContract.read.getPermittedAuthMethods(pkp!.tokenId)
      log('permitted authmethods', permittedAuthMethods)
    } catch (err) {
      log('err', err);
    } finally {
    }
  }


  return <div>
    <h2>Edit Authmethod</h2>
    <Button onClick={handleUploadLitAction}>Upload Lit Action</Button>
    <Button onClick={handleMintPKP}>Mint PKP</Button>
    <Button onClick={handleAddAuthmethod}>Add Authmethod</Button>
    <Button onClick={handleRemoveAuthmethod}>Remove Authmethod</Button>
    <Button onClick={handleCheckPermittedAuthmethods}>Check Permitted Authmethods</Button>
  </div>;
}
