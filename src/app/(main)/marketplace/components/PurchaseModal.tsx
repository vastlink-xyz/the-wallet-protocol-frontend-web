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

  useEffect(() => {
    const token = TokenFactory.getInstance().createToken('TVWT')
    tokenRef.current = token
  }, [])

  const handlePurchase = async () => {
    const {
      authenticatedHeader,
      desUsername,
    } = auth.all()

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
      if (response.data.success) {
        onClose(true)
        toast.success(response.data.message)
      } else {
        toast.error(response.data.message)
      }
    } catch(err) {
      toast.error((err as Error).message)
    } finally {
      setIsPurchasing(false)
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
              <span className='text-warm-foreground'>{product.price}</span>
              <span className='text-xs inline-block ml-2'>TVWT</span>
            </p>
          </div>
          <div className='flex items-center'>
            <p className='text-sm opacity-85 w-[80px]'>Balance:</p>
            <p className='ml-2'>
              <span className='text-warm-foreground'>{balance}</span>
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
                'Processing...'
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
