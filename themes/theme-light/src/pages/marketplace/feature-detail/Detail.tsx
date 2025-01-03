import { cn } from "@/lib/utils";
import { IProduct } from "@/pages/marketplace/types";
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { PurchaseModal } from './PurchaseModal';
import { useMemo, useState } from "react";
import { ZoomableImage } from './ZoomableImage';
import { Back } from "@/components/Back";
import { useTokenPrice } from "@/hooks/useTokenPrice";
import { useNavigate } from "react-router-dom";

export function Detail({
  product,
  balance,
  onPurchaseSuccess
}: {
  product: IProduct | null,
  balance: string,
  onPurchaseSuccess: () => void
}) {
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const { data: tokenPrices } = useTokenPrice();

  const usdPrice = useMemo(() => {
    const a = Number(tokenPrices?.TVWT);
    const b = Number(product?.price);
    return (a * b);
  }, [tokenPrices, product?.price]);

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
    {/* back button on mobile */}
    <Back
      className={cn([
        'mb-[16px] mt-[20px]',
        'tablet:hidden',
      ])}
      onClick={() => navigate('/marketplace')}
    />

    {/* title */}
    <div className={cn([
      'mb-[60px] text-center text-black text-[28px] font-bold leading-[36.96px] mx-auto relative',
      'tablet:w-[646px]',
    ])}>
      {/* back button on desktop */}
      <Back
        className={cn([
          'absolute left-0 top-1/2 -translate-y-1/2 cursor-pointer',
          'hidden tablet:block',
        ])}
        onClick={() => navigate('/marketplace')}
      />
      <span>{product?.name}</span>
    </div>

    <div className="overflow-x-auto">
      <div className="flex gap-x-[22px] min-w-min mx-auto w-fit">
        {
          product?.banners?.map(banner => (
            <div key={banner} className="w-[312px] shrink-0 p-2.5 bg-[#161616] rounded-[20px]">
              {/* not enlarge on mobile */}
              {banner.endsWith('.mp4') ? (
                <video
                  src={banner}
                  autoPlay
                  muted
                  loop
                  className={cn([
                    'w-full h-auto object-cover',
                    'tablet:hidden',
                  ])}
                >
                  <source src={banner} type="video/mp4" />
                </video>
              ) : (
                <img
                  className={cn([
                    'w-full h-auto object-cover',
                    'tablet:hidden',
                  ])}
                  src={banner}
                  alt={product?.name}
                />
              )}

              {/* enlarge on desktop */}
              <ZoomableImage
                src={banner}
                alt={product?.name}
                type={banner.endsWith('.mp4') ? 'video' : 'image'}
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
      {/* <div className="text-black text-xl font-bold leading-none mb-2">Version {product?.version}</div> */}
      <div className="text-black text-sm font-normal leading-none">{product?.description}</div>
    </div>

    <div className={cn([
      'tablet:w-[548px] w-[334px]',
      'mt-[40px] mx-auto',
    ])}>
      {/* <div className="text-black text-xl font-bold leading-none mb-2">Subscription plan</div> */}
      <div className="text-black text-sm font-bold leading-none mb-1">{product?.price} VAST ( {usdPrice} USDT)</div>
      {/* <div className="text-black text-sm font-normal leading-none">To manage your plan, go to Profile page, under purchase and select manage.</div> */}
    </div>

    <div className={cn([
      'tablet:w-[548px] w-[334px]',
      'tablet:px-4 px-0',
      'mt-[56px] mx-auto',
    ])}>
      {/* <label className="flex items-center gap-x-2 cursor-pointer">
        <Checkbox checked={isChecked} onCheckedChange={() => setIsChecked(!isChecked)} />
        <div className="text-center text-black text-xs font-normal leading-none select-none">
          I have read and agree the above terms and conditions
        </div>
      </label> */}
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