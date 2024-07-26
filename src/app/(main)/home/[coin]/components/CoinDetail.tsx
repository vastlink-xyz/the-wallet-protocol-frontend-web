'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";

import { CircleChevronLeft } from "lucide-react";
import { Send } from "./Send";
import { Receive } from "./Receive";

import { coinInfoMap, CoinType } from "@/types/coins"
import { Address } from "viem";
import { RecentTransactions } from "./RecentTransactions";

export function CoinDetail({
  coinType
}: {
  coinType: CoinType;
}) {
  const router = useRouter()
  const [balance, setBalance] = useState('')
  const [address, setAddress] = useState('')

  return (
    <div>
      <div className="container mx-auto p-4">
        <div className="flex items-center mb-4">
          <div onClick={() => router.push('/home')} className="text-warm-foreground cursor-pointer hover:scale-105">
            <CircleChevronLeft className="" size={28} />
          </div>
          <h1 className="text-2xl font-bold ml-4">{coinInfoMap[coinType].name}</h1>
        </div>

        <div className="bg-white border rounded p-4 mb-4">
          <h2 className="text-lg font-semibold">Balance: 100.00</h2>
          <div className="flex mt-4">
            <Receive address={address as Address} />

            <Send balance={balance} address={address as Address} />
          </div>
        </div>

        <RecentTransactions />
      </div>
    </div>
  )
}
