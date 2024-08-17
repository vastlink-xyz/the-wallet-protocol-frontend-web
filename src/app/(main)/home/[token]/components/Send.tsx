'use client'

import { useState, useEffect, FormEvent, useRef, useMemo } from "react"
import axios from "axios";
import { Address, parseEther, isAddress } from 'viem'

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
import { MoveUpRight, Loader, CircleCheck, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "react-toastify";
import { TokenType } from "@/types/tokens";
import { Token, TokenFactory } from "@/services/TokenService";
import { makeAuthenticatedApiRequest } from "@/lib/utils";
import { usePassportClientVerification } from "@/hooks/usePassportClientVerification";
import { LogoLoading } from "@/components/LogoLoading";
import { useTranslations } from "next-intl";

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

  // email address validation
  const [isValidating, setIsValidating] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [fullAddress, setFullAddress] = useState('');
  const [error, setError] = useState('');

  const t = useTranslations('/home.[token].sendModal')

  useEffect(() => {
    const token = TokenFactory.getInstance().createToken(tokenType)
    tokenRef.current = token
    setSymbol(tokenRef.current.symbol)
  }, [])

  const isDisabled = useMemo(() => {
    return (
      !to ||
      !amount ||
      sending ||
      !isValidEmail ||
      isValidating ||
      !!error ||
      parseFloat(amount) > parseFloat(balance)
    );
  }, [to, amount, sending, isValidEmail, isValidating, error, balance]);

  const validateEmail = async (email: string) => {
    if (!isAddress(to)) {
      setIsValidating(true);
      setError('');
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_WALLET_PROTOCAL_API_BASEURL}/address/`, {
          params: { email }
        });
        setIsValidEmail(true);
        setFullAddress(res.data.address);
      } catch (err) {
        setIsValidEmail(false);
        setFullAddress('');
        setError(t('invalidEmailOrAddress'));
      } finally {
        setIsValidating(false);
      }
    } else {
      setIsValidEmail(true);
      setFullAddress('');
      setError('');
    }
  };

  const handleBlur = () => {
    log('to', to)
    if (to) {
      validateEmail(to);
    } else {
      setIsValidEmail(false);
      setFullAddress('');
      setError('');
    }
  };

  async function signTransaction(toAddress: Address, toEmail?: string) {
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
          to: toAddress,
          amount: amt,
          token: tokenType,
          toEmail,
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
                className="text-brand-foreground"
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
    if (isDisabled) {
      return
    }

    try {
      setSending(true);
  
      let toAddress: Address;
      let toEmail: string | undefined;
  
      if (isAddress(to)) {
        toAddress = to as Address;
      } else {
        if (!fullAddress || !isAddress(fullAddress)) {
          throw new Error(t('invalidAddress'));
        }
        toAddress = fullAddress as Address;
        toEmail = to;
      }
  
      await signTransaction(toAddress, toEmail);

      setAmount('');
      setTo('');
      setFullAddress('');
      setError('');
      setIsValidEmail(false);
      setIsValidating(false);

      setOpen(false);
  
    } catch (error) {
      console.error('Send transaction error:', error);
      toast.error(t('sendError'));
    } finally {
      setSending(false);
    }
    
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
      setFullAddress('')
      setError('')
      setIsValidEmail(false)
      setIsValidating(false)
    }}>
      <DialogTrigger>
        <div
          title="Send"
          className="bg-foreground hover:bg-foreground/80 rounded-full w-[48px] h-[48px] flex items-center justify-center mr-4 cursor-pointer text-primary-foreground"
        >
          <MoveUpRight onClick={() => setOpen(true)} />
        </div>
      </DialogTrigger>

      <DialogContent className="w-[360px] text-primary">
        <DialogTitle className="mb-4">
          {t('title')}
        </DialogTitle>

        <form
          onSubmit={(e) => handleSend(e)}>
          <div className="mb-5">
            <label htmlFor="to" className="block mb-2 text-sm font-medium">{t('to')}</label>
            <div className="relative">
              <Input
                value={to}
                onChange={e => setTo(e.target.value)}
                onBlur={handleBlur}
                id="to"
                required
                placeholder={t('toPlaceholder')}
                className={cn(
                  isValidEmail && "bg-green-50 border-green-500",
                  error && "border-destructive",
                  "pr-10"
                )}
              />
              {isValidating && (
                <Loader className="absolute right-3 top-1/2 transform -translate-y-1/2 animate-spin" size={16} />
              )}
              {isValidEmail && !isValidating && !error && (
                <CircleCheck className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500" size={16} />
              )}
              {error && !isValidating && (
                <AlertCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 text-destructive" size={16} />
              )}
            </div>
            {isValidEmail && fullAddress && (
              <p className="mt-1 text-xs text-primary/60">{fullAddress}</p>
            )}
            {error && (
              <p className="mt-1 text-xs text-destructive">{error}</p>
            )}
          </div>

          <div className="mb-5">
            <div className="flex items-center justify-between">
              <label htmlFor="amount" className="block mb-2 text-sm font-medium">{t('amount')}</label>
              <p className="text-xs mb-2 text-primary/60">{t('balance')}: {formatDecimal(balance)} {symbol}</p>
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
                className="absolute end-2.5 bottom-2.5 cursor-pointer text-brand-foreground"
                onClick={() => handleClickMax()}
              >Max</p>
            </div>
          </div>

          <Button
            className={cn(
              'w-full',
            )}
            disabled={isDisabled}
          >
            {
              sending ? (
                <div className="">
                  <LogoLoading />
                </div>
              ) : (
                <span>{t('title')}</span>
              )
            }
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
