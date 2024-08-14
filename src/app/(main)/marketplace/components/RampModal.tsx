'use client'

import dynamic from 'next/dynamic';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { ArrowLeftRight, ShoppingCart } from 'lucide-react';
import { auth, cn, log } from '@/lib/utils';
import { Modal } from '@/components/Modal';
import { useTheme } from 'next-themes';

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

  useEffect(() => {
    init()
  }, [])
  
  const init = async () => {
    const {
      desUsername,
      address,
    } = auth.all()

    // set email
    if (desUsername) {
      setEmail(desUsername?.username)
      // kkktodo
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
    log('wa', wa)
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
            onCloseOverlay={() => {
              setSellVisible(false)
            }}
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
    </Modal>
  )
}
