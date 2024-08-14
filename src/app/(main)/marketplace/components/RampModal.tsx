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
  const { theme } = useTheme()
  const [email, setEmail] = useState<string | undefined>('')

  useEffect(() => {
    const {
      desUsername,
    } = auth.all()
    if (desUsername) {
      setEmail(desUsername?.username)
    } else {
      setEmail(undefined)
    }
  }, [])

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
              log('onclose buy')
            }}
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
            onCloseOverlay={() => {
              setSellVisible(false)
              log('onclose sell')
            }}
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
