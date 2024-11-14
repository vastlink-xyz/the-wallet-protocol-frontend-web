import { useClickProduct } from "@/hooks/products/useClickProduct";
import { useUserInfo } from "@/hooks/user/useUserInfo";
import { cn } from "@/lib/utils";
import { RampModal } from "@/pages/marketplace/components/RampModal";
import { IProduct } from "@/pages/marketplace/types";
import { useEffect, useState } from "react";

export function UserProductList({
  products,
}: {
  products: IProduct[]
}) {
  const [activedPurchasedProductIds, setActivedPurchasedProductIds] = useState<string[]>([])
  const [isRampModalOpen, setIsRampModalOpen] = useState(false)
  const [currentProduct, setCurrentProduct] = useState({})
  const { data: userInfo } = useUserInfo()

  useEffect(() => {
    if (userInfo && userInfo.purchasedProducts) {
      const actIds = userInfo.purchasedProducts.filter((p) => p.status === 'active').map((p) => p.productId)
      setActivedPurchasedProductIds(actIds)
    }
  }, [userInfo])

  const handleRampOpenModal = (product: IProduct) => {
    setIsRampModalOpen(true)
    setCurrentProduct(product)
  }

  const { handleClick } = useClickProduct({
    activedPurchasedProductIds,
    handleRampOpenModal,
  })

  return (
    <>
      <div className={cn(
        'flex flex-wrap',
        'gap-[32px] desktop:gap-[24px]',
      )}>
        {products.map(product => (
          <div
            key={product.id}
            className={cn(
              'w-[154px] border border-[#ebebeb] rounded-2xl px-[22px] py-[22px] text-center cursor-pointer',
            )}
            onClick={() => handleClick(product)}
          >
            <img className="w-[52px] h-[52px] mx-auto" src={product.logoUrl} alt={product.name} />
            <p className="text-sm text-[#111111] truncate" title={product.name}>{product.name}</p>
          </div>
        ))}
      </div>

      <RampModal isOpen={isRampModalOpen} onClose={() => setIsRampModalOpen(false)} product={currentProduct} />
    </>
  )
}
