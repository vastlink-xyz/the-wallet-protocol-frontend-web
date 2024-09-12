'use client'

import { useState, useEffect } from "react"
import { Address, formatEther, http } from 'viem'
import { useTranslations } from 'next-intl'

import { auth, formatDecimal, handleError, log } from "@/lib/utils"

import { RefreshCcw } from "lucide-react"
import Link from "next/link";
import { toast } from "react-toastify"
import { TokenFactory } from "@/services/TokenService"
import { CopyClipboardAddress } from "@/components/CopyClipboardAddress"
import { Card } from "@/components/ui/card"
import { LogoLoading } from "@/components/LogoLoading"
import { useThemeLogoPath } from "@/hooks/useThemeLogoPath"

export function UserWallet() {
  const [address, setAddress] = useState('')
  const [maticBalance, setMaticBalance] = useState('')
  const [ethBalance, setEthBalance] = useState('')
  const [tvwtBalance, setTvwtBalance] = useState('')
  const [loading, setLoading] = useState(false)
  const { logoPath } = useThemeLogoPath()
  const t = useTranslations('/home.userWallet')

  useEffect(() => {
    syncBalance()
  }, [])

  const syncBalance = async () => {
    const addr = auth.all().address;
    setAddress(addr)

    setLoading(true)
    try {
      const [matic, eth, tvwt] = await Promise.all([
        getMaticBalanceByAddress(addr),
        getETHBalanceByAddress(addr),
        getTVWTBalanceByAddress(addr),
      ]);
      setMaticBalance(matic);
      setEthBalance(eth);
      setTvwtBalance(tvwt);
    } catch(error) {
      const errorInfo = handleError(error)
      toast.error(errorInfo.message)
    } finally {
      setLoading(false)
    }

  }
  
  const getETHBalanceByAddress = async (address: Address) => {
    const b = await TokenFactory.getInstance().createToken('ETH').getBalance(address)
    return b
  }
  
  const getMaticBalanceByAddress = async (address: Address) => {
    const b = await TokenFactory.getInstance().createToken('MATIC').getBalance(address)
    return b
  }
  
  const getTVWTBalanceByAddress = async (address: Address) => {
    const b = await TokenFactory.getInstance().createToken('TVWT').getBalance(address)
    return b
  }

  return(
    <Card className="p-6">
      <div className="flex justify-between items-start">
        <CopyClipboardAddress address={address as Address} />
        <div title={t('syncTitle')} className="text-brand-foreground ml-4">
          <RefreshCcw
            size={18}
            className="cursor-pointer ml-2 hover:scale-125 hover:rotate-180 transition duration-300"
            onClick={() => syncBalance()}
          />
        </div>
      </div>

      <div className="w-full mt-4 flex justify-between">
        <>
          {
            loading ? (
              <div className="text-brand-foreground text-center w-full h-16 flex items-center justify-center">
                <LogoLoading type={'breathe'} />
              </div>
            ) : (
              <div className="w-full">
                <Link
                  href={'/home/eth'}
                  className="flex justify-between items-center text-muted-foreground p-4 bg-background rounded-xl cursor-pointer mb-2 hover:scale-105 hover:bg-brand"
                >
                  <section className="flex items-center">
                    <img
                      className="w-[20px]"
                      src="/eth.png" alt=""
                    />
                    <p className="ml-2 text-xl text-primary">ETH</p>
                  </section>
                  <p className="text-2xl font-medium text-brand-foreground">{formatDecimal(ethBalance)}</p>
                </Link>

                <Link
                  href={'/home/matic'}
                  className="flex justify-between items-center text-muted-foreground p-4 bg-background rounded-xl cursor-pointer mb-2 hover:scale-105 hover:bg-brand"
                >
                  <section className="flex items-center">
                    <img
                      className="w-[20px]"
                      src="https://amoy.polygonscan.com/assets/poly/images/svg/logos/token-light.svg?v=24.7.3.0" alt=""
                    />
                    <p className="ml-2 text-xl text-primary">MATIC</p>
                  </section>
                  <p className="text-2xl font-medium text-brand-foreground">{formatDecimal(maticBalance)}</p>
                </Link>

                <Link
                  href={'/home/tvwt'}
                  className="flex justify-between items-center text-muted-foreground p-4 bg-background rounded-xl cursor-pointer mb-2 hover:scale-105 hover:bg-brand"
                >
                  <section className="flex items-center">
                    <img
                      className="w-[20px]"
                      src={logoPath} alt=""
                    />
                    <p className="ml-2 text-xl text-primary">TVWT</p>
                  </section>
                  <p className="text-2xl font-medium text-brand-foreground">{tvwtBalance}</p>
                </Link>
              </div>
            )
          }
        </>
      </div>
    </Card>
  );
}
