import { cn } from "@/lib/utils";
import { IProduct } from "@/pages/marketplace/types";
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { PurchaseModal } from './PurchaseModal';
import { useState } from "react";
import { ZoomableImage } from './ZoomableImage';

export function Detail({
  product,
  balance,
  onPurchaseSuccess
}: {
  product: IProduct | null,
  balance: string,
  onPurchaseSuccess: () => void
}) {
  const [isChecked, setIsChecked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const buttonText = () => {
    if (product?.price === 0) {
      return 'Add for free'
    }

    if (product && product.price !== undefined && product.price > 0) {
      return 'Add'
    }
  }

  const handlePurchase = () => {
    setIsOpen(true)
  }

  const handleClose = (isSave: boolean) => {
    setIsOpen(false)
    if (isSave) {
      onPurchaseSuccess()
    }
  }

  if (!product) return null;

  return <>
    <div className="mt-[48px] mb-[60px] text-center text-black text-[28px] font-bold leading-[36.96px]">
      {product?.name}
    </div>

    <div className="overflow-x-auto">
      <div className="flex gap-x-[22px] min-w-min mx-auto w-fit">
        {
          product?.banners?.map(banner => (
            <div key={banner} className="w-[312px] shrink-0 p-2.5 bg-[#161616] rounded-[20px]">
              {/* not enlarge on mobile */}
              <img className={cn([
                'w-full h-auto object-cover',
                'tablet:hidden',
              ])} src={banner} alt={product?.name} />

              {/* enlarge on desktop */}
              <ZoomableImage
                src={banner}
                alt={product?.name}
                className={cn([
                  'w-full h-auto object-cover',
                  'tablet:block hidden',
                ])}
              />
            </div>
          ))
        }
      </div>
    </div>

    <div className={cn([
      'tablet:w-[548px] w-[334px]',
      'tablet:mt-[76px] mt-[34px]',
      'mx-auto',
    ])}>
      <div className="text-black text-xl font-bold leading-none mb-2">Version {product?.version}</div>
      <div className="text-black text-sm font-normal leading-none">{product?.description}</div>
    </div>

    <div className={cn([
      'tablet:w-[548px] w-[334px]',
      'mt-[40px] mx-auto',
    ])}>
      <div className="text-black text-xl font-bold leading-none mb-2">Subscription plan</div>
      <div className="text-black text-sm font-bold leading-none mb-1">{product?.price}V</div>
      <div className="text-black text-sm font-normal leading-none">To manage your plan, go to Profile page, under purchase and select manage.</div>
    </div>

    <div className={cn([
        'tablet:w-[548px] w-[334px]',
        'tablet:px-4 px-0',
        'mt-[56px] mx-auto',
      ])}>
        <label className="flex items-center gap-x-2 cursor-pointer">
          <Checkbox checked={isChecked} onCheckedChange={() => setIsChecked(!isChecked)} />
          <div className="text-center text-black text-xs font-normal leading-none select-none">
            I have read and agree the above terms and conditions
          </div>
        </label>
        <Button
          className="w-full mt-4"
          disabled={!isChecked}
          onClick={() => handlePurchase()}
        >
          {buttonText()}
        </Button>
      </div>

      {product && <PurchaseModal
        isOpen={isOpen}
        onClose={handleClose}
        product={product}
        balance={balance}
      />}
  </>
}