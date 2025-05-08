import { Button } from "@/components/ui/button";
import { litNodeClient } from "@/lib/lit/googleProvider";
import { getSessionSigs } from "@/lib/lit/sessionManager";
import { log } from "@/lib/utils";
import { getAuthIdByAuthMethod } from "@lit-protocol/lit-auth-client";
import { AuthMethod } from "@lit-protocol/types";
import { getLitActionIpfsCid, uploadViaPinata } from "@/lib/lit/get-lit-action-ipfs-cid";
import { createWalletLitActionCode } from "@/app/debug/lit-actions/create-wallet";
import { customLitActionCode } from "@/app/debug/lit-actions/custom";
import { AUTH_METHOD_TYPE } from "@lit-protocol/constants";
import { verifyGoogleAuthLitActionCode } from "@/app/debug/lit-actions/verify-google-auth";
import { verifyMultisigLitActionCode } from "@/lib/lit-action-code/verify-multisig.lit";
import { editAuthmethodLitActionCode } from "../EditAuthmethod/code";

// session PKP
const pkp = {
  "ethAddress" : "0x20D53B71Edd06298DFa8ad49eD83A4847c5730B9",
  "publicKey" : "0x041043714804e4236e3fabba7e068571eb7f878754ed1d67d4a1328f764d7acf9d8af7d3b13d834eb3ed4746da68660e848d97e6fbf7feed16f7cd09c9188046c7",
  "tokenId" : "0x851a8fe056ef1edb067cfe1d9b6d85fc8b3b8141b2bed51343e1570d6a6b73d1",
}

const litActionCode = editAuthmethodLitActionCode

export function ExecuteLitActionCode({ authMethod }: { authMethod: AuthMethod }) {

  const handleExecuteLitAction = async () => {
    log('authMethod', authMethod);
    const sessionSigs = await getSessionSigs({
      pkpPublicKey: pkp.publicKey,
      authMethod,
    });
    log('sessionSigs', sessionSigs);
    const googleAuthMethodId = await getAuthIdByAuthMethod(authMethod);
    
    try {
      const response = await litNodeClient.executeJs({
        code: litActionCode,
        sessionSigs,
        jsParams: {
          authParams: {
            accessToken: authMethod.accessToken,
            authMethodId: googleAuthMethodId,
            authMethodType: AUTH_METHOD_TYPE.GoogleJwt,
            tokenId: pkp.tokenId,
          },
          dataToEncryptHash: '0x1234',
          publicKey: pkp.publicKey,
        },
      });
      log('response', response);
      const signatureObj = response.signatures['create-wallet-signature']
      log('signatureObj', signatureObj)
    } catch (error) {
      log('error', error);
    }
  }

  const handleLogCustomLitActionCode = async () => {
    log('litActionCode', litActionCode);
    const cid = await getLitActionIpfsCid({
      input: litActionCode,
      outputFormat: 'base58',
    });
    log('cid', cid);

    const ipfsIdHex = await getLitActionIpfsCid({
      input: litActionCode,
      outputFormat: 'hex',
    })
    log('ipfsIdHex', ipfsIdHex);
  }

  const handleUploadViaPinata = async () => {
    const cid = await uploadViaPinata(litActionCode);
    log('cid', cid);
  }

  return (
    <div>
      <h2>Execute Lit Action</h2>
      <Button 
        onClick={handleExecuteLitAction}
        className="mt-4"
      >
        Execute Custom Lit Action
      </Button>

      <Button
        onClick={handleLogCustomLitActionCode}
        className="mt-4"
      >
        Log Custom Lit Action Code
      </Button>

      <Button
        onClick={handleUploadViaPinata}
        className="mt-4"
      >
        Upload via Pinata
      </Button>
    </div>
  );
}
