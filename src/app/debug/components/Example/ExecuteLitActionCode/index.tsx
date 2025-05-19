import { Button } from "@/components/ui/button";
import { getAuthMethodTypeByProviderName, litNodeClient } from "@/lib/lit/providers";
import { getSessionSigs } from "@/lib/lit/sessionManager";
import { log } from "@/lib/utils";
import { getAuthIdByAuthMethod } from "@lit-protocol/lit-auth-client";
import { AuthMethod, IRelayPKP } from "@lit-protocol/types";
import { calculateCIDFromString, getLitActionIpfsCid, uploadViaPinata } from "@/lib/lit/get-lit-action-ipfs-cid";
import { AUTH_METHOD_TYPE } from "@lit-protocol/constants";
import { ethers } from "ethers";
import { editAuthmethodLitActionCode } from "@/app/debug/lit-actions/edit-authmethod";
import { editAuthmethodForDebugLitActionCode } from "@/app/debug/lit-actions/edit-authmethod-for-debug";
import { encryptString } from "@lit-protocol/encryption";
import { CURRENT_AUTH_PROVIDER_KEY } from "@/lib/lit";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { verifyAuthTokenLitActionCode } from "@/lib/lit-action-code/verify-auth-token";
import { updateWalletSettingsLitActionCode } from "@/lib/lit-action-code/update-wallet-settings";
import { createWalletLitActionCode } from "@/lib/lit-action-code/create-wallet";
import { multisigTransactionLitActionCode } from "@/lib/lit-action-code/multisig-transaction.lit";
import { personalSignLitActionCode } from "@/lib/lit-action-code/proposal-sign.lit";
import { upgradeLitActionCode } from "@/lib/lit-action-code/upgrade.lit";
import { personalTransactionLitActionCode } from "@/lib/lit-action-code/personal-transaction.lit";

const litActionCode = personalTransactionLitActionCode

interface ExecuteLitActionCodeProps {
  authMethod: AuthMethod;
  sessionPkp: IRelayPKP | null;
  actionPkp: IRelayPKP | null;
  loading: boolean;
}

export function ExecuteLitActionCode({ 
  authMethod,
  sessionPkp,
  actionPkp,
  loading 
}: ExecuteLitActionCodeProps) {
  const [isSaving, setIsSaving] = useState<boolean>(false);

  const handleExecuteLitAction = async () => {
    if (!sessionPkp) {
      log('No session PKP available');
      return;
    }

    log('authMethod', authMethod);
    const pkpPublicKey = sessionPkp.publicKey;
    
    const sessionSigs = await getSessionSigs({
      pkpPublicKey,
      authMethod,
    });
    log('sessionSigs', sessionSigs);
    
    const authMethodId = await getAuthIdByAuthMethod(authMethod);
    const currentAuthProvider = localStorage.getItem(CURRENT_AUTH_PROVIDER_KEY)
    if (!currentAuthProvider) {
      throw new Error('No current auth provider found')
    }
    const authMethodType = getAuthMethodTypeByProviderName(currentAuthProvider)
    try {
      const response = await litNodeClient.executeJs({
        code: litActionCode,
        sessionSigs,
        jsParams: {
          authParams: {
            accessToken: authMethod.accessToken,
            authMethodId: authMethodId,
            authMethodType,
          },
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

  const handleEncryptData = async () => {
    if (!litNodeClient.ready) {
      await litNodeClient.connect();
    }
    const dataToEncrypt = {
      "signers": [
        {
          "email": "zkyeshuoer@gmail.com",
          "ethAddress": "0xee136485baB4ceB31b346383fB395a4eE5142bF8",
          "publicKey": "0x045e0180adf3774affd6c9f57d6ac15c8f0c64fd2832334e977de8a03c2bd54ce49700c61a4897a063b1c58982aa6717c9ea738207df454a3b128a5e4a412aab8b",
          "authMethodId": "0xe948f294fa97170e5abf6b7f001d5c130e2950baed4384994f78e860d40dccab"
        },
        {
          "email": "leonardwadsworth995@gmail.com",
          "ethAddress": "0xA9c23dEFedFF98a2AceF98Db858E8FD564A30c1f",
          "publicKey": "0x044d517cc12d8fd5a4dcc35cf6b67f52f42d6929512498f7fdfa2be6baf64cb3def50ac0e8f6202be7d2a002821728573e89f26a8ba266df8061cd3c7f3dd67d49",
          "authMethodId": "0x92ae1dbc4ec9fe1eb01549bbaa858e58b8e6ccb69a59ceeca67971ddacaec925"
        }
      ],
      "threshold": 2,
      "mfaSettings": {
        "phoneNumber": "134",
        "dailyLimit": "12"
      }
    }

    const { ciphertext, dataToEncryptHash } = await encryptString(
      {
        accessControlConditions: [
          {
            "contractAddress": "",
            "standardContractType": "",
            "chain": "ethereum",
            "method": "",
            "parameters": ["QmXMCmxzm3PPQVzJuGcRp9CCmMXa4dQA5kZP9y6joCyXP3"],
            "returnValueTest": {
              "comparator": "=",
              "value": ''
            }
          }
        ],
        dataToEncrypt: JSON.stringify(dataToEncrypt),
      },
      litNodeClient,
    );
    log('ciphertext', ciphertext);
    log('dataToEncryptHash', dataToEncryptHash);
  }

  const handleVerifyToken = async () => {
    log('authMethod', authMethod);
    const pkpPublicKey = sessionPkp?.publicKey || '';
    
    const sessionSigs = await getSessionSigs({
      pkpPublicKey,
      authMethod,
    });
    log('sessionSigs', sessionSigs);
    
    const authMethodId = await getAuthIdByAuthMethod(authMethod);
    log('authMethodId', authMethodId);
    try {
      const response = await litNodeClient.executeJs({
        code: litActionCode,
        sessionSigs,
        jsParams: {
          accessToken: authMethod.accessToken,
          authMethodId,
          authMethodType: authMethod.authMethodType,
          publicKey: actionPkp?.publicKey,
          env: process.env.NEXT_PUBLIC_ENV,
        },
      });
      log('response', response);
    } catch (error) {
      log('error', error);
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
            onClick={handleExecuteLitAction}
            disabled={!sessionPkp || isSaving}
          >
            {isSaving ? 'Executing...' : 'Execute Custom Lit Action'}
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

          <Button
            onClick={handleEncryptData}
            className="mt-4"
          >
            Encrypt Data
          </Button>

          <Button
            onClick={handleVerifyToken}
            className="mt-4"
          >
            Verify Token
          </Button>
        </>
      )}
    </div>
  );
}
