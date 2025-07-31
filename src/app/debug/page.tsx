'use client'

import { Button } from "@/components/ui/button"
import { getLitActionIpfsCid, getPKPs, litNodeClient, getMultiProviderSessionSigs } from "@/lib/lit"
import { log } from "@/lib/utils";
import { AccessControlConditions, SessionSigs } from "@lit-protocol/types";
import { useEffect, useState } from "react";
import { AUTH_METHOD_SCOPE, AUTH_METHOD_TYPE, LIT_ABILITY, LIT_CHAINS, LIT_NETWORK } from "@lit-protocol/constants";
import { Example } from "./components/Example";
import { useAuthContext } from '@/hooks/useAuthContext';
import { useUserData } from '@/hooks/useUserData';
import { User } from '@/app/api/user/storage';
import { fetchEthTransactionHistory } from "@/lib/web3/eth";
import { getChainIdByChainName } from "@/lib/web3/token";
import { personalSignLitActionCode } from "@/lib/lit-action-code/proposal-sign.lit";
import { encryptString } from "@lit-protocol/encryption";
import { decryptDebugLitActionCode } from "./decrypt-lit-action";
import { LitContracts } from "@lit-protocol/contracts-sdk";
import { PKPEthersWallet } from "@lit-protocol/pkp-ethers";
import { litActionCodeForCommonUpgradableProxy } from "@/lib/lit-action-code/common-upgradable-proxy.lit";
import { toast } from "react-toastify";
import { Encryption } from "./components/Encryption";

// const pkp = {
//   "tokenId": "0x4db47d93f4544bce5325db9c5f0aa502e9b404caf882115df84ec6c1ca6708c8",
//   "publicKey": "0x0489fe5c9976406a3dd3fcbf3fafb03b9be4cbc6bfc47632d2e0da9b4ce03121e8d3b28b3f5c5252df75a1e20c0c5bcb5227cb7ed401e2dc35925d6f7b2443a0f9",
//   "ethAddress": "0xDDcD0087D735683cEC3F672ade904083b862fe06"
// }

const pkp = {
  "ethAddress" : "0x3c15E16424239D5007c7a910887B2bfFed709764",
  "publicKey" : "0x04d3a7a0e3aebbbfc1ebebec1f20cbe2514b73f0ef80445fc5c4d0051104415086691ed52507ca9d988f62a2572066d97d2506252efc18903b1bb4e17eb0e7a1fb",
  "tokenId" : "0x74b08d483cdb5b192073500443e528deab59c76a57ae44f5dce603b0554b54d7",
}

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
      // value: '0xDDcD0087D735683cEC3F672ade904083b862fe06',
    },
  },
];

