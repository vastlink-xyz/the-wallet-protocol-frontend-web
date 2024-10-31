import { cn, log } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Tag } from '@/pages/marketplace/components/ProductCard/Tag';
import { IProduct, PurchasedProduct } from "@/pages/marketplace/types";
import { useNavigate } from "react-router-dom";
import { PairContextType } from "@/providers/WalletConnectPairProvider";
import { useWalletConnectPair } from "@/providers/WalletConnectPairProvider";
import api from "@/lib/api";
import { useMarketplace } from '@/providers/MarketplaceProvider';

type ProductCardProps = (IProduct | PurchasedProduct) & {
  className?: string;
  activedPurchasedProductIds: string[];
  handleRampOpenModal: (product: IProduct) => void;
  selectedCategory?: string;
}

export function ProductCard({
  className,
  activedPurchasedProductIds,
  handleRampOpenModal,
  selectedCategory,
  ...product
}: ProductCardProps) {
  const navigate = useNavigate()
  const {
    setIsModalOpen,
    setDappInfo,
    isConnected,
    setDisplayUriInput,
  } = useWalletConnectPair() as PairContextType
  const { checkNewProducts } = useMarketplace();

  const checkPurchaseStatus = (product: IProduct) => {
    const exist = activedPurchasedProductIds.some(p => p === product.id)
    if (exist) {
      return 'active'
    }
    return ''
  }

  const handleClick = async () => {
    if (checkPurchaseStatus(product) !== 'active') {
      navigate(`/marketplace/feature-detail/${product.id}`)
      return
    }
    
    // mark as viewed
    if ((product as PurchasedProduct).unread) {
      try {
        await api.post('/user/products/mark-as-viewed', {
          productId: product.id
        });
        await checkNewProducts();
      } catch (err) {
        console.error('Failed to mark product as viewed:', err);
      }
    }

    // product flow
    if (product.products && product.followOrder) {
      const params = new URLSearchParams()
      params.set('flowId', product.id)
      params.set('flowIndex', '0')
      navigate(`${product.serviceUrl}?${params.toString()}`)
      return
    }

    // wallet connect
    if (product.integrationPoints.includes('walletconnect')) {
      if (isConnected) {
        window.open(product.serviceUrl, '_blank')
      } else {
        setDappInfo({
          name: product.name,
          url: product.serviceUrl,
        })
        setDisplayUriInput(false)
        setIsModalOpen(true)
      }
      return
    }

    // payment Moonpay
    if (product.vendor === 'Moonpay') {
      handleRampOpenModal(product)
      return
    }

    if (product.serviceUrl.startsWith('http')) {
      // open in new tab
      window.open(product.serviceUrl, '_blank')
    } else if (product.serviceUrl.startsWith('/')) {
      // navigate to the product page
      navigate(product.serviceUrl)
    }
  }

  return (
    <div
      className={cn([
        'laptop:w-[392px] tablet:w-[346px] mobile:w-[346px] w-[346px]',
        'h-[200px] p-5 bg-white rounded-[20px] border-[1.5px] border-[#ebebeb] relative overflow-hidden',
        'hover:border-[#111111] cursor-pointer',
        className
      ])}
      onClick={() => handleClick()}
    >
      {/* featured or free tag */}
      {product.isFeatured ? <Tag variant="featured" /> : product.price === 0 && <Tag variant="free" />}

      {/* logo and title */}
      <div className="justify-start items-center gap-4 inline-flex mb-5">
        <img src={product.logoUrl} alt={product.name} className="w-[52px] h-[52px] object-contain rounded-full" />
        <div className="flex-col justify-center items-start inline-flex">
          <div className="text-[#111111] text-base font-bold leading-normal">{product.name}</div>
          <div className="h-4 p-0.5 bg-[#f2f2f2] rounded-sm justify-center items-center gap-2.5 inline-flex">
            <div className="text-[#4f4f4f] text-[10px] font-normal leading-none">{product.category}</div>
          </div>
        </div>
      </div>

      {/* description */}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="self-stretch max-h-[32px] text-[#828282] text-sm font-normal leading-4 line-clamp-2">
              {product.description}
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p className="max-w-[300px] break-words">{product.description}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      {/* developer */}
      <div className="h-4 flex items-center mt-1 mb-5">
        <span className="text-[#979797] text-sm font-normal inline-block mr-1">Developer:</span>
        <span
          className="text-black text-sm font-bold underline cursor-pointer"
          onClick={() => {
            window.open(product.website, '_blank')
          }}
        >
          {product.vendor}
        </span>
      </div>

      {/* price */}
      <div className="absolute bottom-5 right-5 h-4 flex items-center">
        {/* added */}
        {
          selectedCategory === 'Added' && (
            <span className="text-[#c4c4c4] text-sm font-medium leading-none inline-block mr-[10px]">Added</span>
          )
        }
        <span className="text-[#979797] text-sm font-medium leading-none">Price: </span>
        {/* original price */}
        {
          product.discount && (
            <>
              <span className="text-[#979797] text-sm font-normal line-through leading-none">{product.price} V</span>
            </>
          )
        }
        {/* discounted price */}
        <span className="text-[#111111] text-base font-bold leading-none ml-1">
          {product.discount ? product.price * (product.discount / 100) : product.price} V 
        </span>
        {/* discount */}
        {product.discount && (
          <div className="ml-1 h-4 px-2 py-[5px] bg-black/5 rounded-[54px] justify-center items-center gap-2.5 inline-flex">
            <div className="text-center text-black text-xs font-medium leading-none">-{100 - product.discount}%</div>
          </div>
        )}
      </div>
    </div>
  );
}
