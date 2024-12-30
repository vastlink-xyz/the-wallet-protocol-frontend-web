'use client'

import { useEffect, useRef } from "react"
import { useTranslation } from "react-i18next";
import { Address, formatEther, isAddressEqual } from "viem";

import { formatDecimal, log } from "@/lib/utils";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { TokenType } from "@/types/tokens";
import { MoveDownLeft, MoveUpRight } from "lucide-react";
import { CopyClipboardAddress } from "@/components/CopyClipboardAddress";
import { Card } from "@/components/ui/card";
import { LogoLoading } from "@/components/LogoLoading";
import {theTokenListingService, Token } from "@/services/TokenListingService";

export function RecentTransactions({
  address,
  tokenType,
  transactions,
  loading,
}: {
  address: Address;
  tokenType: TokenType;
  transactions: any[];
  loading: boolean;
}) {
  const tokenRef = useRef<Token>()
  const { t } = useTranslation()

  useEffect(() => {
    const token = theTokenListingService.getToken(tokenType)
    tokenRef.current = token
  }, [tokenType])

  const openTxPage = (tx: any) => {
    log('tx open', tx)
    const url = `${tokenRef.current?.scanTransactionUrl}/${tx.hash}`
    window.open(url, '_blank')
  }

  return(
    <Card className="text-primary">
      <div className="flex justify-between items-center mt-4 mb-4">
        <span className="text-xl">{t('/dashboard.[token].recentTransactions.title')}</span>
      </div>

      <Table className="mb-4">
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead className=""></TableHead>
            <TableHead className="max-w-[300px]">{t('/dashboard.[token].recentTransactions.table.transactionHash')}</TableHead>
            <TableHead className="">{t('/dashboard.[token].recentTransactions.table.time')}</TableHead>
            <TableHead className="max-w-[180px]">{t('/dashboard.[token].recentTransactions.table.from')}</TableHead>
            <TableHead className="max-w-[180px]">{t('/dashboard.[token].recentTransactions.table.to')}</TableHead>
            <TableHead className="text-right">{t('/dashboard.[token].recentTransactions.table.amount')}</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {
            loading ? (
              <TableRow>
                <TableCell colSpan={6} className="h-[200px]">
                  <div className="w-full h-full flex items-center justify-center">
                    <LogoLoading type={'breathe'} />
                  </div>
                </TableCell>
              </TableRow>
            ) : (
              transactions.map((tx: any) => {
                return (
                  <TableRow key={tx.hash}>
                    <TableCell className="font-medium">
                      {
                        isAddressEqual(tx.from, address) ? (
                          <div className="border border-gray-400 rounded-full w-[32px] h-[32px] flex items-center justify-center">
                            <MoveUpRight size={14} />
                          </div>
                        ) : (
                          <div className="bg-brand-foreground rounded-full w-[32px] h-[32px] flex items-center justify-center">
                            <MoveDownLeft size={14} color="#fff" />
                          </div>
                        )
                      }
                    </TableCell>
                    <TableCell className="max-w-[300px]">
                      <p onClick={() => openTxPage(tx)} className="cursor-pointer underline">
                        <CopyClipboardAddress address={tx.hash} iconSize={28} />
                      </p>
                    </TableCell>
                    <TableCell className="font-medium">
                      {new Date(Number(tx.timeStamp) * 1000).toLocaleString()}
                    </TableCell>
                    <TableCell className="max-w-[180px]">
                      <p
                        title={tx.from}
                      >
                        <CopyClipboardAddress address={tx.from} iconSize={28} />
                      </p>
                    </TableCell>
                    <TableCell className="max-w-[180px]">
                      <p
                        title={tx.to}
                        >
                        <CopyClipboardAddress address={tx.to} iconSize={28} />
                      </p>
                    </TableCell>
                    <TableCell className="text-right">{formatDecimal(formatEther(tx.value))}</TableCell>
                  </TableRow>
                )
              })
            )
          }
        </TableBody>
      </Table>

      {
        transactions.length === 0 && <div className="flex items-center justify-center py-8">
          <p className="text-gray-400">{t('/dashboard.[token].recentTransactions.noTransactions')}</p>
        </div>
      }
    </Card>
  );
}
