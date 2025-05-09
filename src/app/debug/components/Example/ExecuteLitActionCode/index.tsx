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
import { updateWalletLitActionCode } from "@/app/debug/lit-actions/update-wallet";
import { ethers } from "ethers";

// session PKP
const sessionPkp = {
  "ethAddress" : "0x20D53B71Edd06298DFa8ad49eD83A4847c5730B9",
  "publicKey" : "0x041043714804e4236e3fabba7e068571eb7f878754ed1d67d4a1328f764d7acf9d8af7d3b13d834eb3ed4746da68660e848d97e6fbf7feed16f7cd09c9188046c7",
  "tokenId" : "0x851a8fe056ef1edb067cfe1d9b6d85fc8b3b8141b2bed51343e1570d6a6b73d1",
}

const multisigPkp = {
  "tokenId": "0x40cb3dc1270ba04074fafb3f836531a8a1e6531d698cfdd84df37521731d0c30",
  "publicKey": "0x04feab19140a3f64fd7097343ad0b5e31131c585acbdce8420e104dd021b01370600a2219382d0a01dbf3643057bf5714ba1e38fde6b117dcc2c2c81fb98f78c38",
  "ethAddress": "0xFC91d8Ed58C1e10506FB6fBe9A6c2aB2854b5317"
}

const litActionCode = updateWalletLitActionCode

export function ExecuteLitActionCode({ authMethod }: { authMethod: AuthMethod }) {

  const handleExecuteLitAction = async () => {
    log('authMethod', authMethod);
    const sessionSigs = await getSessionSigs({
      pkpPublicKey: sessionPkp.publicKey,
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
            authMethodType: ethers.utils.hexValue(AUTH_METHOD_TYPE.GoogleJwt),
          },
          publicKey: multisigPkp.publicKey,
          env: process.env.NEXT_PUBLIC_ENV,
          walletId: 'a18da2ed-7c5a-4587-baa6-d42ef26fe43a',
          proposalId: '05681f0d-f001-441a-b184-30a54a7a02ef',
        },
      });
      log('response', response);
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
