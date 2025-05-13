import { Button } from "@/components/ui/button";
import { getAuthMethodTypeByProviderName, getProviderByAuthMethodType, litNodeClient } from "@/lib/lit/providers";
import { log } from "@/lib/utils";
import { LitActionResource, LitPKPResource } from "@lit-protocol/auth-helpers";
import { AUTH_METHOD_SCOPE, AUTH_METHOD_TYPE, LIT_ABILITY, LIT_NETWORK } from "@lit-protocol/constants";
import { getAuthIdByAuthMethod } from "@lit-protocol/lit-auth-client";
import { AuthMethod, IRelayPKP } from "@lit-protocol/types";
import { useState } from "react";
import { CURRENT_AUTH_PROVIDER_KEY, getLitActionIpfsCid, getSessionSigsByPkp, mintPKP, uploadViaPinata } from "@/lib/lit";
import { PKPEthersWallet } from "@lit-protocol/pkp-ethers";
import { LitContracts } from "@lit-protocol/contracts-sdk";
import { verifyMultisigLitActionCode } from "@/lib/lit-action-code/verify-multisig.lit";
import { editAuthmethodForDebugLitActionCode } from "@/app/debug/lit-actions/edit-authmethod-for-debug";
import { editAuthmethodLitActionCode } from "@/app/debug/lit-actions/edit-authmethod";

// // pkp sign anything for user1
const sessionPKP = {
  "ethAddress" : "0x044c6D3e7D31EfA424067915Cdb7368ce8227989",
  "publicKey" : "0x04345027076fd8a6e3e0a3a9964d44dd3617f2d44d1354bbdec622a1dad8b168b9d1a908aa9065567bc8eaf03a42c390336d00904b951d1b25c599080c272b5b96",
  "tokenId" : "0xf61fca4abd27b15354f24ecc88c40fecace972e15b39e7a72ea6b9c9faafb486",  
}

const actionPKP = {
  "ethAddress" : "0xC114c2c3B4582Eb3F518b9554654F6bcdA7cE7e0",
  "publicKey" : "0x0411f7539565fc71b3dc65b89f8de07d7dfadb94e706ac39d30364215ee7a454235ef9685670821796e7f5ecb37a0ff1da97989734bb1eeeb9f9e4e2894959f5d2",
  "tokenId" : "0x59a892b5dd9cea4fca5b08c2acd7425fee6f46e048e3a6a48f4660e69ada13b4",
}

// // #4
// const multisigPkp = {
//   "tokenId": "0x40cb3dc1270ba04074fafb3f836531a8a1e6531d698cfdd84df37521731d0c30",
//   "publicKey": "0x04feab19140a3f64fd7097343ad0b5e31131c585acbdce8420e104dd021b01370600a2219382d0a01dbf3643057bf5714ba1e38fde6b117dcc2c2c81fb98f78c38",
//   "ethAddress": "0xFC91d8Ed58C1e10506FB6fBe9A6c2aB2854b5317"
// }

// user2
// const sessionPKP = {
//   "ethAddress" : "0x52C3710406d4AB58cDf9209b0b973b71d5c09902",
//   "publicKey" : "0x04d5fe3ef25dea74378d5c1a68c2ded596539d73695f14362c83e2a8a861d7edee83022041d7988ff5c430f841449bdd23f9fb24472bf6c9c824d7a2aaa833f04c",
//   "tokenId" : "0xe51f33deae0eddfab6487d89628255eb6f2ff0494632332fd87feb20087dfbd5",
// }
 
const multisigPkp = {
  "ethAddress" : "0x2FC03E0578Df353445d5557Bd6814F3d18b2c4A4",
  "publicKey" : "0x04575112060aa7bbc89d8d09c75de37a8d4ba5aac4de7a85f9d7604e2bf83ea832d4a2545b13a203ecf8099680a49091cc6090060f220be2832be323e2cd0f667b",
  "tokenId" : "0x35998dec0ff054379fa9c844741dd2700b29e94411a2760ffc9dd4feb76bd057"
}



export function EditAuthmethod({
  authMethod,
}: {
  authMethod: AuthMethod;
}) {
  const [pkp, setPkp] = useState<IRelayPKP | null>(actionPKP);

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
    const currentAuthProvider = localStorage.getItem(CURRENT_AUTH_PROVIDER_KEY)
    if (!currentAuthProvider) {
      throw new Error('No current auth provider found')
    }
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
    // const authMethodId = await getAuthIdByAuthMethod(authMethod)
    const ipfsIdHex = await getLitActionIpfsCid({
      input: editAuthmethodForDebugLitActionCode,
      outputFormat: 'hex',
    })
    const currentAuthProvider = localStorage.getItem(CURRENT_AUTH_PROVIDER_KEY)
    if (!currentAuthProvider) {
      throw new Error('No current auth provider found')
    }
    const authMethodType = getAuthMethodTypeByProviderName(currentAuthProvider)
    const response = await litNodeClient.executeJs({
      code: editAuthmethodForDebugLitActionCode,
      sessionSigs,
      jsParams: {
        pkpPublicKey: multisigPkp.publicKey,
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
    const sessionSigs = await getSessionSigs();
    log('sessionSigs', sessionSigs)
    const currentAuthProvider = localStorage.getItem(CURRENT_AUTH_PROVIDER_KEY)
    if (!currentAuthProvider) {
      throw new Error('No current auth provider found')
    }
    const authMethodType = getAuthMethodTypeByProviderName(currentAuthProvider)
    const authMethodId = await getAuthIdByAuthMethod(authMethod)
    const response = await litNodeClient.executeJs({
      code: editAuthmethodForDebugLitActionCode,
      sessionSigs,
      jsParams: {
        pkpPublicKey: pkp!.publicKey,
        litDatilNetwork: LIT_NETWORK.DatilDev,
        authMethodMetadata: {
          addOrRemove: 'remove',
          keyType: 2,
          authMethodType,
          authMethodId: authMethodId,
          authMethodPubkey: '0x',
          // permittedScopes: [AUTH_METHOD_SCOPE.NoPermissions],
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

      const permittedActions = await litContracts.pkpPermissionsContractUtils.read.getPermittedActions(actionPKP.tokenId)
      log('permitted actions', permittedActions)

      const permittedAuthMethods = await litContracts.pkpPermissionsContract.read.getPermittedAuthMethods(actionPKP.tokenId)
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
