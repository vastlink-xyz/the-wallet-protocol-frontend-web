'use client'

import { useEffect, useRef, useState } from "react"
import { auth, handleError, log } from "@/lib/utils"

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
import { LogoLoading } from '@/components/LogoLoading'
import { useTransaction } from '@/components/VastWalletConnect/useTransaction'
import { useTranslations } from 'next-intl'
import { parseEther } from 'viem'
import api from '@/lib/api'
import keyManagementService from '@/services/KeyManagementService'

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
  const { signTransaction, waitForTransactionExection } = useTransaction()
  const t = useTranslations('/marketplace.productCard')

  useEffect(() => {
    const token = TokenFactory.getInstance().createToken('TVWT')
    tokenRef.current = token
  }, [])

  const handlePurchase = async () => {
    if (parseEther(balance) < parseEther(String(product.price))) {
      toast.error(t('insufficientBalance'))
      return
    }
    try {
      setIsPurchasing(true)

      const { data: { success, ...transactionPayload } } = await api.post('/user/purchase', {
        productId: product.id,
      })

      if (success) {
        onClose(true)
        toast.success(t('purchaseSuccess'))
        setIsPurchasing(false)
      } else {
        // sign transaction by keymanagement
        const {
          needOtp,
          transactionId,
          hash,
        } = await keyManagementService.signTransaction({
          toAddress: transactionPayload.to,
          amount: transactionPayload.amount,
          token: transactionPayload.token,
          transactionType: transactionPayload.transactionType,
        })

        if (hash) {
          await keyManagementService.waitForTransactionReceipt(hash, transactionPayload.token)
          // sign transaction success, save product to user
          await api.post('/user/purchase/saveProducts', {
            productId: product.id,
          })
          setIsPurchasing(false)
          onClose(true)
          toast.success(t('purchaseSuccess'))
        } else if (needOtp) {
          // daily limit exceeded, need otp
          toast.warning(t('dailyLimitExceededOtpRequired'))

          // Wait for the user to complete the transaction, polling the current transaction status
          const hash = await waitForTransactionExection(transactionId)
          await keyManagementService.waitForTransactionReceipt(hash, transactionPayload.token)
          await api.post('/user/purchase/saveProducts', {
            productId: product.id,
          })
          setIsPurchasing(false)
          onClose(true)
          toast.success(t('purchaseSuccess'))
        }
      }
    } catch(err) {
      const errorInfo = handleError(err)
      toast.error(errorInfo.message)
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
