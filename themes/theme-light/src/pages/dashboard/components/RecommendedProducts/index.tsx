import { DEFAULT_PAGE_SIZE } from "@/components/Pagination/usePagination";
import { Button } from "@/components/ui/button";
import { useSearchProducts } from "@/hooks/products/useSearchProducts";
import { cn } from "@/lib/utils";
import { ProductCard } from "@/pages/marketplace/components/ProductCard";
import { useNavigate } from "react-router-dom";

export function RecommendedProducts({
  className,
}: {
  className?: string
}) {
  const { data: productsData, isFetched } = useSearchProducts({
    page: 1,
    pageSize: DEFAULT_PAGE_SIZE,
    isRecommended: true,
  })

  const navigate = useNavigate()

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
        {(productsData?.products ?? []).map((product) => (
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
