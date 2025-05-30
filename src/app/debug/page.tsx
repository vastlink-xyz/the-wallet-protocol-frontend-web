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
import { getBtcAddressByPublicKey } from "@/lib/web3/btc";
import { fetchEthTransactionHistory } from "@/lib/web3/eth";
import { SUPPORTED_TOKENS_ARRAY } from "@/lib/web3/token";

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
    const transactions = await fetchEthTransactionHistory('0x22ef809BD8D22853A9Be578aFA4B01Ea3D1f39ad', 1, 10)
    log('transactions', transactions)
  }

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
      <Button onClick={handleTest}>Test</Button>
    </div>
  );
}