export default function DebugPage() {
  const { authMethod } = useAuthContext();
  const { userData } = useUserData();
  const [sessionSigs, setSessionSigs] = useState<SessionSigs | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

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
  
  const handleExecuteLitActionCode = async () => {
    if (!authMethod || !sessionSigs) {
      return
    }

    const authMethodId = authMethod.authMethodId

    if (!litNodeClient.ready) {
      await litNodeClient.connect()
    }

    const res = await litNodeClient.executeJs({
      code: personalSignLitActionCode,
      sessionSigs,
      jsParams: {
        authParams: {
          accessToken: authMethod.accessToken,
          authMethodId,
          authMethodType: authMethod.authMethodType,
          devUrl: process.env.NEXT_PUBLIC_DEV_URL_FOR_LIT_ACTION || '',
        },
        message: 'Hello, world!',
        publicKey: pkp.publicKey,
        env: process.env.NEXT_PUBLIC_ENV,
        devUrl: process.env.NEXT_PUBLIC_DEV_URL_FOR_LIT_ACTION || '',
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
    if (!authMethod || !sessionSigs) {
      return
    }

    if (!litNodeClient.ready) {
      await litNodeClient.connect()
    }

    const ciphertext = localStorage.getItem('demoEncryptionCiphertext')
    const dataToEncryptHash = localStorage.getItem('demoEncryptionDataToEncryptHash')

    if (!ciphertext || !dataToEncryptHash) {
      return
    }

    // const { decryptedData } = await litNodeClient.decrypt({
    //   chain: "ethereum",
    //   sessionSigs,
    //   ciphertext,
    //   dataToEncryptHash,
    //   accessControlConditions,
    // })

    // const decoder = new TextDecoder('utf-8');
    // const str = decoder.decode(decryptedData);

    // log('str', str)
    // return

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
    if (!authMethod || !sessionSigs) {
      return
    }

    try {
      const ipfsIdHex = await getLitActionIpfsCid({
        input: decryptDebugLitActionCode,
        outputFormat: 'hex',
      })

      const response = await litNodeClient.executeJs({
        code: litActionCodeForCommonUpgradableProxy,
        sessionSigs,
        jsParams: {
          publicKey: pkp.publicKey,
          litDatilNetwork: LIT_NETWORK.DatilDev,
          env: process.env.NEXT_PUBLIC_ENV,
          devUrl: process.env.NEXT_PUBLIC_DEV_URL_FOR_LIT_ACTION || '',
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


  const handleCheckPermittedLitActions = async () => {
    if (!authMethod || !sessionSigs) {
      return
    }

    try {
      if (!litNodeClient.ready) {
        await litNodeClient.connect();
      }

      const pkpWallet = new PKPEthersWallet({
        controllerSessionSigs: sessionSigs,
        pkpPubKey: pkp.publicKey,
        litNodeClient: litNodeClient,
      });
      
      await pkpWallet.init();
      log('pkpWallet init')

      const litContracts = new LitContracts({
        signer: pkpWallet,
      });
      await litContracts.connect();
      log('litcontract conneected')

      const permittedActions = await litContracts.pkpPermissionsContractUtils.read.getPermittedActions(pkp.tokenId)
      log('permitted actions', permittedActions)
    } catch (err) {
      log('err', err);
    } finally {
    }
  }

  const handleGetMultiProviderSessionSigs = async () => {
    if (!userData || !userData.litActionPkp || !authMethod) {
      return
    }

    try {

      const sessionSigs = await getMultiProviderSessionSigs({
        pkpPublicKey: userData.litActionPkp.publicKey,
        pkpTokenId: userData.litActionPkp.tokenId,
        accessToken: authMethod.accessToken,
        providerType: authMethod.providerType,
        userEmail: authMethod.primaryEmail,
      });

      setSessionSigs(sessionSigs);
      log('Multi-provider session sigs generated successfully', sessionSigs);
    } catch (error) {
      console.error('Error getting multi-provider session sigs:', error);
      log('Error:', error);
    }
  }


  return (
    <div className="space-y-8 p-4">

      {/* Debug info display */}
      <div className="border rounded-lg p-4 bg-gray-50">
        <h3 className="font-bold mb-2">Debug Info:</h3>
        <div className="text-sm space-y-1">
          <div>Auth Method: {!isMounted ? 'Loading...' : (authMethod ? '✅ Found' : '❌ Not found')}</div>
          <div>User Data: {!isMounted ? 'Loading...' : (userData ? '✅ Found' : '❌ Not found')}</div>
          <div>User PKP: {!isMounted ? 'Loading...' : (userData?.litActionPkp ? '✅ Found' : '❌ Not found')}</div>
          {userData?.litActionPkp && (
            <div className="ml-2">
              <div>PKP Address: {userData.litActionPkp.ethAddress}</div>
              <div>PKP Token ID: {userData.litActionPkp.tokenId}</div>
            </div>
          )}
          <div>Session Sigs: {!isMounted ? 'Loading...' : (sessionSigs ? '✅ Generated' : '❌ Not generated')}</div>
        </div>
      </div>

      <div className="border rounded-lg p-6 bg-white">
        {
          <Example />
        }
      </div>

      <Button onClick={handleVerifyToken}>Verify token</Button>
      <Button onClick={handleFetchEthTransactionHistory}>Fetch ETH transaction history</Button>
      <Button onClick={handleFetchBtcTransactionHistory}>Fetch BTC transaction history</Button>
      <Button onClick={handleTest}>Test</Button>
      <Button onClick={handleExecuteLitActionCode}>Execute Lit Action Code</Button>
      <Button onClick={handleEncrypt}>Encrypt</Button>
      <Button onClick={handleDecrypt}>Decrypt</Button>
      <Button onClick={handleUpgrade}>Upgrade</Button>
      <Button onClick={handleCheckPermittedLitActions}>Check Permitted Lit Actions</Button>
      <Button onClick={handleGetMultiProviderSessionSigs}>Get Multi-Provider Session Sigs</Button>

      {/* {authMethod && <Encryption authMethod={authMethod} />} */}
    </div>
  );
}
