import { cn } from "@/lib/utils";
import { IProduct } from "@/pages/marketplace/types";

export function UserProductList({
  products,
}: {
  products: IProduct[]
}) {
  return (
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
        >
          <img className="w-[52px] h-[52px] mx-auto" src={product.logoUrl} alt={product.name} />
          <p className="text-sm text-[#111111] truncate" title={product.name}>{product.name}</p>
        </div>
      ))}
    </div>
  )
}
