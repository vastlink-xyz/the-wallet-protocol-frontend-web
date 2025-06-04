'use client'

import { Button } from "@/components/ui/button"
import { getLitActionIpfsCid, getPKPs, getSessionSigsByPkp, litNodeClient, mintPKP } from "@/lib/lit"
import { log } from "@/lib/utils";
import { AccessControlConditions, AuthMethod } from "@lit-protocol/types";
import { useEffect, useState } from "react";
import { AUTH_METHOD_SCOPE, AUTH_METHOD_TYPE, LIT_ABILITY, LIT_CHAINS, LIT_NETWORK } from "@lit-protocol/constants";
import { Example } from "./components/Example";
import { getAuthMethodFromStorage } from '@/lib/storage/authmethod';
import { fetchEthTransactionHistory } from "@/lib/web3/eth";
import { getChainIdByChainName } from "@/lib/web3/token";
import { getAuthIdByAuthMethod } from "@lit-protocol/lit-auth-client";
import { personalSignLitActionCode } from "@/lib/lit-action-code/proposal-sign.lit";
import { encryptString } from "@lit-protocol/encryption";
import { decryptDebugLitActionCode } from "./decrypt-lit-action";
import { upgradeLitActionCode } from "@/lib/lit-action-code/upgrade.lit";
import { getUpgradeIpfsId } from "@/lib/lit/ipfs-id-env";
import { getPersonalSignIpfsId } from "@/lib/lit/ipfs-id-env";
import { LitActionResource } from "@lit-protocol/auth-helpers";
import { LitAccessControlConditionResource } from "@lit-protocol/auth-helpers";

const pkp = {
  "tokenId": "0xb93f2816733176218cdad7415e87ce06a5f735c736347a3a427839c4c2dad055",
  "publicKey": "0x048fa9dbc9a6b40b7020f4e175d9b57bc4625c4debed3440a7c0961f8ceee1640160cc9f871642427652312a2d5f837bb585c6626d5dc4e22df4382c72de924ad3",
  "ethAddress": "0xA529033ac1a00eDC7229076dB8507668eE5B0b96"
}

// session pkp
// const pkp = {
//   "tokenId": "0x0ba25cb3b1af9bbfb115a183c3f38470558962d90d4dbcea3a968c8ee1717838",
//   "publicKey": "0x045cd7f7e11b2ecec17cbc481ca322e96a5411e50eeb2adbe832458e5add9f11f075fa396b7fa694d32b8590aee7bef734d9364aa96fc4fd8ff6cc2879e2b0a5aa",
//   "ethAddress": "0x13569AB9b12548f5b56af3f16b102Dd8c46e6323"
// }

const accessControlConditions: AccessControlConditions = [
  {
    contractAddress: "",
    standardContractType: "",
    chain: "ethereum",
    method: "",
    parameters: [":userAddress"],
    returnValueTest: {
      comparator: "=",
      value: pkp.ethAddress,
    },
  },
];

