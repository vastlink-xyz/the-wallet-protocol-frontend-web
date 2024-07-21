'use client'

import { useState, useEffect } from "react"
import axios from "axios";
import { Address, createPublicClient, formatEther, http } from 'viem'

import { auth, formatDecimal, log, publicClient } from "@/lib/utils"

import { Coins, Settings, MoveUpRight, MoveDownLeft, ArrowLeftRight, RefreshCcw, Loader } from "lucide-react"
import { Send } from "./Send";
import { Receive } from "./Receive";

export function UserWallet() {
  const [address, setAddress] = useState('')
  const [balance, setBalance] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    syncBalance()
  }, [])

  async function signTransaction() {
    try {
      const {
        authenticatedHeader,
        desUsername,
      } = auth.all()

      const response = await axios.post(`${process.env.NEXT_PUBLIC_WALLET_PROTOCAL_API_BASEURL}/transaction/sign`, 
        {
          to: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
          amount: 3,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "X-Encrypted-Key": `${authenticatedHeader["X-Encrypted-Key" as keyof typeof authenticatedHeader]}`,
            "X-Scope-Id": `${authenticatedHeader["X-Scope-Id" as keyof typeof authenticatedHeader]}`,
            "X-Encrypted-User": `${authenticatedHeader["X-Encrypted-User" as keyof typeof authenticatedHeader]}`,
            "X-Encrypted-Session": `${authenticatedHeader["X-Encrypted-Session" as keyof typeof authenticatedHeader]}`,
            "X-Passport-Username": `${desUsername.username}`,
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  const syncBalance = async () => {
    setLoading(true)
    const addr = auth.all().address;
    setAddress(addr)

    const balance = await publicClient.getBalance({
      address: addr,
    })
    let b = formatEther(balance)
    setBalance(b)
    setLoading(false)
  }

  return(
    <div className="border rounded-md p-4 mb-4">
      <div className="flex justify-between items-center mb-4">
        <p title={address} className="overflow-hidden text-ellipsis whitespace-nowrap w-[220px] mr-2">{address || ''}</p>
        <Settings />
      </div>

      <div className="mb-14 flex justify-between">
        <div className="flex items-center">
          <Coins size={22} />
          {
            loading ? <Loader size={14} className="animate-spin mx-2" /> : <span className="font-bold ml-2 text-2xl">{formatDecimal(balance)}</span>
          }
          <div title="sync">
            <RefreshCcw color="#666" size={16} className="cursor-pointer ml-2" onClick={() => syncBalance()} />
          </div>
        </div>
      </div>

      <div className="flex items-center">
        <Receive address={address as Address} />

        <Send balance={balance} address={address as Address} />
        
        <div className="border border-primary rounded-full w-[48px] h-[48px] flex items-center justify-center cursor-pointer">
          <ArrowLeftRight />
        </div>
      </div>
    </div>
  );
}
