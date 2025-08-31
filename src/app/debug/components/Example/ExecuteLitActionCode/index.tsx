import { Button } from "@/components/ui/button";
import { litNodeClient } from "@/lib/lit/providers";
import { useCustomAuthSessionSigs } from "@/hooks/useAuthContext";
import { log } from "@/lib/utils";
import { IRelayPKP } from "@lit-protocol/types";
import { calculateCIDFromString, getLitActionIpfsCid, hexCidToBase58, uploadViaPinata } from "@/lib/lit/get-lit-action-ipfs-cid";
import { AUTH_METHOD_TYPE } from "@lit-protocol/constants";
import { ethers } from "ethers";
import { editAuthmethodForDebugLitActionCode } from "@/app/debug/components/Example/EditAuthmethod/edit-authmethod-for-debug";
import { encryptString } from "@lit-protocol/encryption";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { personalSignLitActionCode } from "@/lib/lit-action-code/proposal-sign.lit";
import { decryptDebugLitActionCode } from "@/app/debug/decrypt-lit-action";
import { litActionCodeForUpdateMultisigWalletSettings } from "@/lib/lit-action-code/update-multisig-wallet-settings";
import { litActionCodeForPersonalTransaction } from "@/lib/lit-action-code/personal-transaction.lit";
import { litActionCodeForMultisigTransaction } from "@/lib/lit-action-code/multisig-transaction.lit";
import { litActionCodeForCreateMultisigWallet } from "@/lib/lit-action-code/create-multisig-wallet";
import { litActionCodeForSecurityVerification } from "@/lib/lit-action-code/security-verification.lit";
import { litActionCodeForMultiProviderAuth } from "@/lib/lit-action-code/multi-provider-auth.lit";
import { VastbaseAuthMethod } from "@/lib/lit/custom-auth";
import { useAuthContext } from "@/hooks/useAuthContext";
import { litActionCodeForAPIKeyManagement } from "@/lib/lit-action-code/api-key-management.lit";
import { litActionContext } from "@/lib/lit";
import { litActionCodeForCommonUpgradableProxy } from "@/lib/lit-action-code/common-upgradable-proxy.lit";
import { litActionCodeForDecryptAndCombine } from "@/lib/lit-action-code/decrypt-and-combine.lit";


// const litActionCode = litActionCodeForMultiProviderAuth
// const litActionCode = litActionCodeForCreateMultisigWallet
// const litActionCode = litActionCodeForUpdateMultisigWalletSettings
// const litActionCode = litActionCodeForMultisigTransaction
// const litActionCode = litActionCodeForPersonalTransaction

const litActionCode = litActionCodeForUpdateMultisigWalletSettings

interface ExecuteLitActionCodeProps {
  authMethod: VastbaseAuthMethod;
  actionPkp: IRelayPKP | null;
  loading: boolean;
}

export function ExecuteLitActionCode({ 
  authMethod,
  actionPkp,
  loading 
}: ExecuteLitActionCodeProps) {
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const getCustomAuthSessionSigs = useCustomAuthSessionSigs();
  const { getCurrentAccessToken } = useAuthContext();

  const handleExecuteLitAction = async () => {
    if (!actionPkp) {
      log('No session PKP available');
      return;
    }

    log('authMethod', authMethod);
    const pkpPublicKey = actionPkp.publicKey;
    
    const sessionSigs = await getCustomAuthSessionSigs();
    
    if (!sessionSigs) {
      log('Failed to get session signatures');
      return;
    }
    log('sessionSigs', sessionSigs);
    
    const authMethodId = authMethod.authMethodId;
    const authMethodType = authMethod.authMethodType
    try {
      const response = await litNodeClient.executeJs({
        code: litActionCode,
        sessionSigs,
        jsParams: {
          authParams: {
            accessToken: await getCurrentAccessToken(),
            authMethodId: authMethodId,
            authMethodType,
          },
          litActionContext,
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
    const pkpPublicKey = actionPkp?.publicKey || '';
    
    const sessionSigs = await getCustomAuthSessionSigs();
    
    if (!sessionSigs) {
      log('Failed to get session signatures');
      return;
    }
    log('sessionSigs', sessionSigs);
    
    const authMethodId = authMethod.authMethodId;
    log('authMethodId', authMethodId);
    const accessToken = await getCurrentAccessToken();
    if (!accessToken) {
      log('No access token available');
      return;
    }

    try {
      const response = await litNodeClient.executeJs({
        code: litActionCode,
        sessionSigs,
        jsParams: {
          accessToken,
          authMethodId,
          authMethodType: authMethod.authMethodType,
          publicKey: actionPkp?.publicKey,
          litActionContext,
        },
      });
      log('response', response);
    } catch (error) {
      log('error', error);
    }
  }

  const handleHexToBase58 = async () => {
    const ipfsIdHex = '0x122045a6414ec08fded72e25a0dbd48121415c6e8c14dbaa46e466eb08f080e1e45c'
    const base58Cid = hexCidToBase58(ipfsIdHex);
    log('base58Cid', base58Cid);
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
            disabled={!actionPkp || isSaving}
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

          <Button
            onClick={handleHexToBase58}
            className="mt-4"
          >
            Hex to Base58
          </Button>
        </>
      )}
    </div>
  );
}
