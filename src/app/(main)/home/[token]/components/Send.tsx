'use client'

import { useState, useEffect, FormEvent, useRef, useMemo } from "react"
import { Address, parseEther, isAddress } from 'viem'

import { auth, cn, emailRegex, formatDecimal, handleError, log } from "@/lib/utils"

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
import { LogoLoading } from "@/components/LogoLoading";
import { useTranslations } from "next-intl";
import { Textarea } from "@/components/ui/textarea";
import { TransactionType } from "@/types/transaction";
import keyManagementService from "@/services/KeyManagementService";
import api from "@/lib/api"

export function Send({
  balance,
  address,
  tokenType,
  defaultTo,
  defaultAmount,
  defaultNote,
  onClose,
}: {
  balance: string;
  address: Address;
  tokenType: TokenType;
  // optional
  defaultTo?: string;
  defaultAmount?: string;
  defaultNote?: string;
  onClose?: () => void;
}) {
  const [to, setTo] = useState('')
  const [amount, setAmount] = useState('')
  const [note, setNote] = useState('')
  const [sending, setSending] = useState(false)
  const [open, setOpen] = useState(false)
  const [symbol, setSymbol] = useState('')
  const tokenRef = useRef<Token>()

  // email address validation
  const [isValidating, setIsValidating] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [fullAddress, setFullAddress] = useState('');
  const [error, setError] = useState('');

  const t = useTranslations('/home.[token].sendModal')
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const token = TokenFactory.getInstance().createToken(tokenType)
    tokenRef.current = token
    setSymbol(tokenRef.current.symbol)
  }, [])

  useEffect(() => {
    if (open) {
      if (defaultTo) {
        setTo(defaultTo)
      }
      if (defaultAmount) {
        setAmount(defaultAmount)
      }
      if (defaultNote) {
        setNote(defaultNote)
      }
    }
  }, [defaultTo, defaultAmount, defaultNote, open])

  useEffect(() => {
    // close callback
    if (!open && onClose) {
      onClose()
    }
  }, [open])

  const isDisabled = useMemo(() => {
    return (
      !to ||
      !amount ||
      sending ||
      !isValidEmail ||
      isValidating ||
      (!!error && error !== t('unregisteredEmailNotice')) ||
      parseFloat(amount) > parseFloat(balance)
    );
  }, [to, amount, sending, isValidEmail, isValidating, error, balance]);

  // Workaround for input focus issues in chatbot interfaces
  const hackFocus = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) {
      return
    }
    if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) {
      event.target.focus()
      if (event.target.type !== 'number') {
        event.target.setSelectionRange(event.target.value.length, event.target.value.length)
      }
   } else {
      handleBlur()
    }
  }

  const validateEmail = async (email: string) => {
    if (!isAddress(to)) {
      setIsValidating(true);
      setError('');
      try {
        const res = await api.get(`/address/`, {
          params: { email }
        });
        if (res.data.success) {
          setIsValidEmail(true);
          setFullAddress(res.data.address);
        } else {
          if (emailRegex.test(email)) {
            // email foramt
            setIsValidEmail(true);
            setFullAddress('');
            setError(t('unregisteredEmailNotice'));
          } else {
            setIsValidEmail(false);
            setFullAddress('');
            setError(t('invalidEmailFormat'));
          }
        }
      } catch (err) {
        // if (emailRegex.test(email)) {
        //   // email foramt
        //   setIsValidEmail(true);
        //   setFullAddress('');
        //   setError(t('unregisteredEmailNotice'));
        // } else {
        //   setIsValidEmail(false);
        //   setFullAddress('');
        //   setError(t('invalidEmailFormat'));
        // }
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

  async function signTransaction(toAddress: Address) {
    try {
      const amt = parseEther(amount).toString()
      log('amt', amt)

      setSending(true)

      const {
        needOtp,
        hash,
        message,
      } = await keyManagementService.signTransaction({
        toAddress,
        amount: amt,
        token: tokenType,
        note,
        transactionType: TransactionType.TRANSFER,
      })

      if (hash) {
        setOpen(false)
        notifyTransactionSubmitted(hash)
      } else if (needOtp) {
        // need to be verified
        toast.error(message)
        setOpen(false)
      }
    } catch (error: unknown) {
      const errorInfo = handleError(error)
      log('errorInfo', errorInfo)
      toast.error(errorInfo.message)
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
        // send by address
        toAddress = to as Address;
      } else if (emailRegex.test(to) && error === t('unregisteredEmailNotice')) {
        // send register email to unregistered user
        toEmail = to;
        const response = await api.post('/invite/invite-register', {
          toEmail,
          from: address,
          amount: parseEther(amount).toString(),
          token: tokenType,
          note,
        });
        log('res', response)
        toast.success(t('emailSentToUnregistered'));
        initDefaults();
        setOpen(false);
        return;
      } else {
        // send by email
        toAddress = fullAddress as Address;
      }
  
      await signTransaction(toAddress);

      initDefaults()
      setOpen(false);
    } catch (error) {
      const errorInfo = handleError(error)
      log('errorInfo', errorInfo)
      toast.error(t('sendError'));
    } finally {
      setSending(false);
    }
    
  }

  const handleClickMax = async () => {
    setAmount(balance)
  }

  const initDefaults = () => {
    setAmount('');
    setTo('');
    setNote('');
    setFullAddress('');
    setError('');
    setIsValidEmail(false);
    setIsValidating(false);
  }

  return(
    <Dialog open={open} onOpenChange={opened => {
      setOpen(opened)
      // clear input data
      initDefaults()
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
          <div ref={divRef} onClick={(e) => hackFocus(e)}>
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
                    isValidEmail && "border-green-500",
                    error && "border-destructive",
                    error === t('unregisteredEmailNotice') && 'border-blue-500',
                    "pr-10"
                  )}
                />
                {(isValidating) && (
                  <div className="absolute right-3 top-1/2 -translate-y-1/2">
                    <Loader className="animate-spin" size={16} />
                  </div>
                )}
                {isValidEmail && !isValidating && !error && (
                  <CircleCheck className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500" size={16} />
                )}
                {error && !isValidating && (
                  <AlertCircle className={cn(
                    "absolute right-3 top-1/2 transform -translate-y-1/2 text-destructive",
                    error === t('unregisteredEmailNotice') && 'text-blue-500'
                  )} size={16} />
                )}
              </div>

              {isValidEmail && fullAddress && (
                <p className="mt-1 text-xs text-primary/60">{fullAddress}</p>
              )}
              {error && (
                <p className={cn(
                  "mt-1 text-xs text-destructive",
                  error === t('unregisteredEmailNotice') && 'text-blue-400'
                )}>{error}</p>
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

            <div className="mb-5">
              <label htmlFor="note" className="block mb-2 text-sm font-medium">{t('note')}</label>
              <div className="relative">
                <Textarea
                  className=" focus-visible:ring-0"
                  id="note"
                  value={note}
                  onChange={e => setNote(e.target.value)}
                />
              </div>
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
