'use client'

import { useState, useEffect } from "react"
import { Address, createPublicClient, formatEther, http } from 'viem'

import { auth, formatDecimal, log } from "@/lib/utils"

import { Coins, Settings, MoveUpRight, MoveDownLeft, ArrowLeftRight, RefreshCcw, Loader } from "lucide-react"
import { ERC20_TVWT_ABI } from "@/abis/TheVastWalletToken";
import { polygonAmoy, sepolia } from "viem/chains";
import Link from "next/link";
import { toast } from "react-toastify"

export function UserWallet() {
  const [address, setAddress] = useState('')
  const [maticBalance, setMaticBalance] = useState('')
  const [ethBalance, setEthBalance] = useState('')
  const [tvwtBalance, setTvwtBalance] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    syncBalance()
  }, [])

  const syncBalance = async () => {
    const addr = auth.all().address;
    // const addr = '0xfee205a130850906687141bb2d1c7ff3245f1366';
    setAddress(addr)

    setLoading(true)
    try {
      const [matic, eth, tvwt] = await Promise.all([
        getMaticBalanceByAddress(addr),
        getETHBalanceByAddress(addr),
        getTVWTBalanceByAddress(addr),
      ]);
      setMaticBalance(matic);
      setEthBalance(eth);
      setTvwtBalance(tvwt);
    } catch(error: any) {
      toast.error(error.message)
    } finally {
      setLoading(false)
    }

  }
  
  const getETHBalanceByAddress = async (address: Address) => {
    const publicClient = createPublicClient({
      chain: sepolia,
      transport: http(process.env.NEXT_PUBLIC_ETH_JSON_RPC),
    })
    const balance = await publicClient.getBalance({
      address,
    })
    let b = formatEther(balance)
    return b
  }
  
  const getMaticBalanceByAddress = async (address: Address) => {
    const publicClient = createPublicClient({
      chain: polygonAmoy,
      transport: http(process.env.NEXT_PUBLIC_POLYGON_JSON_RPC),
    })
    const balance = await publicClient.getBalance({
      address,
    })
    let b = formatEther(balance)
    return b
  }
  
  const getTVWTBalanceByAddress = async (address: Address) => {
    const publicClient = createPublicClient({
      chain: polygonAmoy,
      transport: http(process.env.NEXT_PUBLIC_POLYGON_JSON_RPC),
    })
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
        <p
          title={address}
          className="overflow-hidden text-ellipsis whitespace-nowrap w-[220px] mr-2 text-xl font-medium"
        >
          {address || ''}
        </p>
        <div title="sync" className="text-warm-foreground">
          <RefreshCcw
            size={16}
            className="cursor-pointer ml-2 text-2xl hover:scale-125 hover:rotate-180 transition duration-300"
            onClick={() => syncBalance()}
          />
        </div>
      </div>

      <div className="w-full mb-2 flex justify-between">
        <>
          {
            loading ? (
              <Loader size={14} className="animate-spin m-auto" />
            ) : (
              <div className="w-full">
                <Link
                  href={'/home/eth'}
                  className="flex justify-between items-center bg-gray-50 hover:bg-gray-200 p-2 rounded-sm cursor-pointer mb-2"
                >
                  <section className="flex items-center">
                    <img
                      className="w-[20px]"
                      src="/eth.png" alt=""
                    />
                    <p className="ml-2 text-xl">ETH</p>
                  </section>
                  <p className="text-2xl font-medium text-warm-foreground">{formatDecimal(ethBalance)}</p>
                </Link>

                <Link
                  href={'/home/matic'}
                  className="flex justify-between items-center bg-gray-50 hover:bg-gray-200 p-2 rounded-sm cursor-pointer mb-2"
                >
                  <section className="flex items-center">
                    <img
                      className="w-[20px]"
                      src="https://amoy.polygonscan.com/assets/poly/images/svg/logos/token-light.svg?v=24.7.3.0" alt=""
                    />
                    <p className="ml-2 text-xl">MATIC</p>
                  </section>
                  <p className="text-2xl font-medium text-warm-foreground">{formatDecimal(maticBalance)}</p>
                </Link>

                <Link
                  href={'/home/tvwt'}
                  className="flex justify-between items-center bg-gray-50 hover:bg-gray-200 p-2 rounded-sm cursor-pointer mb-2"
                >
                  <section className="flex items-center">
                    <img
                      className="w-[22px]"
                      src="/logo-alone.png" alt=""
                    />
                    <p className="ml-2 text-xl">TVWT</p>
                  </section>
                  <p className="text-2xl font-medium text-warm-foreground">{tvwtBalance}</p>
                </Link>

              </div>
            )
          }
        </>
        
      </div>

      {/* <div className="flex items-center">
        <div className="border border-primary rounded-full w-[48px] h-[48px] flex items-center justify-center cursor-pointer">
          <ArrowLeftRight />
        </div>
      </div> */}
    </div>
  );
}
