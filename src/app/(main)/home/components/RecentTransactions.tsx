'use client'

import { useState, useEffect } from "react"
import { Coins, Settings, MoveUpRight, MoveDownLeft, ArrowLeftRight, ArrowUpRight, ChevronDown, Book, StickyNote } from "lucide-react"
import { Button } from "@/components/ui/button";
import { auth, log } from "@/lib/utils";
import axios from "axios";

export function RecentTransactions() {
  const [transactions, setTransactions] = useState([])
  const [address, setAddress] = useState('')

  useEffect(() => {
    fetchTransactions()
  }, [])
  
  const fetchTransactions = async () => {
    const address = auth.all().address
    setAddress(address)
    if (address) {
      // only available for the sepolia
      const url = `https://sepolia.ethplorer.io/service/service.php?data=${address}&page=pageTab%3Dtransfers&showTx=all`
      const res = await axios.get(url)
      const txs = res.data.transfers || []
      setTransactions(txs)
      log('txs', txs)
    }
  }

  return(
    <div className="border rounded-md px-4">
      <div className="flex justify-between items-center mt-4 mb-4">
        <span>Recent transactions</span>
        <span className="text-gray-400 text-sm cursor-pointer">See all</span>
      </div>

      {
        transactions.length === 0 && <div className="flex items-center justify-center py-8">
            <p className="text-gray-400">No transactions to display</p>
        </div>
      }

      {
        transactions.map((tx: any) => {
          return (
            <div key={tx.transactionHash} className="border-t flex items-center justify-between py-4">
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
                  <p className="text-gray-500 text-xs">23/09/2023, 11:48</p>
                </div>
              </div>


              {
                tx.from === address ? (
                  <div className="rounded-full flex items-center bg-secondary px-2">
                    <span>-</span>
                    <Coins size={14} />
                    <span className="ml-2 text-xs">{tx.value}</span>
                  </div>
                ) : (
                  <div className="rounded-full flex items-center bg-warm px-2">
                    <span className="text-warm-foreground">+</span>
                    <Coins size={14} color="#dd687a" />
                    <span className="ml-2 text-xs text-warm-foreground">{tx.value}</span>
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

