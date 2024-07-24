'use client'

import { useState, useEffect } from "react"
import axios from "axios";
import { Address, formatEther } from "viem";

import { Coins, Settings, MoveUpRight, MoveDownLeft, Book, StickyNote } from "lucide-react"
import { Button } from "@/components/ui/button";

import { auth, formatDecimal, log } from "@/lib/utils";

const formatValue = (ttx: any) => {
  let v = String(ttx.value / (10 ** ttx.tokenDecimal))
  v = formatDecimal(v, 4)
  return v
}

export function TokenTransfers({
  address,
  tokenTransfers,
}: {
  address: Address,
  tokenTransfers: any[],
}) {
  const openTxPage = (ttx: any) => {
    const url = `${process.env.NEXT_PUBLIC_ETHSCAN_TRANSACTION}/${ttx.hash}`
    window.open(url, '_blank')
  }

  return(
    <div>
      {
        tokenTransfers.length === 0 && <div className="flex items-center justify-center py-8">
          <p className="text-gray-400">No transactions to display</p>
        </div>
      }

      {
        tokenTransfers.map((ttx: any) => {
          return (
            <div key={ttx.hash} className="border-t flex items-center justify-between py-4">
              <div className="flex items-center">
                {
                  ttx.from === address ? (
                    <div className="border border-gray-400 rounded-full w-[32px] h-[32px] flex items-center justify-center">
                      <MoveUpRight size={14} />
                    </div>
                  ) : (
                    <div className="bg-warm-flame rounded-full w-[32px] h-[32px] flex items-center justify-center">
                      <MoveDownLeft size={14} color="#fff" />
                    </div>
                  )
                }

                <div className="ml-4 w-[160px]">
                  <p onClick={() => openTxPage(ttx)} className="flex items-center cursor-pointer underline">
                    {
                      ttx.from === address ? 'Send ' : 'Receive '
                    }
                    {
                      ttx.tokenSymbol
                    }
                  </p>
                  <p className="text-gray-500 text-xs">
                    {new Date(Number(ttx.timeStamp) * 1000).toLocaleString()}
                  </p>
                </div>
              </div>

              {
                ttx.from === address ? (
                  <div className="rounded-full flex items-center bg-secondary px-2">
                    <span>-</span>
                    <Coins size={14} />
                    <span className="ml-2 text-xs">{formatValue((ttx))}</span>
                  </div>
                ) : (
                  <div className="rounded-full flex items-center bg-warm px-2">
                    <span className="text-warm-foreground">+</span>
                    <Coins size={14} color="#dd687a" />
                    <span className="ml-2 text-xs text-warm-foreground">{formatValue(ttx)}</span>
                  </div>
                )
              }
            </div>
          )
        })
      }

      <div className="border-t text-center p-4">
        <Button variant={"ghost"} className="border rounded-full w-full">
          <Book />
          <span>Address book</span>
        </Button>
      </div>

    </div>
  );
}

