'use client'

import { useState, useEffect, FormEvent, useRef } from "react"
import axios from "axios";
import { Address, createPublicClient, formatEther, http, parseEther } from 'viem'

import { auth, cn, formatDecimal, log, publicClient } from "@/lib/utils"

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

export function Send({
  balance,
  address,
}: {
  balance: string;
  address: Address;
}) {
  const [to, setTo] = useState('')
  const [amount, setAmount] = useState('')
  const [sending, setSending] = useState(false)
  const [open, setOpen] = useState(false)

  async function signTransaction() {
    try {
      const {
        authenticatedHeader,
        desUsername,
      } = auth.all()

      const amt = parseEther(amount).toString()
      log('amt', amt)

      setSending(true)
      const response = await axios.post(`${process.env.NEXT_PUBLIC_WALLET_PROTOCAL_API_BASEURL}/transaction/sign`, 
        {
          to,
          amount: amt,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "X-Encrypted-Key": `${authenticatedHeader["X-Encrypted-Key" as keyof typeof authenticatedHeader]}`,
            "X-Scope-Id": `${authenticatedHeader["X-Scope-Id" as keyof typeof authenticatedHeader]}`,
            "X-Encrypted-User": `${authenticatedHeader["X-Encrypted-User" as keyof typeof authenticatedHeader]}`,
            "X-Encrypted-Session": `${authenticatedHeader["X-Encrypted-Session" as keyof typeof authenticatedHeader]}`,
            "X-Passport-Username": `${desUsername.username}`,
          },
        }
      );
      // console.log(response);
      log('data', response.data)

      const succeeded = typeof response.data === 'string' && response.data.startsWith('0x');
      if (succeeded) {
        setOpen(false)
        notifyTransactionSubmitted(response.data)
      } else {
        // need to be verified
        toast(response.data)
        setOpen(false)
      }
    } catch (error) {
      console.error(error);
    } finally {
      setSending(false);
    }
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
                  window.open(`${process.env.NEXT_PUBLIC_ETHSCAN_TRANSACTION}/${txHash}`, '_blank')
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
          className="bg-primary rounded-full w-[48px] h-[48px] flex items-center justify-center mr-4 cursor-pointer"
        >
          <MoveUpRight color="#fff" onClick={() => setOpen(true)} />
        </div>
      </DialogTrigger>

      <DialogContent className="w-[360px]">
        <DialogTitle>
          Send
        </DialogTitle>

        <form
          onSubmit={(e) => handleSend(e)}>
          <div className="mb-5">
            <label htmlFor="to" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">To</label>
            <Input
              value={to}
              onChange={e => setTo(e.target.value)}
              id="to"
              required
              />
          </div>

          <div className="mb-5">
            <div className="flex items-center justify-between">
              <label htmlFor="amount" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Amount</label>
              <p className="text-xs mb-2 text-gray-500">Balance: {formatDecimal(balance)} ETH</p>
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
              'bg-warm-flame w-full',
            )}
            disabled={!(to && amount && !sending)}
          >
            {
              sending ? (
                <Loader className="animate-spin" size={16} />
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
