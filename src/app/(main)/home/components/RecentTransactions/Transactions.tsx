'use client'

import { useState, useEffect } from "react"
import axios from "axios";
import { Address, formatEther } from "viem";

import { Coins, Settings, MoveUpRight, MoveDownLeft, Book, StickyNote } from "lucide-react"
import { Button } from "@/components/ui/button";

import { auth, formatDecimal, log } from "@/lib/utils";

export function Transactions({
  address,
  transactions,
}: {
  address: Address,
  transactions: any[],
}) {
  return(
    <div>
      {
        transactions.length === 0 && <div className="flex items-center justify-center py-8">
          <p className="text-gray-400">No transactions to display</p>
        </div>
      }

      {
        transactions.map((tx: any) => {
          return (
            <div key={tx.hash} className="border-t flex items-center justify-between py-4">
              <div className="flex items-center">
                {
                  tx.from === address ? (
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
                  <p className="flex items-center">
                    {
                      tx.from === address ? 'Send ' : 'Receive '
                    }
                    Funds
                  </p>
                  <p className="text-gray-500 text-xs">
                    {new Date(Number(tx.timeStamp) * 1000).toLocaleString()}
                  </p>
                </div>
              </div>

              {
                tx.from === address ? (
                  <div className="rounded-full flex items-center bg-secondary px-2">
                    <span>-</span>
                    <Coins size={14} />
                    <span className="ml-2 text-xs">{formatDecimal(formatEther(tx.value))}</span>
                  </div>
                ) : (
                  <div className="rounded-full flex items-center bg-warm px-2">
                    <span className="text-warm-foreground">+</span>
                    <Coins size={14} color="#dd687a" />
                    <span className="ml-2 text-xs text-warm-foreground">{formatDecimal(formatEther(tx.value))}</span>
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

