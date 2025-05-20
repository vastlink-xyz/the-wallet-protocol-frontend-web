'use client'

import { Button } from "@/components/ui/button"
import { getPKPs, getSessionSigsByPkp, litNodeClient } from "@/lib/lit"
import { log } from "@/lib/utils";
import { AuthMethod, IRelayPKP } from "@lit-protocol/types";
import { useEffect, useState } from "react";
import { PKPEthersWallet } from "@lit-protocol/pkp-ethers";
import { LitContracts } from "@lit-protocol/contracts-sdk";
import { ethers, utils } from "ethers";
import { AUTH_METHOD_SCOPE, LIT_CHAINS } from "@lit-protocol/constants";
import { Example } from "./components/Example";
import { getAuthMethodFromStorage } from '@/lib/storage/authmethod';
import { getPersonalSignIpfsId } from "@/lib/lit/ipfs-id-env";

// eth sepolia
const chainInfo = {
  rpcUrl: LIT_CHAINS['sepolia'].rpcUrls[0],
  chainId: LIT_CHAINS['sepolia'].chainId,
}

const ethersProvider = new ethers.providers.JsonRpcProvider(
  chainInfo.rpcUrl
);

const litActionIpfsId = 'QmYUmDxzM3d2jwKnoLrwdy2iwhnRMpudQXnpgQE4eTk16a'

const AUTH_METHOD_STORAGE_KEY = 'lit-auth-method';

const defaultPkp = {
  "tokenId": "0xc290c87ee94f5871054de74c73ca2f6d306684141162269f3271b6346b8c42ce",
  "publicKey": "0x0461eccec567d90b6061484f9cf520308a3fa872b74f241c3f99f556ba35a22018bbfb088be071771463da55c005d7ce7203e8bef3ad6455d850448a5def41b2cb",
  "ethAddress": "0xD98F5f7D086A720109cDb8922C0416FF96e73eA0"
}

const sessionPKP = {
  "ethAddress" : "0xd027F558d7ae10E673816adb5CdCc23be7814C0e",
  "publicKey" : "0x04042e218a8729f011641a78da1939ab72299ebb70a0ba750645468311694ad1f24787945ebb91fe24caa76717203546748e89d4c589fe76bfa9e1fbd55f118eb0",
  "tokenId" : "0xb7aaf498c4d450855f7a3cccc900b24b348f0e108d5d5a7ba9072e9403f6ff4e",
}

const pkp = {
  "ethAddress": "0x1b1E49900c11d29f13b8f02385cb8408D9b81535",
  "publicKey": "0x047d61e857d17bf4200304ffd6ff509c1c4cf4dfe42aea1a7601720778bd387b89ef4569ca3dd014fb1ca003f2f129c58a09b622630af2260cf0b76ada2f512748",
  "tokenId": "0x6f53bfb409fdad55d9ee324c06a0eb941cf0e6499ab420327202efd7005a7edd",
}


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
    const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/mfa/check-policy`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authMethod!.accessToken}`,
      },
      body: JSON.stringify({
        contextType: 'multisigWalletTransaction',
        walletId: 'd0f6daf6-90f9-4431-b5f9-14106c99670e',
        transactionAmount: '0.001',
      }),
    })

    const data = await res.json()
    log('check policy', data)
  }

  return (
    <div className="space-y-8 p-4">
      <div className="flex flex-wrap gap-2">
        <Button onClick={handleGetAllPKPs}>All PKPs</Button>
        <Button onClick={handleTest}>Test</Button>
      </div>

      <div className="border rounded-lg p-6 bg-white">
        {
          authMethod && <Example authMethod={authMethod} />
        }
      </div>

      <Button onClick={handleVerifyToken}>Verify token</Button>
    </div>
  );
}
