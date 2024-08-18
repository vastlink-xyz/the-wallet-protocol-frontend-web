'use client'

import axios from 'axios'
import { useEffect, useRef, useState } from "react"
import { auth, log } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { toast } from 'react-toastify'
import { CircleCheck } from 'lucide-react'
import { Token, TokenFactory } from '@/services/TokenService'
import { makeAuthenticatedApiRequest } from '@/lib/utils'
import { usePassportClientVerification } from '@/hooks/usePassportClientVerification'
import { LogoLoading } from '@/components/LogoLoading'
import { useTransaction } from '@/components/VastWalletConnect/useTransaction'
import { useTranslations } from 'next-intl'

export function PurchaseModal({
  isOpen,
  product,
  onClose,
  balance,
}: {
  isOpen: boolean;
  product: any;
  onClose: (isSave: boolean) => void;
  balance: string;
}) {
  const [isPurchasing, setIsPurchasing] = useState(false)
  const tokenRef = useRef<Token>()
  const {verifyPassportClient} = usePassportClientVerification()
  const { signTransaction, waitForTransactionExection } = useTransaction()
  const t = useTranslations('/marketplace.productCard')

  useEffect(() => {
    const token = TokenFactory.getInstance().createToken('TVWT')
    tokenRef.current = token
  }, [])

  const handlePurchase = async () => {
    try {
      setIsPurchasing(true)
      const client = await verifyPassportClient()
      if (!client) {
        return
      }

      const response = await makeAuthenticatedApiRequest({
        path: 'user/purchase',
        data: {
          productId: product.id,
        }
      })
      log('response', response)

      const result = response.data
      if (result.success) {
        onClose(true)
        toast.success(t('purchaseSuccess'))
        setIsPurchasing(false)
      } else if (result.needOtp) {
        toast.warning(t('dailyLimitExceededOtpRequired'))
        const hash = await waitForTransactionExection(result.transactionId)
        const { data } = await makeAuthenticatedApiRequest({
          path: 'user/purchase/saveProducts',
          data: {
            productId: product.id,
          }
        })
        setIsPurchasing(false)
        onClose(true)
        toast.success(t('purchaseSuccess'))
      } else {
        toast.error(response.data.message)
        setIsPurchasing(false)
      }
    } catch(err) {
      toast.error((err as any).response.data)
      setIsPurchasing(false)
    } finally {
    }
  }

  return (
    <Dialog
      open={isOpen}
      onOpenChange={opened => {
        if (!opened) {
          onClose(false)
        }
      }}
    >
      <DialogContent className="sm:max-w-[425px] text-primary">
        <DialogHeader>
          <DialogTitle>Confirm Purchase</DialogTitle>
          <DialogDescription>
          </DialogDescription>
        </DialogHeader>

        <div>
          <div className='flex items-center mb-2'>
            <p className='text-sm opacity-85 w-[80px]'>Product:</p>
            <p className='ml-2'>{product.name}</p>
          </div>
          <div className='flex items-center mb-2'>
            <p className='text-sm opacity-85 w-[80px]'>Price:</p>
            <p className='ml-2'>
              <span className='text-brand-foreground'>{product.price}</span>
              <span className='text-xs inline-block ml-2'>TVWT</span>
            </p>
          </div>
          <div className='flex items-center'>
            <p className='text-sm opacity-85 w-[80px]'>Balance:</p>
            <p className='ml-2'>
              <span className='text-brand-foreground'>{balance}</span>
              <span className='text-xs inline-block ml-2'>TVWT</span>
            </p>
          </div>
        </div>

        <DialogFooter>
          <Button
            disabled={isPurchasing}
            onClick={() => handlePurchase()}
          >
            {
              isPurchasing ? (
                <LogoLoading />
              ) : (
                'Confirm'
              )
            }
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
