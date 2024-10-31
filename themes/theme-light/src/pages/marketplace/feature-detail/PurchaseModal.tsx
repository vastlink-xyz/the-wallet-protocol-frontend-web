import { Loading } from '@/components/Loading';
import { Button } from '@/components/ui/button';
import { useTransaction } from '@/components/VastWalletConnect/useTransaction';
import api from '@/lib/api';
import { cn, handleError } from '@/lib/utils';
import { IProduct } from '@/pages/marketplace/types';
import { X } from 'lucide-react';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { parseEther } from 'viem';

interface ModalProps {
  isOpen: boolean;
  onClose: (isSave: boolean) => void;
  product: IProduct;
  balance: string;
}

export const PurchaseModal: React.FC<ModalProps> = ({ isOpen, onClose, product, balance }) => {
  const [isPurchasing, setIsPurchasing] = useState(false)
  const { signTransaction, waitForTransactionExection } = useTransaction()
  const { t } = useTranslation()
  const finalPrice = product.discount 
    ? product.price * (1 - product.discount / 100)
    : product.price

  const handlePurchase = async () => {
    if (parseEther(balance) < parseEther(String(finalPrice))) {
      toast.error(t('/marketplace.productCard.insufficientBalance'))
      return
    }
    try {
      setIsPurchasing(true)

      const { data: { success, needOtp, message, transactionId } } = await api.post('/user/purchase', {
        productId: product.id,
      })

      if (success) {
        onClose(true)
        toast.success(t('/marketplace.productCard.purchaseSuccess'))
        setIsPurchasing(false)
      } else if (needOtp) {
        // daily limit exceeded, need otp
        toast.warning(t('/marketplace.productCard.dailyLimitExceededOtpRequired'))

        // Wait for the user to complete the transaction, polling the current transaction status
        const hash = await waitForTransactionExection(transactionId)
        if (hash) {
          const { data } = await api.post('/user/purchase/saveProducts', {
            productId: product.id,
          })
          setIsPurchasing(false)
          onClose(true)
          toast.success(t('/marketplace.productCard.purchaseSuccess'))
        }
      }
    } catch (err) {
      const errorInfo = handleError(err)
      toast.error(errorInfo.message)
      setIsPurchasing(false)
    }
  }

  const modalContent = isOpen ? (
    <div className="fixed inset-0 z-50 flex items-center justify-center font-['Roboto']">
      {isPurchasing && <Loading />}

      {/* background */}
      <div className="fixed inset-0 bg-[#1f2533]/40"></div>

      {/* desktop modal */}
      <div className={cn(
        'hidden tablet:block',
        "relative z-50 w-[600px]",
      )}>
        <div className="bg-background text-primary rounded-[6px] w-full">
          <header className="flex justify-between items-center px-5 py-[14px] border-b border-[#EBEBEB]">
            <p className="text-black text-lg font-medium font-['Roboto'] leading-normal">Confirmation</p>
            <button
              onClick={() => onClose(false)}
              className="text-[#929292] hover:text-[#929292]/80"
            >
              <X />
            </button>
          </header>

          <div className="p-6 border-b border-[#EBEBEB]">
            <div className="text-black text-sm font-normal leading-none">{finalPrice}V will be deducted from your Asset. This is a monthly recurring charge.You can find the purchased product under the "Added" tab in the Marketplace. To manage your subscription, go to the "Profile" page, navigate to "Purchases," and select "Manage."</div>
          </div>

          <footer className="flex justify-end items-center gap-2 px-5 py-[14px]">
            <div className="text-black text-sm font-medium font-['Roboto'] leading-none">Asset balance: </div>
            <div className="text-black text-sm font-bold font-['Roboto'] leading-none">{balance} V</div>
            <Button
              disabled={isPurchasing}
              onClick={handlePurchase}
            >
              Add
            </Button>
          </footer>
        </div>
      </div>

      {/* mobile modal */}
      <div className={cn(
        'block tablet:hidden',
        "relative z-50 w-[280px]",
      )}>
        <div className="bg-background text-primary rounded-[6px] w-full">
          <div className="px-6 py-7 border-b border-[#EBEBEB]">
            <p className="text-black text-lg font-bold font-['Roboto'] leading-normal mb-2">Confirmation</p>
            <div className="text-black text-sm font-normal leading-tight">{finalPrice}V will be deducted from your Asset. This is a monthly recurring charge.You can find the purchased product under the "Added" tab in the Marketplace. To manage your subscription, go to the "Profile" page, navigate to "Purchases," and select "Manage."</div>
          </div>

          <footer className="">
            <Button
              disabled={isPurchasing}
              variant="ghost"
              className={cn(
                "w-full text-[15px] font-bold border-b border-[#EBEBEB] rounded-none",
                "hover:bg-black/5"
              )}
              onClick={handlePurchase}
            >
              Add
            </Button>
            <Button
              disabled={isPurchasing}
              variant="ghost"
              className={cn(
                "w-full text-[15px] rounded-none",
                "hover:bg-black/5"
              )}
              onClick={() => onClose(false)}
            >
              Cancel
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
};
