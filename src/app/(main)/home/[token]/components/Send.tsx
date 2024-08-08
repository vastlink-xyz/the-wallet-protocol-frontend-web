'use client'

import { useState, useEffect, FormEvent, useRef } from "react"
import axios from "axios";
import { Address, parseEther } from 'viem'

import { auth, cn, formatDecimal, log } from "@/lib/utils"

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { MoveUpRight, Loader, CircleCheck } from "lucide-react"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "react-toastify";
import { TokenType } from "@/types/tokens";
import { Token, TokenFactory } from "@/services/TokenService";
import { makeAuthenticatedApiRequest } from "@/lib/utils";
import { usePassportClientVerification } from "@/hooks/usePassportClientVerification";
import { LogoLoading } from "@/components/LogoLoading";

export function Send({
  balance,
  address,
  tokenType,
}: {
  balance: string;
  address: Address;
  tokenType: TokenType;
}) {
  const [to, setTo] = useState('')
  const [amount, setAmount] = useState('')
  const [sending, setSending] = useState(false)
  const [open, setOpen] = useState(false)
  const [symbol, setSymbol] = useState('')
  const tokenRef = useRef<Token>()
  const { verifyPassportClient } = usePassportClientVerification()

  useEffect(() => {
    const token = TokenFactory.getInstance().createToken(tokenType)
    tokenRef.current = token
    setSymbol(tokenRef.current.symbol)
  }, [])

  async function signTransaction() {
    try {
      const amt = parseEther(amount).toString()
      log('amt', amt)

      setSending(true)
      const client = await verifyPassportClient()
      if (!client) {
        return
      }

      const apiPath = tokenType === 'TVWT' ? `smartcontract/transferToken` : `transaction/sign`
      const response = await makeAuthenticatedApiRequest({
        path: apiPath,
        data: {
          to,
          amount: amt,
          token: tokenType,
        },
      })

      const data = response.data
      log('data', data)

      const succeeded = typeof data.hash === 'string' && data.hash.startsWith('0x');
      if (succeeded) {
        setOpen(false)
        notifyTransactionSubmitted(data.hash)
      } else {
        // need to be verified
        toast.error(data.message)
        setOpen(false)
      }
    } catch (error) {
      const res = (error as any).response
      if (res && res.data) {
        toast.error(res.data)
      }
    } finally {
      setSending(false);
    }
  }

  const openTxPage = (txHash: string) => {
    const url = `${tokenRef.current?.openUrl}/${txHash}`
    window.open(url, '_blank')
  }

  const notifyTransactionSubmitted = (txHash: string) => {
    toast(<div className="w-full">
          <div className="flex items-center">
            <CircleCheck color="#2edc82" size={16} className="mr-2" />
            <p className="flex items-center">
              Transaction submitted, 
              <Button
                className="text-warm-foreground"
                variant={'link'}
                size={'sm'}
                onClick={() => {
                  openTxPage(txHash)
                }}
              >
                View Detail
              </Button>
            </p>
          </div>
      </div>
    )
  }

  const handleSend = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    signTransaction();
  }

  const handleClickMax = async () => {
    setAmount(balance)
  }

  return(
    <Dialog open={open} onOpenChange={opened => {
      setOpen(opened)
      // clear input data
      setAmount('')
      setTo('')
    }}>
      <DialogTrigger>
        <div
          title="Send"
          className="bg-primary hover:bg-primary/80 rounded-full w-[48px] h-[48px] flex items-center justify-center mr-4 cursor-pointer text-primary-foreground"
        >
          <MoveUpRight onClick={() => setOpen(true)} />
        </div>
      </DialogTrigger>

      <DialogContent className="w-[360px] text-primary">
        <DialogTitle className="mb-4">
          Send
        </DialogTitle>

        <form
          onSubmit={(e) => handleSend(e)}>
          <div className="mb-5">
            <label htmlFor="to" className="block mb-2 text-sm font-medium">To</label>
            <Input
              value={to}
              onChange={e => setTo(e.target.value)}
              id="to"
              required
              />
          </div>

          <div className="mb-5">
            <div className="flex items-center justify-between">
              <label htmlFor="amount" className="block mb-2 text-sm font-medium">Amount</label>
              <p className="text-xs mb-2 text-gray-500">Balance: {formatDecimal(balance)} {symbol}</p>
            </div>
            <div className="relative">
              <Input
                value={amount}
                onChange={e => setAmount(e.target.value)}
                type="number"
                id="amount"
                className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                required
              />
              <p
                className="absolute end-2.5 bottom-2.5 cursor-pointer text-warm-foreground"
                onClick={() => handleClickMax()}
              >Max</p>
            </div>
          </div>

          <Button
            className={cn(
              'w-full',
            )}
            disabled={!(to && amount && !sending)}
          >
            {
              sending ? (
                <div className="text-warm">
                  <LogoLoading />
                </div>
              ) : (
                <span>Send</span>
              )
            }
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
