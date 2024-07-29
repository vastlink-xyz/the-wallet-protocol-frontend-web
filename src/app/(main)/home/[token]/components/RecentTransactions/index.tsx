'use client'

import { useState, useEffect, useRef } from "react"
import axios from "axios";
import { Address, formatEther } from "viem";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { auth, formatDecimal, log, truncateMiddle } from "@/lib/utils";
import { Transactions } from "./Transactions";
import { TokenTransfers } from "./TokenTransactions";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Token, TokenFactory } from "@/services/TokenService";
import { TokenType } from "@/types/tokens";
import { MoveDownLeft, MoveUpRight } from "lucide-react";

export function RecentTransactions({
  address,
  tokenType,
}: {
  address: Address;
  tokenType: TokenType;
}) {
  const [transactions, setTransactions] = useState<any>([])
  const tokenRef = useRef<Token>()

  useEffect(() => {
    if (address) {
      init()
    }
  }, [address])

  const init = async () => {
    log('addd', address)
    const token = TokenFactory.getInstance().createToken(tokenType)
    tokenRef.current = token
    const txs = await token.getRecentTransactions(address)
    log('txs', txs)
    setTransactions(txs)
  }

  const openTxPage = (tx: any) => {
    log('tx open', tx)
    const url = `${tokenRef.current?.openUrl}/${tx.hash}`
    window.open(url, '_blank')
  }

  return(
    <div className="border rounded-md px-4">
      <div className="flex justify-between items-center mt-4 mb-4">
        <span>Recent transactions</span>
        <span className="text-gray-400 text-sm cursor-pointer">See all</span>
      </div>

      <Table className="mb-4">
        <TableHeader>
          <TableRow>
            <TableHead className=""></TableHead>
            <TableHead className="">Transaction Hash</TableHead>
            <TableHead className="">Time</TableHead>
            <TableHead className="">From</TableHead>
            <TableHead className="">To</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {
            transactions.map((tx: any) => {
              return (
                <TableRow key={tx.hash}>
                  <TableCell className="font-medium">
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
                  </TableCell>
                  <TableCell className="">
                    <p onClick={() => openTxPage(tx)} className="cursor-pointer underline">
                      {
                        truncateMiddle(tx.hash)
                      }
                    </p>
                  </TableCell>
                  <TableCell className="font-medium">
                    {new Date(Number(tx.timeStamp) * 1000).toLocaleString()}
                  </TableCell>
                  <TableCell className="w-[200px] truncate">
                    <p
                      title={tx.from}
                    >
                      { truncateMiddle(tx.from) }
                    </p>
                  </TableCell>
                  <TableCell className="w-[200px] truncate">
                    <p
                      title={tx.to}
                      >
                      { truncateMiddle(tx.from) }
                    </p>
                  </TableCell>
                  <TableCell className="text-right">{formatDecimal(formatEther(tx.value))}</TableCell>
                </TableRow>
              )
            })
          }
        </TableBody>
      </Table>

      {
        transactions.length === 0 && <div className="flex items-center justify-center py-8">
          <p className="text-gray-400">No transactions to display</p>
        </div>
      }

      {/* <Tabs defaultValue="ttx" className="w-full">
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
      </Tabs> */}
    </div>
  );
}

