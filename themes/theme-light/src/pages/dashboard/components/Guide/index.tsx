import { usePurchasedProducts } from "@/hooks/products/usePurchasedProducts";
import { IProduct } from "@/pages/marketplace/types";
import { cn, log } from "@/lib/utils";
import { useWalletConnect } from "@/providers/WalletConnectProvider";
import { useNavigate } from "react-router-dom";
import { RampModal } from "@/pages/marketplace/components/RampModal";
import { useState } from "react";

function GuideContainer({
  className,
  icon,
  title,
  description,
  onClick,
}: {
  className?: string
  icon: string
  title: string
  description: string
  onClick?: () => void
}) {
  return <div
    className={cn(
      'border border-[#ebebeb] bg-[#fafafa] rounded-[20px]',
      'p-[16px] tablet:p-[40px] tablet:pb-[20px]',
      className,
    )}
    onClick={onClick}
  >
    <div className={cn(
      'block tablet:flex tablet:items-center tablet:justify-between flex-wrap',
      'tablet:h-[46px] tablet:mb-[30px] tablet:px-[20px]',
    )}>
      <div className={cn(
        'flex items-center',
        'shrink-0 min-w-fit',
        'w-[218px]',
        'mb-[12px] tablet:mb-0'
      )}>
        <img
          className={cn(
            'w-[27px] tablet:w-[37px]',
            'mr-[16px] tablet:mr-[12px]',
          )}
          src={icon}
          alt="connect-dapps"
        />
        <p className={cn(
          'text-[#111111] font-bold leading-normal',
          'text-base tablet:text-2xl',
        )}>{title}</p>
      </div>

      <p className={cn(
        'text-[#828282]',
        'text-[10px] tablet:text-sm',
        'leading-3 tablet:leading-none',
        'w-full tablet:w-[319px] laptop:w-[394px] desktop:w-[587px]',
        'mb-[10px] tablet:mb-0'
      )}>
        {description}
      </p>

      <div className={cn(
        'w-fit ml-auto tablet:ml-0 tablet:w-auto'
      )}>
        <img
          className="w-[30px] tablet:w-[44px]"
          src="/imgs/icons/arrow_right_long.svg"
          alt="arrow-right"
        />
      </div>
    </div>
  </div>
}

export function Guide() {
  const navigate = useNavigate()
  const { handleConnect } = useWalletConnect()
  const { data: purchasedProducts } = usePurchasedProducts()

  const [isRampModalOpen, setIsRampModalOpen] = useState(false)
  const [currentProduct, setCurrentProduct] = useState<IProduct | null>(null)

  const handleConnectDApps = () => {
    log('handleConnectDApps')
    handleConnect()
  }

  const handleTopUp = () => {
    const products = purchasedProducts ?? []
    // const products = purchasedProducts?.filter(p => p.vendor === 'GoPlus Labs') || []
  
    if (products.length >= 2) {
      navigate(`/marketplace?category=Added`)
      return
    }

    if (products.length === 1) {
      const moonpayProduct = products.find(p => p.vendor === 'Moonpay')
      if (moonpayProduct) {
        setCurrentProduct(moonpayProduct)
        setIsRampModalOpen(true)
      } else {
        navigate(`/marketplace?category=Added`)
      }
      return
    }

    // no product
    navigate(`/marketplace?category=Added`)
  }

  return <>
    <div>
      <p className={cn(
        'text-[#111111] font-bold leading-tight',
        'text-2xl tablet:text-[32px]',
        'mb-[24px] tablet:mb-[40px]',
      )}>Let’s get started</p>

      <GuideContainer
        icon="/imgs/icons/connect_dapps.svg"
        title="Connect dApps"
        description="Link your wallet to any dApp easily with WalletConnect. Enjoy secure access to DeFi, NFTs, and more—all from your wallet in just a few taps!"
        className="mb-[24px] cursor-pointer"
        onClick={handleConnectDApps}
      />

      <GuideContainer
        icon="/imgs/icons/top_up.svg"
        title="Top up"
        description="Transition smoothly into the web3 world with our intuitive on-ramp. Fund your wallet easily, access decentralized apps."
        className="cursor-pointer"
        onClick={handleTopUp}
      />
    </div>

    <RampModal isOpen={isRampModalOpen} onClose={() => setIsRampModalOpen(false)} product={currentProduct} />
  </>
}
