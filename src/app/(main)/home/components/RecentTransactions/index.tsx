'use client'

import { useState, useEffect } from "react"
import axios from "axios";
import { Address, formatEther } from "viem";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { auth, formatDecimal, log } from "@/lib/utils";
import { Transactions } from "./Transactions";
import { TokenTransfers } from "./TokenTransactions";

const scanApi = process.env.NEXT_PUBLIC_SCAN_API as string
const apiKey = process.env.NEXT_PUBLIC_SCAN_API_KEY
const query = {
  apikey: apiKey,
  module: 'account',
  sort: 'desc',
  page: 1,
  offset: 10,
}

const fetchTransactions = async (address: Address) => {
  const res = await axios.get(scanApi, {
    params: {
      ...query,
      action: 'txlist',
      address,
      startblock: '0',
      endblock: 'latest',
    }
  })
  const txs = res.data.result
  return txs
}

const fetchTokenTransfers = async (address: Address) => {
  const res = await axios.get(scanApi, {
    params: {
      ...query,
      action: 'tokentx',
      address,
      contractaddress: process.env.CONTRACT_ADDRESS,
      startblock: '0',
      endblock: 'latest',
    }
  })
  const txs = res.data.result
  return txs
}

export function RecentTransactions() {
  const [transactions, setTransactions] = useState([])
  const [tokenTransfers, setTokenTransfers] = useState([])
  const [address, setAddress] = useState('')

  useEffect(() => {
    fetchData()
  }, [])
  
  const fetchData = async () => {
    const address = auth.all().address as Address
    // const address = '0xfee205a130850906687141bb2d1c7ff3245f1366' as Address
    setAddress(address)
    const txs = await fetchTransactions(address)
    setTransactions(txs)

    const ttxs = await fetchTokenTransfers(address)
    log('ttxs', ttxs)
    setTokenTransfers(ttxs)
  }

  return(
    <div className="border rounded-md px-4">
      <div className="flex justify-between items-center mt-4 mb-4">
        <span>Recent transactions</span>
        <span className="text-gray-400 text-sm cursor-pointer">See all</span>
      </div>

      <Tabs defaultValue="ttx" className="w-full">
        <TabsList className="w-full">
          <TabsTrigger value="tx" className="w-full">Transactions</TabsTrigger>
          <TabsTrigger value="ttx" className="w-full">Token Transfers</TabsTrigger>
        </TabsList>

        <TabsContent value="tx">
          <Transactions address={address as Address} transactions={transactions} />
        </TabsContent>

        <TabsContent value="ttx">
          <TokenTransfers address={address as Address} tokenTransfers={tokenTransfers} />
        </TabsContent>
      </Tabs>
    </div>
  );
}

