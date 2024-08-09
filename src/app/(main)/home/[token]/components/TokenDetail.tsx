'use client'

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { CircleChevronLeft, Loader, RefreshCcw } from "lucide-react";
import { Send } from "./Send";
import { Receive } from "./Receive";

import { Address } from "viem";
import { RecentTransactions } from "./RecentTransactions";
import { TokenType } from "@/types/tokens";
import { TokenFactory } from "@/services/TokenService";
import { auth, formatDecimal } from "@/lib/utils";
import { LogoLoading } from "@/components/LogoLoading";
import { Card } from "@/components/ui/card";
import { useTranslations } from "next-intl";

export function TokenDetail({
  tokenType
}: {
  tokenType: TokenType;
}) {
  const router = useRouter()
  const [balance, setBalance] = useState('')
  const [address, setAddress] = useState('')
  const [loading, setLoading] = useState(false)
  const t = useTranslations('/home.[token]')

  useEffect(() => {
    init()
  }, [])
  
  const init = async () => {
    const addr = auth.all().address
    // const addr = '0xfee205a130850906687141bb2d1c7ff3245f1366'
    setAddress(addr)

    syncBalance(addr)
  }
  
  const syncBalance = async (address: Address) => {
    setLoading(true)
    const token = TokenFactory.getInstance().createToken(tokenType)
    let b = await token.getBalance(address)
    b = formatDecimal(b)
    setBalance(b)
    setLoading(false)
  }

  return (
    <div>
      <div className="w-full">
        <Card className="mb-4 p-6">
          <div className="flex items-center text-primary">
            <h2 className="text-lg font-semibold flex items-center">{t('balance')}: 
              <div className="flex items-center">
                {
                  loading ? (
                    <LogoLoading className="ml-6" />
                  ) : (
                    <span className="block ml-2">
                      {balance}
                    </span>
                  )
                }
              </div>
            </h2>
            <div title="sync" className="text-brand-foreground">
              <RefreshCcw
                size={16}
                className="cursor-pointer ml-4 text-2xl hover:scale-125 hover:rotate-180 transition duration-300"
                onClick={() => syncBalance(address as Address)}
              />
            </div>
          </div>

          <div className="flex mt-4">
            <Receive address={address as Address} />

            <Send balance={balance} address={address as Address} tokenType={tokenType} />
          </div>
        </Card>

        <RecentTransactions address={address as Address} tokenType={tokenType} />
      </div>
    </div>
  )
}
