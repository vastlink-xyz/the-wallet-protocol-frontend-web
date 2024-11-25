import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeftRight, ShoppingCart } from 'lucide-react';
import { auth, cn, log } from '@/lib/utils';
import { Modal } from '@/components/Modal';
import { OnInitiateDepositProps, OnInitiateDepositReplyProps } from '@/types/moonpayTypes';
import { MoonPayBuyWidget, MoonPaySellWidget } from '@moonpay/moonpay-react'
import { Id, toast } from 'react-toastify';
import { Token, TokenFactory } from '@/services/TokenService';
import { TokenType } from '@/types/tokens';
import { LogoLoading } from '@/components/LogoLoading';
import { TransactionType } from '@/types/transaction';
import { useTransaction } from '@/components/VastWalletConnect/useTransaction';
import { Address, formatEther } from 'viem';
import { useTranslation } from 'react-i18next';
import api from '@/lib/api';
import { Loading } from '@/components/Loading';

export function RampModal({
  isOpen,
  product,
  onClose,
}: {
  isOpen: boolean;
  product: any;
  onClose: (isSave: boolean) => void;
}) {
  const { t } = useTranslation()
  const [buyVisible, setBuyVisible] = useState(false)
  const [sellVisible, setSellVisible] = useState(false)

  // moonpay ramp widget
  const [email, setEmail] = useState<string | undefined>('')
  const [walletAddresses, setWalletAddresses] = useState('')

  // sign transation
  const [sending, setSending] = useState(false)
  const tokenRef = useRef<Token>()
  const toastId = useRef<Id>();
  const { signTransaction, waitForTransactionExection } = useTransaction()

  useEffect(() => {
    init();
  }, [])
  
  const init = async () => {
    const {
      username,
      address,
    } = auth.all()

    // set email
    if (username) {
      setEmail(username)
    } else {
      setEmail(undefined)
    }

    // set walletAddresses
    // TODO by JJ: is there a way to verify the address again here to make sure it is the user's actual address from the private key, in order to avoid potential risks.
    const walletAddressesRaw = {
      'eth': address,
      'matic_polygon': address,
    }
    const wa = JSON.stringify(walletAddressesRaw)
    setWalletAddresses(wa)
  }

  const handleGetSignature = async (url: string): Promise<string> => {
    const response = await api.get(`/thirdparty/sign-moonpay-params?url=${encodeURIComponent(url)}`);
    return response.data.signature;
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
      const hash = await handleSignTransaction(props)
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
          <h2 className="text-lg font-semibold">{t('/marketplace.moonpayRamp.depositConfirmation.title')}</h2>
          <p className="mt-2">{t('/marketplace.moonpayRamp.depositConfirmation.message')}</p>
          <div className="mt-4 flex justify-end">
            <Button 
              className="mr-2 px-4 py-2" 
              variant={'ghost'}
              onClick={() => {
                toast.dismiss(toastId.current);
                resolve(false);
              }}
            >
              {t('/marketplace.moonpayRamp.depositConfirmation.cancelButton')}
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
                  t('/marketplace.moonpayRamp.depositConfirmation.confirmButton')
                )
              }
            </Button>
          </div>
        </div>,
        {
          closeOnClick: false,
          autoClose: false,
          className: 'bg-card !important',
        }
      );
    });
  };
  

  async function handleSignTransaction(props: OnInitiateDepositProps) {
    try {
      const token = props.cryptoCurrency.code.toUpperCase() as TokenType
      const amt = formatEther(BigInt(props.cryptoCurrencyAmountSmallestDenomination))
      log('amt', amt)

      setSending(true)

      const result = await signTransaction({
        to: props.depositWalletAddress as Address,
        amount: amt,
        token: token,
        transactionType: TransactionType.SELL,
        data: '',
      })
    } catch (error) {
      const res = (error as any).response
      if (res && res.data) {
        toast.error(res.data)
      }
    } finally {
      setSending(false);
    }
  }

  const handleTransactionCreated = async (props: any) => {
    log('transactionCreated', props)
  }

  return (
    <Modal
      className={cn(
        "text-primary p-4 tablet:p-6",
      )}
      isOpen={isOpen}
      onClose={() => handleClose()}
    >
      <div className={cn(
        'flex items-center font-bold mb-6',
        'text-md tablet:text-2xl',
      )}>
        <img src='/imgs/logos/moonpay-logo.png' alt="MoonPay Logo" width={32} height={32} className='mr-3' />
        {t('/marketplace.moonpayRamp.modalTitle')}
      </div>

      {
        buyVisible && (
          <MoonPayBuyWidget
            variant={'overlay'}
            visible={buyVisible}
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
            email={email}
            walletAddresses={walletAddresses}
            showWalletAddressForm='true'
            showAllCurrencies='true'
            onCloseOverlay={() => {
              setSellVisible(false)
            }}
            onInitiateDeposit={handleInitiateDeposit}
            onUrlSignatureRequested={handleGetSignature}
            onTransactionCreated={handleTransactionCreated}
          />
        )
      }
      
      <div className="grid grid-cols-2 gap-4">
        <Button
          className={cn(
            'font-semibold',
            'py-3 tablet:py-6',
            'text-xs tablet:text-sm',
          )}
          onClick={() => setBuyVisible(true)}
          >
          <ShoppingCart className='hidden tablet:block tablet:mr-2' />
          {t('/marketplace.moonpayRamp.buyButton')}
        </Button>
        <Button
          className={cn(
            'font-semibold',
            'py-3 tablet:py-6',
            'text-xs tablet:text-sm',
          )}
          onClick={() => setSellVisible(true)}
        >
          <ArrowLeftRight className='hidden tablet:block tablet:mr-2' />
          {t('/marketplace.moonpayRamp.sellButton')}
        </Button>
      </div>

      {
        sending && (
          <Loading />
        )
      }
    </Modal>
  )
}
