'use client'

import { Button } from "@/components/ui/button"
import { getPKPs } from "@/lib/lit"
import { log } from "@/lib/utils";
import { AuthMethod } from "@lit-protocol/types";
import { useEffect, useState } from "react";
import { LIT_CHAINS } from "@lit-protocol/constants";
import { Example } from "./components/Example";
import { getAuthMethodFromStorage } from '@/lib/storage/authmethod';
import { fetchEthTransactionHistory } from "@/lib/web3/eth";
import { getChainIdByChainName } from "@/lib/web3/token";

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
      limit: 5,
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
    </div>
  );
}
