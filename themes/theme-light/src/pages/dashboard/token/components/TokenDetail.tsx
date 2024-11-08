import { useEffect, useState } from "react";

import { RefreshCcw } from "lucide-react";
import { Send } from "./Send";
// import { Receive } from "./Receive";

import { Address } from "viem";
import { RecentTransactions } from "./RecentTransactions";
import { TokenType } from "@/types/tokens";
import { TokenFactory } from "@/services/TokenService";
import { auth, formatDecimal } from "@/lib/utils";
import { LogoLoading } from "@/components/LogoLoading";
import { Card } from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

export function TokenDetail({
  tokenType
}: {
  tokenType: TokenType;
}) {
  const [balance, setBalance] = useState('')
  const [address, setAddress] = useState('')
  const [loading, setLoading] = useState(false)
  const [txloading, setTxLoading] = useState(false)
  const [transactions, setTransactions] = useState<any>([])

  const { t } = useTranslation()

  useEffect(() => {
    init()
  }, [])
  
  const init = async () => {
    const addr = auth.all().address
    // const addr = '0xfee205a130850906687141bb2d1c7ff3245f1366'
    setAddress(addr)

    refreshData(addr)
  }
  
  const syncBalance = async (address: Address) => {
    setLoading(true)
    const token = TokenFactory.getInstance().createToken(tokenType)
    let b = await token.getBalance(address)
    b = formatDecimal(b)
    setBalance(b)
    setLoading(false)
  }

  const syncTransactions = async (address: Address) => {
    try {
      setTxLoading(true)
      const token = TokenFactory.getInstance().createToken(tokenType)
      const txs = await token.getRecentTransactions(address)
      setTransactions(txs)
    } catch(err) {
      toast.error('Transactions load failed')
    } finally {
      setTxLoading(false)
    }
  }

  const refreshData = (address: Address) => {
    syncBalance(address)
    syncTransactions(address)
  }

  return (
    <div>
      <div className="w-full">
        <Card className="mb-4 p-6">
          <div className="flex items-center text-primary">
            <h2 className="text-lg font-semibold flex items-center">{t('/dashboard.[token].balance')}: 
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
                onClick={() => refreshData(address as Address)}
              />
            </div>
          </div>

          <div className="flex mt-4">
            {/* <Receive address={address as Address} /> */}

            <Send balance={balance} address={address as Address} tokenType={tokenType} />
          </div>
        </Card>

        <RecentTransactions
          address={address as Address}
          tokenType={tokenType}
          transactions={transactions}
          loading={txloading}
        />
      </div>
    </div>
  )
}