export default function DebugPage() {
  const [authMethod, setAuthMethod] = useState<AuthMethod | null>(null);

  // Initialize by reading authMethod from localStorage
  useEffect(() => {
    const storedAuthMethod = getAuthMethodFromStorage();
    if (storedAuthMethod) {
      setAuthMethod(storedAuthMethod);
    }
  }, []);

  const handleGetAllPKPs = async () => {
    if (!authMethod) {
      return
    }

    await getPKPs({authMethod})
  }

  const handleVerifyToken = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/verify-token`, {
      method: 'POST',
      body: JSON.stringify({
        authMethodType: authMethod?.authMethodType,
        accessToken: authMethod!.accessToken,
      }),
    })

    const data = await res.json()
    log('verify token', data)
  }

  const handleTest = async () => {
    const a = LIT_CHAINS['baseSepolia']
    log('a', a)
  }

  const handleFetchEthTransactionHistory = async () => {
    log('fetchEthTransactionHistory')
    const response = await fetchEthTransactionHistory({
      address: '0x22ef809BD8D22853A9Be578aFA4B01Ea3D1f39ad',
      chain: getChainIdByChainName('baseSepolia'),
      contractAddress: '0x4f86c33aE84c46972c2f7F8d33FAE3375F3E191b',
      cursor: 'eyJhbGciOiJIUzI1NiJ9.eyJhc2NlbmRpbmciOmZhbHNlLCJsaW1pdCI6NSwicGFnZSI6MCwibGFzdEV2YWx1YXRlZEtleSI6eyJ3YWxsZXRBZGRyZXNzIjoiMHgyMmVmODA5YmQ4ZDIyODUzYTliZTU3OGFmYTRiMDFlYTNkMWYzOWFkIiwibG9nSWRlbnRpZmllclJvbGx1cCI6IjAwMDE3NDg2MDc3NjQwMDAwMDAwMDAwMDAwMDAwMDA4In0sInRhYmxlSW5kZXgiOjB9.T2M2z4ucwHdrNWm_R3-aHZGuqozIqpTdJjZGELlAgpg',
    })
    log('response', response)
  }

  const handleFetchBtcTransactionHistory = async () => {
    log('fetchBtcTransactionHistory')
    const params = {
      tokenType: 'BTC',
      // address: 'minU4quZ32XabVp56wTS3G429JjZmN9Sma',
      address: 'tb1qp0we5epypgj4acd2c4au58045ruud2pd6heuee',
      // lastId: '8c93c4a0c4a5cff7389edc75cbd1bf8bdb33145379e96e4d72144476ea803cc8',
    };

    const url = new URL(`${process.env.NEXT_PUBLIC_APP_URL}/api/transaction/history`);
    url.search = new URLSearchParams(params).toString();
    const response = await fetch(url.toString())
    const data = await response.json()
    log('response', data)
  }

  const handleMintPKP = async () => {
    if (!authMethod) {
      return
    }

    const ipfsId = await getLitActionIpfsCid({
      input: decryptDebugLitActionCode,
      outputFormat: 'base58',
    })

    const decryptIpfsIdHex = await getLitActionIpfsCid({
      input: decryptDebugLitActionCode,
      outputFormat: 'hex',
    })

    const authMethodId = await getAuthIdByAuthMethod(authMethod)

    const personalSignIpfsIdHex = await getPersonalSignIpfsId('hex')
    const upgradeIpfsIdHex = await getUpgradeIpfsId('hex')

    const pkp = await mintPKP({
      authMethod,
      options: {
        permittedAuthMethodTypes: [AUTH_METHOD_TYPE.StytchEmailFactorOtp, AUTH_METHOD_TYPE.LitAction, AUTH_METHOD_TYPE.LitAction, AUTH_METHOD_TYPE.LitAction],
        permittedAuthMethodIds: [authMethodId, personalSignIpfsIdHex, upgradeIpfsIdHex, decryptIpfsIdHex],
        permittedAuthMethodPubkeys: ['0x', '0x', '0x', '0x'],
        permittedAuthMethodScopes: [[AUTH_METHOD_SCOPE.SignAnything], [AUTH_METHOD_SCOPE.SignAnything], [AUTH_METHOD_SCOPE.SignAnything], [AUTH_METHOD_SCOPE.SignAnything]],
        addPkpEthAddressAsPermittedAddress: true,
        sendPkpToItself: false,
        keyType: 2 // Standard PKP type
      },
    })

    log('pkp', pkp)

    // {
    //   "tokenId": "0x5515ef8204715f09b370e3f10a7efd40634bd8431b6e0654237d6bd876f635c6",
    //   "publicKey": "0x04450422ac9f3b571d3e03d040fc86e29a6f5da3b0b8e1a4c897c4af0db2c9717cd0aa759fc8168ed63ccb3e13212fd0d433ba9b4a192aad6bdf0a3e5029be277a",
    //   "ethAddress": "0xe9C26033709C6faE6a7bC05CB74e02a4B4Ea7c7A"
    // }
  }
  
  const handleExecuteLitActionCode = async () => {
    if (!authMethod) {
      return
    }

    const authMethodId = await getAuthIdByAuthMethod(authMethod)

    if (!litNodeClient.ready) {
      await litNodeClient.connect()
    }

    const sessionSigs = await getSessionSigsByPkp({
      authMethod, 
      pkp,
      refreshStytchAccessToken: true,
    })

    log('sessionSigs', sessionSigs)

    const res = await litNodeClient.executeJs({
      code: personalSignLitActionCode,
      sessionSigs,
      jsParams: {
        authParams: {
          accessToken: authMethod.accessToken,
          authMethodId,
          authMethodType: authMethod.authMethodType,
        },
        message: 'Hello, world!',
        publicKey: pkp.publicKey,
        env: process.env.NEXT_PUBLIC_ENV,
      },
    })

    log('res', res)
  }

  const handleEncrypt = async () => {
    const inputText = 'Hello, world!'

    const { ciphertext, dataToEncryptHash } = await litNodeClient.encrypt({
      dataToEncrypt: new TextEncoder().encode(
        inputText
      ),
      accessControlConditions,
  });

    log('ciphertext', ciphertext)
    log('dataToEncryptHash', dataToEncryptHash)

    localStorage.setItem('demoEncryptionCiphertext', ciphertext)
    localStorage.setItem('demoEncryptionDataToEncryptHash', dataToEncryptHash)
  }

  const handleDecrypt = async () => {
    if (!authMethod) {
      return
    }

    if (!litNodeClient.ready) {
      await litNodeClient.connect()
    }

    const sessionSigs = await getSessionSigsByPkp({
      authMethod, 
      pkp,
      refreshStytchAccessToken: true,
    })

    log('sessionSigs', sessionSigs)

    const ciphertext = localStorage.getItem('demoEncryptionCiphertext')
    const dataToEncryptHash = localStorage.getItem('demoEncryptionDataToEncryptHash')

    if (!ciphertext || !dataToEncryptHash) {
      return
    }

    const a = await litNodeClient.decrypt({
      chain: "ethereum",
      sessionSigs,
      ciphertext,
      dataToEncryptHash,
      accessControlConditions,
    })

    log('a', a)
    return

    const decryptIpfsId = await getLitActionIpfsCid({
      input: decryptDebugLitActionCode,
      outputFormat: 'base58',
    })

    log('decryptIpfsId', decryptIpfsId)

    const decryptIpfsIdHex = await getLitActionIpfsCid({
      input: decryptDebugLitActionCode,
      outputFormat: 'hex',
    })

    log('decryptIpfsIdHex', decryptIpfsIdHex)

    const res = await litNodeClient.executeJs({
      ipfsId: decryptIpfsId,
      sessionSigs,
      jsParams: {
        accessControlConditions,
        ciphertext,
        dataToEncryptHash,
      },
    })

    log('res', res)
  }

  const handleUpgrade = async () => {
    if (!authMethod) {
      return
    }

    try {
      const ipfsIdHex = await getLitActionIpfsCid({
        input: decryptDebugLitActionCode,
        outputFormat: 'hex',
      })

      const sessionSigs = await getSessionSigsByPkp({
        authMethod, 
        pkp,
        refreshStytchAccessToken: true,
      })

      const response = await litNodeClient.executeJs({
        code: upgradeLitActionCode,
        sessionSigs,
        jsParams: {
          publicKey: pkp.publicKey,
          litDatilNetwork: LIT_NETWORK.DatilDev,
          env: process.env.NEXT_PUBLIC_ENV,
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
    }
  };


  return (
    <div className="space-y-8 p-4">
      <div className="flex flex-wrap gap-2">
        <Button onClick={handleGetAllPKPs}>All PKPs</Button>
      </div>

      <div className="border rounded-lg p-6 bg-white">
        {
          authMethod && <Example authMethod={authMethod} />
        }
      </div>

      <Button onClick={handleVerifyToken}>Verify token</Button>
      <Button onClick={handleFetchEthTransactionHistory}>Fetch ETH transaction history</Button>
      <Button onClick={handleFetchBtcTransactionHistory}>Fetch BTC transaction history</Button>
      <Button onClick={handleTest}>Test</Button>
      <Button onClick={handleMintPKP}>Mint PKP</Button>
      <Button onClick={handleExecuteLitActionCode}>Execute Lit Action Code</Button>
      <Button onClick={handleEncrypt}>Encrypt</Button>
      <Button onClick={handleDecrypt}>Decrypt</Button>
      <Button onClick={handleUpgrade}>Upgrade</Button>
    </div>
  );
}
