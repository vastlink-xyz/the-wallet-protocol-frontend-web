'use client'

import { useState, useEffect } from "react"
import { storageAddress } from "@/lib/utils"
import { Coins, Settings, MoveUpRight, MoveDownLeft, ArrowLeftRight } from "lucide-react"

export function UserWallet() {
  const [address, setAddress] = useState('')

  useEffect(() => {
    const addr = storageAddress.getData()
    setAddress(addr)
  }, [])

  return(
    <div className="border rounded-md p-4 mb-4">
      <div className="flex justify-between items-center mb-4">
        {/* <p className="overflow-hidden text-ellipsis whitespace-nowrap w-[220px] mr-2">{address || '0x'}</p> */}
        <p>Wallet#0</p>
        <Settings />
      </div>

      <div className="mb-14">
        <p className="flex items-center">
          <Coins size={18} />
          <span className="font-bold ml-2 text-lg">2,132.430000</span>
        </p>
      </div>

      <div className="flex items-center">
        <div className="bg-warm-flame rounded-full w-[48px] h-[48px] flex items-center justify-center mr-2 cursor-pointer">
          <MoveDownLeft color="#fff" />
        </div>
        <div className="bg-primary rounded-full w-[48px] h-[48px] flex items-center justify-center mr-2 cursor-pointer">
          <MoveUpRight color="#fff" />
        </div>
        <div className="border border-primary rounded-full w-[48px] h-[48px] flex items-center justify-center cursor-pointer">
          <ArrowLeftRight />
        </div>
      </div>
    </div>
  );
}
