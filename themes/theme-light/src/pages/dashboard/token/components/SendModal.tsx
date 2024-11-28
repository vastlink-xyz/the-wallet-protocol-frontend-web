import { useState, useEffect, FormEvent, useRef, useMemo } from "react"
import { Address, parseEther, isAddress } from 'viem'

import { cn, emailRegex, formatDecimal, getEstimatedGasFeeByToken, handleError, log } from "@/lib/utils"

import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog"
import { Loader, CircleCheck, AlertCircle, X, LoaderCircle } from "lucide-react"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "react-toastify";
import { TokenType } from "@/types/tokens";
import { Token, TokenFactory } from "@/services/TokenService";
import { LogoLoading } from "@/components/LogoLoading";
import { useTranslation } from "react-i18next";
import { Textarea } from "@/components/ui/textarea";
import { TransactionType } from "@/types/transaction";
import keyManagementService from "@/services/KeyManagementService";
import api from "@/lib/api"
import ReactDOM from "react-dom"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"

const tokenTypes = TokenFactory.getInstance().getAllTokenTypes()

export function SendModal({
  open,
  setOpen,
  balance,
  address,
  tokenType,
  defaultTo,
  defaultAmount,
  defaultNote,
  onClose,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  balance?: string; // kkktodo to be removed
  address: Address;
  tokenType: TokenType;
  defaultTo?: string;
  defaultAmount?: string;
  defaultNote?: string;
  onClose?: () => void;
}) {
  const [to, setTo] = useState('')
  const [amount, setAmount] = useState('')
  const [note, setNote] = useState('')
  const [sending, setSending] = useState(false)
  const [symbol, setSymbol] = useState('')
  const tokenRef = useRef<Token>()

  const [currentTokenType, setCurrentTokenType] = useState<TokenType>(tokenType)
  const [currentBalance, setCurrentBalance] = useState<string>('0')
  const [estimatedFee, setEstimatedFee] = useState<string>('')
  const [isEstimatingFee, setIsEstimatingFee] = useState(false)

  // email address validation
  const [isValidating, setIsValidating] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [fullAddress, setFullAddress] = useState('');
  const [error, setError] = useState('');
  const [amountError, setAmountError] = useState('');

  const { t } = useTranslation()

  useEffect(() => {
    if (open) {
      handleTokenTypeChange(tokenType)
    } else {
      initDefaults()
    }
  }, [open])

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
      (!!error && error !== t('/dashboard.[token].sendModal.unregisteredEmailNotice')) ||
      parseFloat(amount) > parseFloat(currentBalance) ||
      isEstimatingFee
    );
  }, [to, amount, sending, isValidEmail, isValidating, error, currentBalance, isEstimatingFee]);

  const handleTokenTypeChange = async (newTokenType: TokenType) => {
    setAmount('')
    setIsEstimatingFee(false)
    setEstimatedFee('')
    setAmountError('')
    setCurrentTokenType(newTokenType)
    const token = TokenFactory.getInstance().createToken(newTokenType)
    tokenRef.current = token
    setSymbol(tokenRef.current.symbol)
    let b = await tokenRef.current.getBalance(address)
    b = formatDecimal(b)
    setCurrentBalance(b)
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
            setError(t('/dashboard.[token].sendModal.unregisteredEmailNotice'));
          } else {
            setIsValidEmail(false);
            setFullAddress('');
            setError(t('/dashboard.[token].sendModal.invalidEmailFormat'));
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
        token: currentTokenType,
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

  const handleSend = async () => {
    // const handleSend = async (event: FormEvent<HTMLFormElement>) => {
    //   event.preventDefault();
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
      } else if (emailRegex.test(to) && error === t('/dashboard.[token].sendModal.unregisteredEmailNotice')) {
        // send register email to unregistered user
        toEmail = to;
        const response = await api.post('/invite/invite-register', {
          toEmail,
          from: address,
          amount: parseEther(amount).toString(),
          token: currentTokenType,
          note,
        });
        log('res', response)
        toast.success(t('/dashboard.[token].sendModal.emailSentToUnregistered'));
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
      toast.error(t('/dashboard.[token].sendModal.sendError'));
    } finally {
      setSending(false);
    }

  }

  const handleAmountBlur = async () => {
    // check amount exceeded
    if (parseFloat(amount) > parseFloat(currentBalance)) {
      setAmountError('Amount exceeded')
    } else {
      setAmountError('')
    }

    // check estimated fee
    if (amount && !isDisabled) {
      setIsEstimatingFee(true)
      try {
        const fee = await getEstimatedGasFeeByToken(currentTokenType, {
          to: address,
          amount: parseEther(amount),
        })
        if (fee) {
          setEstimatedFee(fee.feeInTokens.toString())
        } else {
          setEstimatedFee('')
        }
      } catch (error) {
        log('Failed to get estimated fee:', error)
        setEstimatedFee('')
      } finally {
        setIsEstimatingFee(false)
      }
    }
  }

  const initDefaults = () => {
    setAmount('');
    setTo('');
    setNote('');
    setFullAddress('');
    setError('');
    setIsValidEmail(false);
    setIsValidating(false);
    setEstimatedFee('')
  }

  const modalContent = open ? (
    <div className="fixed inset-0 z-50 flex items-center justify-center font-['Roboto']">
      {/* background */}
      <div className="fixed inset-0 bg-[#1f2533]/40"></div>

      {/* modal */}
      <div className={cn(
        "relative z-50 w-[372px]",
      )}>
        <div className="bg-background text-primary rounded-[6px] w-full">
          <header className="flex justify-between items-center px-5 py-[14px] border-b border-[#EBEBEB]">
            <p className="text-black text-lg font-medium font-['Roboto'] leading-normal">
              {t('/dashboard.[token].sendModal.title')}
            </p>
            <button
              onClick={() => setOpen(false)}
              className="text-[#929292] hover:text-[#929292]/80"
            >
              <X />
            </button>
          </header>

          <div className="p-6 border-b border-[#EBEBEB]">
            <form>
              {/* to */}
              <div className="mb-6">
                <label htmlFor="to" className="block mb-2 text-sm font-medium">{t('/dashboard.[token].sendModal.to')}</label>
                <div className="relative">
                  <Input
                    value={to}
                    onChange={e => setTo(e.target.value.trim())}
                    onBlur={handleBlur}
                    id="to"
                    required
                    placeholder={t('/dashboard.[token].sendModal.toPlaceholder')}
                    className={cn(
                      isValidEmail && "border-green-500",
                      error && "border-destructive",
                      error === t('/dashboard.[token].sendModal.unregisteredEmailNotice') && 'border-blue-500',
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
                      error === t('/dashboard.[token].sendModal.unregisteredEmailNotice') && 'text-blue-500'
                    )} size={16} />
                  )}
                </div>

                {isValidEmail && fullAddress && (
                  <p className="mt-1 text-xs text-primary/60">{fullAddress}</p>
                )}
                {error && (
                  <p className={cn(
                    "mt-1 text-xs text-destructive",
                    error === t('/dashboard.[token].sendModal.unregisteredEmailNotice') && 'text-blue-400'
                  )}>{error}</p>
                )}
              </div>

              {/* amount */}
              <div className="mb-[16px]">
                <div className="flex items-center justify-between">
                  <label htmlFor="amount" className="block mb-2 text-sm font-medium">{t('/dashboard.[token].sendModal.amount')}</label>
                </div>
                <div className="relative">
                  <Input
                    value={amount}
                    onChange={e => setAmount(e.target.value.trim())}
                    type="number"
                    id="amount"
                    className="pl-[80px] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    required
                    onBlur={handleAmountBlur}
                  />
                  <div className="absolute left-2 top-1/2 -translate-y-1/2">
                    <DropdownMenu>
                      <DropdownMenuTrigger className="flex items-center gap-[6px] px-0 py-1">
                        <span className="font-medium text-sm">{currentTokenType}</span>
                        <ChevronDown className="h-4 w-4 opacity-50" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="start" className="bg-white">
                        {
                          tokenTypes.map((type) => {
                            return (
                              <DropdownMenuItem key={type} onClick={() => handleTokenTypeChange(type)}>{type}</DropdownMenuItem>
                            );
                          })
                        }
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
                {amountError && (
                  <p className="mt-1 text-xs text-destructive">{amountError}</p>
                )}
              </div>

              {/* estimated gas fee */}
              <div className="mb-[16px] text-[#979797] text-sm font-normal leading-none flex items-center">
                <div className="mr-1">Estimated gas fee: </div>
                {
                  isEstimatingFee ? (
                    <span><LoaderCircle className="animate-spin" size={14} /></span>
                  ) : estimatedFee ? (
                    <span className="text-black">~ {estimatedFee} {symbol}</span>
                  ) : (
                    <span className="text-black">-</span>
                  )
                }
              </div>

              {
                estimatedFee && (
                  <div className="rounded-lg border border-black/10 bg-black/5 p-3 mb-4 flex items-start">
                    <img className="w-4 h-4 mr-2" src="/imgs/icons/information_filled.svg" alt="information" />
                    <p className="text-xs text-black">Estimated fees may vary and will be recalculated during backend checks.</p>
                  </div>
                )
              }

              <div className="text-[#979797] text-sm font-['Roboto'] leading-none mb-6">
                Balance: <span className="text-black">{formatDecimal(currentBalance)} {symbol}</span>
              </div>

              {/* note */}
              <div className="mb-5">
                <label htmlFor="note" className="block mb-2 text-sm font-medium">{t('/dashboard.[token].sendModal.note')}</label>
                <div className="relative">
                  <Textarea
                    className="focus-visible:ring-0 placeholder:text-black/25"
                    id="note"
                    placeholder={'Add your note'}
                    value={note}
                    onChange={e => setNote(e.target.value)}
                  />
                </div>
              </div>
            </form>
          </div>

          <footer className="flex justify-end items-center gap-3 px-5 py-[14px]">
            {/* <div className="text-black text-sm font-medium font-['Roboto'] leading-none">
              Total amount: {amount ? `${amount} ${symbol}` : '-'}
            </div> */}
            <Button
              onClick={handleSend}
              className={cn('py-12px')}
              disabled={isDisabled}
            >
              {
                sending ? (
                  <div className="">
                    <LogoLoading />
                  </div>
                ) : (
                  <span>{t('/dashboard.[token].sendModal.title')}</span>
                )
              }
            </Button>
          </footer>
        </div>
      </div>
    </div>
  ) : null;

  if (typeof window !== 'undefined') {
    return ReactDOM.createPortal(
      modalContent,
      document.body
    );
  }
}
