import { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard/index";
import api from "@/lib/api";
import { cn, handleError, log } from "@/lib/utils";
import { toast } from "react-toastify";
import { IProduct } from "@/pages/marketplace/types";
import { RampModal } from "@/pages/marketplace/components/RampModal";

export function ProductList({
  products,
  empty,
  selectedCategory,
}: {
  products: IProduct[],
  empty: React.ReactNode,
  selectedCategory?: string
}) {
  const [activedPurchasedProductIds, setActivedPurchasedProductIds] = useState<string[]>([])
  const [isRampModalOpen, setIsRampModalOpen] = useState(false)
  const [currentProduct, setCurrentProduct] = useState({})

  useEffect(() => {
    init()
  }, [])

  const init = async () => {
    const purchasedProducts = await getPurchasedProducts()
    const activedPurchasedProductIds = purchasedProducts.filter((p: any) => p.status === 'active').map((p: any) => p.productId)
    setActivedPurchasedProductIds(activedPurchasedProductIds)
  }

  const getPurchasedProducts = async () => {
    const res = await api.get('/user/purchasedProducts')
    return res.data
  }

  const handleRampOpenModal = (product: IProduct) => {
    setIsRampModalOpen(true)
    setCurrentProduct(product)
  }

  return <>
    {products.length === 0 ? (
      empty
    ) : (
      <div className={cn([
        'flex flex-wrap mx-auto',
        'desktop:w-[1224px] laptop:w-[816px] tablet:w-[720px] w-[346px]',
        'desktop:gap-x-6 laptop:gap-x-8 tablet:gap-x-6'
      ])}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            {...product}
            activedPurchasedProductIds={activedPurchasedProductIds}
            handleRampOpenModal={handleRampOpenModal}
            selectedCategory={selectedCategory}
            className="mobile:mb-[40px] mb-6"
          />
        ))}
      </div>
    )}

    <RampModal isOpen={isRampModalOpen} onClose={() => setIsRampModalOpen(false)} product={currentProduct} />
  </>
}
