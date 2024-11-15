import { Button } from "@/components/ui/button";
import api from "@/lib/api";
import { cn } from "@/lib/utils";
import { ProductCard } from "@/pages/marketplace/components/ProductCard";
import { IProduct } from "@/pages/marketplace/types";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function RecommendedProducts({
  className,
}: {
  className?: string
}) {
  const navigate = useNavigate()
  const [products, setProducts] = useState<IProduct[]>([])

  useEffect(() => {
    init()
  }, [])

  const init = async () => {
    const res = await api.get('/marketplace/product/recommend-products')
    setProducts(res.data)
  }

  return (
    <div className={cn(
      className,
    )}>
      {/* title */}
      <div className={cn(
        'flex items-center justify-between flex-wrap',
        'mb-[24px]',
      )}>
        <div>
          <p className={cn(
            'text-[#111111] font-bold leading-tight',
            'text-2xl tablet:text-[32px]'
          )}>Recommended Products</p>
          <p className={cn(
            'text-[#828282] leading-none text-sm mt-[8px]',
          )}>Tailor your own decentralized tools</p>
        </div>
        <Button className="py-[10px] hidden tablet:block" onClick={() => {
          navigate('/marketplace')
        }}>
          Explore more features
        </Button>
      </div>

      {/* product list */}
      <div className={cn([
        'flex flex-wrap mx-auto',
        'desktop:w-[1224px] laptop:w-[816px] tablet:w-[720px] w-[346px]',
        'desktop:gap-x-6 laptop:gap-x-8 tablet:gap-x-6'
      ])}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            {...product}
            activedPurchasedProductIds={[]}
            handleRampOpenModal={() => {}}
            selectedCategory={''}
            className="mobile:mb-[40px] mb-6"
          />
        ))}
      </div>
    </div>
  )
}
