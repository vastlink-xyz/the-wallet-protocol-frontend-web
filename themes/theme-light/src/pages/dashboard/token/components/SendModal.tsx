import { useState, useEffect, useRef, useMemo } from "react"
import { Address, parseEther, isAddress } from 'viem'

import { cn, emailRegex, formatDecimal, getEstimatedGasFeeByToken, handleError, log, symbolByToken } from "@/lib/utils"

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
import { useDebounce } from "@/hooks/useDebounce"
import { notification } from "antd"
import { DailyTransactionLimitModal } from "@/pages/profile/components/DailyTransactionLimitModal"
import { useDailyWithdrawalLimits } from "@/hooks/useDailyWithdrawalLimits"

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
  
  // daily limit
  const [isOpenDailyWithdrawalLimitModal, setIsOpenDailyWithdrawalLimitModal] = useState(false)
  const { data: defaultLimits } = useDailyWithdrawalLimits()
  
  const [currentTokenType, setCurrentTokenType] = useState<TokenType>(tokenType)
  const [currentBalance, setCurrentBalance] = useState<string>('0')
  const [estimatedFee, setEstimatedFee] = useState<string>('')
  const [isEstimatingFee, setIsEstimatingFee] = useState(false)
  const [isInitialized, setIsInitialized] = useState(false)

  // email address validation
  const [isValidating, setIsValidating] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [fullAddress, setFullAddress] = useState('');
  const [error, setError] = useState('');
  const [amountError, setAmountError] = useState('');

  const { t } = useTranslation()

  const debouncedAmount = useDebounce(amount, 800)
  const debouncedTo = useDebounce(to, 800)

  // useEffect(() => {
  //   if (open) {
  //     handleTokenTypeChange(tokenType)
  //   } else {
  //     initDefaults()
  //   }
  // }, [open])

  useEffect(() => {
    log('open', open, 'address', address)
    if (open) {
      init()
    } else {
      initDefaults()
    }
  }, [defaultTo, defaultAmount, defaultNote, open])

  useEffect(() => {
    if (to && amount && isInitialized) {
      // check amount exceeded
      checkAmountExceed()
      // check email and estimated fee
      validateEmail(to)
      checkEstimatedFee()
      setIsInitialized(false)
    }
  }, [to, amount, isInitialized, open])

  useEffect(() => {
    // close callback
    if (!open && onClose) {
      onClose()
    }
  }, [open])

  useEffect(() => {
    checkAmountExceed()
    if (debouncedTo) {
      validateEmail(debouncedTo)
    }
    if (debouncedAmount && !isDisabled && !isEstimatingFee) {
      checkEstimatedFee()
    }
  }, [debouncedAmount, debouncedTo])

  const init = async () => {
    await handleTokenTypeChange(tokenType)
    if (defaultTo) {
      setTo(defaultTo)
    }
    if (defaultAmount) {
      setAmount(defaultAmount)
    }
    if (defaultNote) {
      setNote(defaultNote)
    }
    setIsInitialized(true)
  }

  const currentDailyLimit = useMemo(() => {
    return defaultLimits[currentTokenType]
  }, [currentTokenType, defaultLimits])

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

  const handleOpenDailyWithdrawalLimitNotification = () => {
    const btn = (
      <div className="cursor-pointer" onClick={() => {
        notification.destroy()
      }}>Ok</div>
    )
    notification.open({
      message: 'Daily transaction limit exceeded',
      description: (<div>
        <p>Please check your email and verify by the OTP.</p>
        <p>You can change yur dailiy transaction limit under profile page.</p>
      </div>),
      placement: 'top',
      duration: 0,
      btn,
    });
  };

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
      // validateEmail(to);
      if (amount) {
        // checkEstimatedFee()
      }
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
        // toast.error(message)
        handleOpenDailyWithdrawalLimitNotification()
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
 
  const checkAmountExceed = async () => {
    // check amount exceeded
    if (parseFloat(amount) > parseFloat(currentBalance)) {
      setAmountError('Amount exceeded')
    } else {
      setAmountError('')
    }
  }

  const checkEstimatedFee = async () => {
    if (amount && !isDisabled) {
      setIsEstimatingFee(true)
      try {
        log('checkEstimatedFee', amount)
        const fee = await getEstimatedGasFeeByToken(currentTokenType, {
          to: address,
          amount: parseEther(amount),
        }, address)
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

  const handleAmountChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value.trim())
    // check amount exceeded
    if (parseFloat(amount) > parseFloat(currentBalance)) {
      setAmountError('Amount exceeded')
    } else {
      setAmountError('')
    }
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
                    // onChange={e => setAmount(e.target.value.trim())}
                    onChange={handleAmountChange}
                    type="number"
                    inputMode="decimal"
                    id="amount"
                    className={cn(
                      "pl-[80px] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
                      currentTokenType === 'ETH' &&'pl-[110px]',
                      currentTokenType === 'MATIC' &&'pl-[70px]',
                    )}
                    required
                    onBlur={checkAmountExceed}
                  />
                  <div className="absolute left-2 top-1/2 -translate-y-1/2">
                    <DropdownMenu>
                      <DropdownMenuTrigger className="flex items-center gap-[6px] px-0 py-1">
                        <span className="font-medium text-sm">{symbolByToken(currentTokenType)}</span>
                        <ChevronDown className="h-4 w-4 opacity-50" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="start" className="bg-white">
                        {
                          tokenTypes.map((type) => {
                            return (
                              <DropdownMenuItem key={type} onClick={() => handleTokenTypeChange(type)}>{symbolByToken(type)}</DropdownMenuItem>
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
                    <span className="text-black">~ {estimatedFee} {symbol === 'TVWT' ? 'POL' : symbol}</span>
                  ) : (
                    <span className="text-black">-</span>
                  )
                }
              </div>

              {/* daily limit */}
              <div className="flex items-center justify-between mb-[20px]">
                <p className="text-[#979797] text-sm leading-none">Daily limit: <span>{currentDailyLimit} {symbol}</span></p>
                <Button
                  variant={'outline'}
                  className="h-[24px] py-1 px-2 text-xs"
                  onClick={() => setIsOpenDailyWithdrawalLimitModal(true)}
                  type="button"
                >Change limit</Button>
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

      {/* daily transaction limit modal */}
      <DailyTransactionLimitModal
        isOpen={isOpenDailyWithdrawalLimitModal}
        onClose={() => setIsOpenDailyWithdrawalLimitModal(false)}
        defaultLimits={defaultLimits}
      />
    </div>
  ) : null;

  if (typeof window !== 'undefined') {
    return ReactDOM.createPortal(
      modalContent,
      document.body
    );
  }
}
