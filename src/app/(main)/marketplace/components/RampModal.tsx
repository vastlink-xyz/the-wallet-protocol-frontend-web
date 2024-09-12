'use client'

import dynamic from 'next/dynamic';
import { useTranslations } from 'next-intl';
import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { ArrowLeftRight, CircleCheck, ShoppingCart } from 'lucide-react';
import { auth, cn, log, makeAuthenticatedApiRequest } from '@/lib/utils';
import { Modal } from '@/components/Modal';
import { useTheme } from 'next-themes';
import { OnInitiateDepositProps, OnInitiateDepositReplyProps } from '@/types/moonpayTypes';
import { usePassportClientVerification } from '@/hooks/usePassportClientVerification';
import { Id, toast } from 'react-toastify';
import { Token, TokenFactory } from '@/services/TokenService';
import { TokenType } from '@/types/tokens';
import { LogoLoading } from '@/components/LogoLoading';
import { TransactionType } from '@/types/transaction';

const MoonPayBuyWidget = dynamic(
  () => import('@moonpay/moonpay-react').then((mod) => mod.MoonPayBuyWidget),
  { ssr: false },
);

const MoonPaySellWidget = dynamic(
  () => import('@moonpay/moonpay-react').then((mod) => mod.MoonPaySellWidget),
  { ssr: false },
);

export function RampModal({
  isOpen,
  product,
  onClose,
}: {
  isOpen: boolean;
  product: any;
  onClose: (isSave: boolean) => void;
}) {
  const t = useTranslations('/marketplace.moonpayRamp')
  const [buyVisible, setBuyVisible] = useState(false)
  const [sellVisible, setSellVisible] = useState(false)

  // moonpay ramp widget
  const { theme } = useTheme()
  const [email, setEmail] = useState<string | undefined>('')
  const [walletAddresses, setWalletAddresses] = useState('')

  // sign transation
  const { verifyPassportClient } = usePassportClientVerification()
  const [sending, setSending] = useState(false)
  const tokenRef = useRef<Token>()
  const toastId = useRef<Id>();

  useEffect(() => {
    init();
  }, [])
  
  const init = async () => {
    const {
      desUsername,
      address,
    } = auth.all()

    // set email
    if (desUsername) {
      setEmail(desUsername?.username)
      // setEmail('xlstest@proton.me')
    } else {
      setEmail(undefined)
    }

    // set walletAddresses
    const walletAddressesRaw = {
      'eth': address,
      'matic_polygon': address,
    }
    const wa = JSON.stringify(walletAddressesRaw)
    setWalletAddresses(wa)
  }

  const handleGetSignature = async (url: string): Promise<string> => {
    const response = await fetch(`/api/sign-moonpay-params?url=${encodeURIComponent(url)}`);
    const data = await response.json();
    return data.signature;
  }

  const handleClose = () => {
    onClose(false)
    setBuyVisible(false)
    setSellVisible(false)
  }

  const handleInitiateDeposit = async (props: OnInitiateDepositProps) => {
    setSending(false)
    const confirmed = await handleConfirm(props)
    if (confirmed) {
      const token = TokenFactory.getInstance().createToken(props.cryptoCurrency.code.toUpperCase() as TokenType)
      tokenRef.current = token
      const hash = await signTransaction(props)
      return {
        // depositId: hash ? hash : '',
        depositId: '',
      }
    } else {
      return {
        depositId: '',
      }
    }
  }

  const handleConfirm = (props: OnInitiateDepositProps): Promise<boolean> => {
    return new Promise((resolve) => {
      toastId.current = toast(
        <div className="w-full text-primary">
          <h2 className="text-lg font-semibold">{t('depositConfirmation.title')}</h2>
          <p className="mt-2">{t('depositConfirmation.message')}</p>
          <div className="mt-4 flex justify-end">
            <Button 
              className="mr-2 px-4 py-2" 
              variant={'ghost'}
              onClick={() => {
                toast.dismiss(toastId.current);
                resolve(false);
              }}
            >
              {t('depositConfirmation.cancelButton')}
            </Button>
            <Button 
              className="px-4 py-2" 
              onClick={async() => {
                toast.dismiss(toastId.current);
                resolve(true);
              }}
              disabled={sending}
            >
              {
                sending ? (
                  <LogoLoading />
                ) : (
                  t('depositConfirmation.confirmButton')
                )
              }
            </Button>
          </div>
        </div>,
        {
          closeOnClick: false,
          autoClose: false,
          theme: theme,
          className: 'bg-card !important',
        }
      );
    });
  };
  

  async function signTransaction(props: OnInitiateDepositProps) {
    try {
      const amt = props.cryptoCurrencyAmountSmallestDenomination
      log('amt', amt)

      setSending(true)
      // return
      const client = await verifyPassportClient()
      if (!client) {
        return
      }

      // kkktodo
      const apiPath = `transaction/sign`
      const response = await makeAuthenticatedApiRequest({
        path: apiPath,
        data: {
          to: props.depositWalletAddress,
          amount: amt,
          token: props.cryptoCurrency.code.toUpperCase(),
          transactionType: TransactionType.SELL,
        },
      })

      const data = response.data
      log('data', data)

      const succeeded = typeof data.hash === 'string' && data.hash.startsWith('0x');
      if (succeeded) {
        notifyTransactionSubmitted(data.hash)
        return data.hash
      } else {
        // need to be verified
        toast.error(data.message)
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

  return (
    <Modal
      className={cn(
        "text-primary p-6",
      )}
      isOpen={isOpen}
      onClose={() => handleClose()}
    >
      <div className='flex items-center text-2xl font-bold mb-6'>
        <Image src='/moonpay-logo.png' alt="MoonPay Logo" width={32} height={32} className='mr-3' />
        {t('modalTitle')}
      </div>

      {
        buyVisible && (
          <MoonPayBuyWidget
            variant={'overlay'}
            visible={buyVisible}
            theme={theme}
            email={email}
            onCloseOverlay={() => {
              setBuyVisible(false)
            }}
            walletAddresses={walletAddresses}
            showWalletAddressForm='true'
            showAllCurrencies='true'
            onInitiateDeposit={handleInitiateDeposit}
            onUrlSignatureRequested={handleGetSignature}
          />
        )
      }

      {
        sellVisible && (
          <MoonPaySellWidget
            variant={'overlay'}
            visible={sellVisible}
            theme={theme}
            email={email}
            walletAddresses={walletAddresses}
            showWalletAddressForm='true'
            showAllCurrencies='true'
            onCloseOverlay={() => {
              setSellVisible(false)
            }}
            onInitiateDeposit={handleInitiateDeposit}
            onUrlSignatureRequested={handleGetSignature}
          />
        )
      }
      
      <div className="grid grid-cols-2 gap-4">
        <Button
          className='font-semibold py-6'
          onClick={() => setBuyVisible(true)}
        >
          <ShoppingCart className='mr-2' />
          {t('buyButton')}
        </Button>
        <Button
          className='font-semibold py-6'
          onClick={() => setSellVisible(true)}
        >
          <ArrowLeftRight className='mr-2' />
          {t('sellButton')}
        </Button>
      </div>

      {
        sending && (
          <LogoLoading fullscreen type={'breathe'} />
        )
      }
    </Modal>
  )
}
