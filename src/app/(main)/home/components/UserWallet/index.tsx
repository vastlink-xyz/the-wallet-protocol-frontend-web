'use client'

import { useState, useEffect } from "react"
import axios from "axios";
import { Address, createPublicClient, formatEther, http } from 'viem'

import { auth, formatDecimal, log, publicClient } from "@/lib/utils"

import { Coins, Settings, MoveUpRight, MoveDownLeft, ArrowLeftRight, RefreshCcw, Loader } from "lucide-react"
import { Send } from "./Send";
import { Receive } from "./Receive";
import { ERC20_TVWT_ABI } from "@/abis/TheVastWalletToken";

export function UserWallet() {
  const [address, setAddress] = useState('')
  const [balance, setBalance] = useState('')
  const [tvwtBalance, setTvwtBalance] = useState('')
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
    const addr = auth.all().address;
    setAddress(addr)

    setLoading(true)
    const b = await getBalanceByAddress(addr)
    setBalance(b)

    const tb = await getTVWTBalanceByAddress(addr)
    setTvwtBalance(tb)

    setLoading(false)
  }
  
  const getBalanceByAddress = async (address: Address) => {
    const balance = await publicClient.getBalance({
      address,
    })
    let b = formatEther(balance)
    return b
  }

  const getTVWTBalanceByAddress = async (address: Address) => {
    const balance = await publicClient.readContract({
      address: process.env.NEXT_PUBLIC_TVWT_TOKEN_CONTRACT_ADDRESS as Address,
      abi: ERC20_TVWT_ABI,
      functionName: 'balanceOf',
      args: [address],
    })
    let b = formatEther(balance)
    return b
  }

  return(
    <div className="border rounded-md p-4 mb-4">
      <div className="flex justify-between items-center mb-4">
        <p title={address} className="overflow-hidden text-ellipsis whitespace-nowrap w-[220px] mr-2">{address || ''}</p>
        <Settings />
      </div>

      <div className="w-full mb-8 flex justify-between">
        <>
          {
            loading ? (
              <Loader size={14} className="animate-spin m-auto" />
            ) : (
              <div>
                <p className="text-gray-500 text-sm">MATIC BALANCE</p>
                <section className="flex items-center">
                  {/* <Coins size={22} /> */}
                  <img
                    className="w-[20px]"
                    src="https://amoy.polygonscan.com/assets/poly/images/svg/logos/token-light.svg?v=24.7.3.0" alt=""
                  />
                  <p className="ml-2 text-xl">{formatDecimal(balance)} MATIC</p>
                </section>

                <p className="text-gray-500 mt-4 text-sm">TVWT BALANCE</p>
                <section className="flex items-center text-xl">
                  <img
                    className="w-[22px]"
                    src="/logo-alone.png" alt=""
                  />
                  <p className="mx-2">{tvwtBalance}</p>
                  <span className="">TVWT</span>
                </section>
              </div>
            )
          }
        </>
        <div title="sync" className="">
          <RefreshCcw color="#666" size={16} className="cursor-pointer ml-2" onClick={() => syncBalance()} />
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
