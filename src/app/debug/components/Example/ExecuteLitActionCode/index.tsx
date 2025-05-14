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
import { CURRENT_AUTH_PROVIDER_KEY, getProviderByAuthMethodType } from "@/lib/lit";
import { useState, useEffect, useCallback } from "react";
import { Loader2 } from "lucide-react";
import { verifyAuthTokenLitActionCode } from "@/lib/lit-action-code/verify-auth-token";
import { updateWalletSettingsLitActionCode } from "@/lib/lit-action-code/update-wallet-settings";
import { createWalletLitActionCode } from "@/lib/lit-action-code/create-wallet";
import { multisigTransactionLitActionCode } from "@/lib/lit-action-code/multisig-transaction.lit";

// session PKP
// const sessionPkp = {
//   "ethAddress" : "0x20D53B71Edd06298DFa8ad49eD83A4847c5730B9",
//   "publicKey" : "0x041043714804e4236e3fabba7e068571eb7f878754ed1d67d4a1328f764d7acf9d8af7d3b13d834eb3ed4746da68660e848d97e6fbf7feed16f7cd09c9188046c7",
//   "tokenId" : "0x851a8fe056ef1edb067cfe1d9b6d85fc8b3b8141b2bed51343e1570d6a6b73d1",
// }

const sessionPkp_hardcoded = {
  "ethAddress" : "0x044c6D3e7D31EfA424067915Cdb7368ce8227989",
  "publicKey" : "0x04345027076fd8a6e3e0a3a9964d44dd3617f2d44d1354bbdec622a1dad8b168b9d1a908aa9065567bc8eaf03a42c390336d00904b951d1b25c599080c272b5b96",
  "tokenId" : "0xf61fca4abd27b15354f24ecc88c40fecace972e15b39e7a72ea6b9c9faafb486",  
}

// user2
// const sessionPkp = {
//   "ethAddress" : "0x52C3710406d4AB58cDf9209b0b973b71d5c09902",
//   "publicKey" : "0x04d5fe3ef25dea74378d5c1a68c2ded596539d73695f14362c83e2a8a861d7edee83022041d7988ff5c430f841449bdd23f9fb24472bf6c9c824d7a2aaa833f04c",
//   "tokenId" : "0xe51f33deae0eddfab6487d89628255eb6f2ff0494632332fd87feb20087dfbd5",
// }

// #4
const multisigPkp = {
  "tokenId": "0x40cb3dc1270ba04074fafb3f836531a8a1e6531d698cfdd84df37521731d0c30",
  "publicKey": "0x04feab19140a3f64fd7097343ad0b5e31131c585acbdce8420e104dd021b01370600a2219382d0a01dbf3643057bf5714ba1e38fde6b117dcc2c2c81fb98f78c38",
  "ethAddress": "0xFC91d8Ed58C1e10506FB6fBe9A6c2aB2854b5317"
}

// const multisigPkp = {
//   "ethAddress" : "0xd7e3bACFa79bF7942F84fB7dd13c7a936773196a",
//   "publicKey" : "0x0493f5cb276328c0fefb2b7f3b7e907fd1f819ec28507c43a04bdb5993cc6a3ce421311cd0190c5ad5f0e2b67764adba53c5797f88a5e30b93bead55c8510ba977",
//   "tokenId" : "0x197d20d1fb8efe5531baa1a0b9eae43435166174d98499c7b2569c84baa30974"
// }

const actionPKP_hardcoded = {
  "ethAddress" : "0xC114c2c3B4582Eb3F518b9554654F6bcdA7cE7e0",
  "publicKey" : "0x0411f7539565fc71b3dc65b89f8de07d7dfadb94e706ac39d30364215ee7a454235ef9685670821796e7f5ecb37a0ff1da97989734bb1eeeb9f9e4e2894959f5d2",
  "tokenId" : "0x59a892b5dd9cea4fca5b08c2acd7425fee6f46e048e3a6a48f4660e69ada13b4",
}

const litActionCode = verifyAuthTokenLitActionCode

export function ExecuteLitActionCode({ authMethod }: { authMethod: AuthMethod }) {
  const [sessionPkp, setSessionPkp] = useState<IRelayPKP | null>(null);
  const [actionPkp, setActionPkp] = useState<IRelayPKP | null>(null);
  const [loading, setLoading] = useState(false);

  // Fetch user PKPs from API
  const fetchUserPkps = useCallback(async () => {
    if (!authMethod) return;
    
    try {
      setLoading(true);
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
    } finally {
      setLoading(false);
    }
  }, [authMethod]);

  // Initial data fetch when authMethod is available
  useEffect(() => {
    if (authMethod) {
      fetchUserPkps();
    }
  }, [authMethod, fetchUserPkps]);

  const handleExecuteLitAction = async () => {
    log('authMethod', authMethod);
    const pkpPublicKey = sessionPkp?.publicKey || sessionPkp_hardcoded.publicKey;
    
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
    const pkpPublicKey = sessionPkp?.publicKey || sessionPkp_hardcoded.publicKey;
    
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
    </div>
  );
}
