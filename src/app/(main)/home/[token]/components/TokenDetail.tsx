'use client'

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { CircleChevronLeft } from "lucide-react";
import { Send } from "./Send";
import { Receive } from "./Receive";

import { Address } from "viem";
import { RecentTransactions } from "./RecentTransactions";
import { TokenType } from "@/types/tokens";
import { TokenFactory } from "@/services/TokenService";
import { auth, formatDecimal } from "@/lib/utils";

export function TokenDetail({
  tokenType
}: {
  tokenType: TokenType;
}) {
  const router = useRouter()
  const [balance, setBalance] = useState('')
  const [address, setAddress] = useState('')

  useEffect(() => {
    init()
  })
  
  const init = async () => {
    // const addr = auth.all().address
    const addr = '0xfee205a130850906687141bb2d1c7ff3245f1366'
    setAddress(addr)

    const token = TokenFactory.getInstance().createToken(tokenType)
    let b = await token.getBalance(addr)
    b = formatDecimal(b)
    setBalance(b)
  }

  return (
    <div>
      <div className="container mx-auto p-4">
        <div className="flex items-center mb-4">
          <div onClick={() => router.push('/home')} className="text-warm-foreground cursor-pointer hover:scale-105">
            <CircleChevronLeft className="" size={28} />
          </div>
          <h1 className="text-2xl font-bold ml-4">{TokenFactory.getInstance().createToken(tokenType).symbol}</h1>
        </div>

        <div className="bg-white border rounded p-4 mb-4">
          <h2 className="text-lg font-semibold">Balance: {balance}</h2>
          <div className="flex mt-4">
            <Receive address={address as Address} />

            <Send balance={balance} address={address as Address} />
          </div>
        </div>

        <RecentTransactions address={address as Address} tokenType={tokenType} />
      </div>
    </div>
  )
}
