// kkktodo

import { useEffect, useState } from "react"
import { auth, cn, log } from "@/lib/utils"
// import { PurchaseModal } from "./PurchaseModal"
import { TokenFactory } from "@/services/TokenService"
import { ProductCard } from "./ProductCard/index"
import { SkeletonCards } from "./SkeletonCards"
import { RampModal } from "./RampModal"
import api from "@/lib/api"

export function List({
  tab,
}: {
  tab: 'all' | 'purchased'
}) {
  const [products, setProducts] = useState<any[]>([])
  const [purchasedProducts, setPurchasedProducts] = useState<any[]>([])

  const [isPurchaseModalOpen, setIsPurchaseModalOpen] = useState(false)
  const [isRampModalOpen, setIsRampModalOpen] = useState(false)

  const [product, setProduct] = useState({})
  const [balance, setBalance] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    onReloadData()
  }, [])

  const onReloadData = async () => {
    setLoading(true)
    await Promise.all([
      tab === 'all' ? loadAllProducts() : loadPurchasedProducts(),
      refreshTVWTBalance(),
    ])
    setLoading(false)
  }

  const loadAllProducts = async () => {
    const products = await getProducts()
    const purchasedProducts = await getPurchasedProducts()
    const deletedPurchasedProductIds = purchasedProducts.filter((p: any) => p.status === 'deleted').map((p: any) => p.id)
    const activedPurchasedProductIds = purchasedProducts.filter((p: any) => p.status === 'active').map((p: any) => p.id)
    
    log('deleteds', deletedPurchasedProductIds)
    log('active', activedPurchasedProductIds)
    const activeProducts = []
    const deletedProducts = []
    const otherProducts = []

    for (const product of products) {
      if (deletedPurchasedProductIds.includes(product.id)) {
        deletedProducts.push(product)
      } else if (activedPurchasedProductIds.includes(product.id)) {
        activeProducts.push(product)
      } else {
        otherProducts.push(product)
      }
    }

    const sortedProducts = [
      ...activeProducts,
      ...otherProducts,
      ...deletedProducts,
    ]
    setPurchasedProducts(purchasedProducts)
    setProducts(sortedProducts)
  }

  const getPurchasedProducts = async () => {
    const res = await api.get('/user/purchasedProducts')
    return res.data
  }

  const loadPurchasedProducts = async () => {
    const list = await getPurchasedProducts()
    log('list', list)
    setPurchasedProducts(list)
    setProducts(list)
  }

  const getProducts = async () => {
    const res = await api.get('/marketplace/products')
    return res.data
  }

  const refreshTVWTBalance = async () => {
    const addr = auth.all().address
    const b = await TokenFactory.getInstance().createToken('TVWT').getBalance(addr)
    setBalance(b)
  }

  const handlePurchasedOpenModal = (event: any, product: any) => {
    event.stopPropagation()
    setIsPurchaseModalOpen(true)
    setProduct(product)
  }

  const handleRampOpenModal = (product: any) => {
    setIsRampModalOpen(true)
    setProduct(product)
  }

  const handlePurchaseModalClose = (isSave: boolean) => {
    log('handle close call')
    setIsPurchaseModalOpen(false)
    if (isSave) {
      onReloadData()
    }
  }

  return (
    <div className="px-4 py-8">
      {
        loading ? (
          <SkeletonCards />
        ) : (
          <div className={cn(
            "grid grid-flow-row gap-8",
            "grid-cols-[repeat(auto-fit,minmax(320px,1fr))]",
            products.length <= 4 && 'lg:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4',
          )}>
            {/* {
              products.map((p: any) => {
                return (
                  <ProductCard
                    key={p.id}
                    tab={tab}
                    productItem={p}
                    purchasedProducts={purchasedProducts}
                    onReloadData={onReloadData}
                    handlePurchaseOpenModal={handlePurchasedOpenModal}
                    handleRampOpenModal={handleRampOpenModal}
                  />
                )
              })
            } */}
          </div>
        )
      }

      {/* <PurchaseModal isOpen={isPurchaseModalOpen} onClose={(isSave) => handlePurchaseModalClose(isSave)} product={product} balance={balance} /> */}

      <RampModal isOpen={isRampModalOpen} onClose={() => setIsRampModalOpen(false)} product={product} />
    </div>
  )
}
