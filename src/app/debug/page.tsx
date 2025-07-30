'use client'

import { Button } from "@/components/ui/button"
import { getLitActionIpfsCid, getPKPs, getSessionSigsByPkp, litNodeClient, getMultiProviderSessionSigs } from "@/lib/lit"
import { log } from "@/lib/utils";
import { AccessControlConditions, SessionSigs } from "@lit-protocol/types";
import { useEffect, useState } from "react";
import { AUTH_METHOD_SCOPE, AUTH_METHOD_TYPE, LIT_ABILITY, LIT_CHAINS, LIT_NETWORK } from "@lit-protocol/constants";
import { Example } from "./components/Example";
import { getAuthMethodFromStorage } from '@/lib/storage/authmethod';
import { User } from '@/app/api/user/storage';
import { fetchEthTransactionHistory } from "@/lib/web3/eth";
import { getChainIdByChainName } from "@/lib/web3/token";
import { getAuthIdByAuthMethod } from "@lit-protocol/lit-auth-client";
import { personalSignLitActionCode } from "@/lib/lit-action-code/proposal-sign.lit";
import { encryptString } from "@lit-protocol/encryption";
import { decryptDebugLitActionCode } from "./decrypt-lit-action";
import { getUpgradeIpfsId } from "@/lib/lit/ipfs-id-env";
import { getPersonalSignIpfsId } from "@/lib/lit/ipfs-id-env";
import { LitActionResource } from "@lit-protocol/auth-helpers";
import { LitAccessControlConditionResource } from "@lit-protocol/auth-helpers";
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
  const [authMethod, setAuthMethod] = useState<any | null>(null); // Use any for compatibility
  const [sessionSigs, setSessionSigs] = useState<SessionSigs | null>(null);
  const [userData, setUserData] = useState<User | null>(null);

  // Initialize by reading authMethod from localStorage
  useEffect(() => {
    const storedAuthMethod = getAuthMethodFromStorage();
    if (storedAuthMethod) {
      setAuthMethod(storedAuthMethod);
    }

    // Also try to get user data
    const storedUserData = localStorage.getItem('user');
    if (storedUserData) {
      try {
        setUserData(JSON.parse(storedUserData));
      } catch (error) {
        console.error('Error parsing user data:', error);
      }
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
  
  const handleExecuteLitActionCode = async () => {
    if (!authMethod || !sessionSigs) {
      return
    }

    const authMethodId = await getAuthIdByAuthMethod(authMethod)

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

  const handleGetSessionSigs = async () => {
    if (!authMethod) {
      return
    }
    
    const sessionSigs = await getSessionSigsByPkp({
      authMethod, 
      pkp,
      refreshStytchAccessToken: true,
    })

    setSessionSigs(sessionSigs)
  }

  const handleGetMultiProviderSessionSigs = async () => {
    if (!authMethod) {
      log('No auth method found in storage');
      return;
    }

    if (!userData?.litActionPkp) {
      log('No user PKP found in storage. Please complete authentication first.');
      return;
    }
    
    try {
      log('Getting multi-provider session sigs with:', {
        authMethodType: authMethod.authMethodType,
        pkp: userData.litActionPkp.ethAddress,
      });

      const sessionSigs = await getMultiProviderSessionSigs({
        authMethod, 
        pkp: userData.litActionPkp,
      });

      setSessionSigs(sessionSigs);
      log('Multi-provider session sigs generated successfully', sessionSigs);
    } catch (error) {
      console.error('Error getting multi-provider session sigs:', error);
      log('Error:', error);
    }
  }

  const handleFetchUserFromAPI = async () => {
    if (!authMethod) {
      log('No auth method found. Cannot fetch user data.');
      return;
    }

    try {
      log('Fetching user data from API...');
      
      // Parse the access token to get user email
      const authTokenData = JSON.parse(authMethod.accessToken);
      const userEmail = authTokenData.userEmail;
      
      log('Request data:', {
        providerType: authTokenData.providerType,
        userEmail: userEmail,
        hasAccessToken: !!authTokenData.accessToken
      });
      
      const response = await fetch('/api/user/by-provider', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          providerType: authTokenData.providerType,
          accessToken: authTokenData.accessToken,
          userEmail: userEmail,
        }),
      });

      log('Response status:', response.status);
      
      if (!response.ok) {
        const errorText = await response.text();
        log('API error response:', errorText);
        throw new Error(`API call failed: ${response.status} - ${errorText}`);
      }

      const apiUserData = await response.json();
      log('User data fetched successfully:', apiUserData);
      
      // Store the fetched user data
      setUserData(apiUserData);
      
    } catch (error) {
      console.error('Error fetching user data:', error);
      log('Error fetching user data:', error);
    }
  };

  const handleFetchUserByAuthMethodId = async () => {
    if (!authMethod) {
      log('No auth method found. Cannot fetch user data.');
      return;
    }

    try {
      log('Fetching user data by authMethodId...');
      
      const response = await fetch(`/api/user?authMethodId=${authMethod.authMethodId}`);
      
      log('Response status:', response.status);
      
      if (!response.ok) {
        const errorText = await response.text();
        log('API error response:', errorText);
        throw new Error(`API call failed: ${response.status} - ${errorText}`);
      }

      const apiUserData = await response.json();
      log('User data fetched successfully by authMethodId:', apiUserData);
      
      // Store the fetched user data
      setUserData(apiUserData);
      
    } catch (error) {
      console.error('Error fetching user data by authMethodId:', error);
      log('Error fetching user data by authMethodId:', error);
    }
  };

  const handleShowToast = () => {
    toast.success('Hello, world! This is a very long message that should wrap to the next line. This is a very long message that should wrap to the next line.', {
      autoClose: false,
    })
  }


  return (
    <div className="space-y-8 p-4">
      <div className="flex flex-wrap gap-2">
        <Button onClick={handleGetAllPKPs}>All PKPs</Button>
        <Button onClick={handleShowToast}>toast</Button>
        <Button onClick={handleFetchUserFromAPI}>Fetch User by Provider</Button>
        <Button onClick={handleFetchUserByAuthMethodId}>Fetch User by AuthMethodId</Button>
      </div>

      {/* Debug info display */}
      <div className="border rounded-lg p-4 bg-gray-50">
        <h3 className="font-bold mb-2">Debug Info:</h3>
        <div className="text-sm space-y-1">
          <div>Auth Method: {authMethod ? '✅ Found' : '❌ Not found'}</div>
          <div>User Data: {userData ? '✅ Found' : '❌ Not found'}</div>
          <div>User PKP: {userData?.litActionPkp ? '✅ Found' : '❌ Not found'}</div>
          {userData?.litActionPkp && (
            <div className="ml-2">
              <div>PKP Address: {userData.litActionPkp.ethAddress}</div>
              <div>PKP Token ID: {userData.litActionPkp.tokenId}</div>
            </div>
          )}
          <div>Session Sigs: {sessionSigs ? '✅ Generated' : '❌ Not generated'}</div>
        </div>
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
      <Button onClick={handleExecuteLitActionCode}>Execute Lit Action Code</Button>
      <Button onClick={handleEncrypt}>Encrypt</Button>
      <Button onClick={handleDecrypt}>Decrypt</Button>
      <Button onClick={handleUpgrade}>Upgrade</Button>
      <Button onClick={handleCheckPermittedLitActions}>Check Permitted Lit Actions</Button>
      <Button onClick={handleGetSessionSigs}>Get Session Sigs (Old)</Button>
      <Button onClick={handleGetMultiProviderSessionSigs}>Get Multi-Provider Session Sigs</Button>

      {/* {authMethod && <Encryption authMethod={authMethod} />} */}
    </div>
  );
}
