'use client'

import { useEffect, useRef, useState } from "react"
import axios from 'axios'
import { auth, cn, log } from "@/lib/utils"
import { PurchaseModal } from "./PurchaseModal"
import { TokenFactory } from "@/services/TokenService"
import { Id, toast } from "react-toastify"
import { useTheme } from "next-themes"
import { ProductCard } from "./ProductCard"

export function List() {
  
  const [products, setProducts] = useState<any[]>([])
  const [purchasedProducts, setPurchasedProducts] = useState<any[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [product, setProduct] = useState({})
  const [balance, setBalance] = useState('')
  const [loading, setLoading] = useState(false)
  const toastId = useRef<Id>();
  
  const { setTheme } = useTheme()
  
  useEffect(() => {
    onReloadData()
  }, [])

  const onReloadData = async () => {
    loadProducts()
    refreshTVWTBalance()
  }

  const loadProducts = async () => {
    const products = await getProducts()
    const purchasedProducts = await getPurchasedProducts()
    const deletedPurchasedProductIds = purchasedProducts.filter((p: any) => p.status === 'deleted').map((p: any) => p.id)
    const activedPurchasedProductIds = purchasedProducts.filter((p: any) => p.status === 'active').map((p: any) => p.id)
    
    log('deleteds', deletedPurchasedProductIds)
    log('active', activedPurchasedProductIds)
    let activeProducts = []
    let deletedProducts = []
    let otherProducts = []

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
    const {
      authenticatedHeader,
      desUsername,
    } = auth.all()
    const res = await axios.get(`${process.env.NEXT_PUBLIC_WALLET_PROTOCAL_API_BASEURL}/user/purchasedProducts`, {
      headers: {
        "Content-Type": "application/json",
        "X-Encrypted-Key": `${authenticatedHeader["X-Encrypted-Key" as keyof typeof authenticatedHeader]}`,
        "X-Scope-Id": `${authenticatedHeader["X-Scope-Id" as keyof typeof authenticatedHeader]}`,
        "X-Encrypted-User": `${authenticatedHeader["X-Encrypted-User" as keyof typeof authenticatedHeader]}`,
        "X-Encrypted-Session": `${authenticatedHeader["X-Encrypted-Session" as keyof typeof authenticatedHeader]}`,
        "X-Passport-Username": `${desUsername.username}`,
      },
    })
    return res.data
  }
  
  const getProducts = async () => {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_WALLET_PROTOCAL_API_BASEURL}/marketplace/products`)
    return res.data
  }

  const refreshTVWTBalance = async () => {
    const addr = auth.all().address
    const b = await TokenFactory.getInstance().createToken('TVWT').getBalance(addr)
    setBalance(b)
  }

  const handleOpenModal = (event: any, product: any) => {
    event.stopPropagation()
    setIsOpen(true)
    setProduct(product)
  }

  const handlePurchaseModalClose = (isSave: boolean) => {
    log('handle close call')
    setIsOpen(false)
    if (isSave) {
      loadProducts()
      refreshTVWTBalance()
      
      // The theme product automatically changes the theme after purchase
      const p = product as any
      if (p.integrationPoints.includes('theme')) {
        setTheme('dark')
      }
    }
  }

  return (
    <div className="px-4 py-8">
      {/* <h1 className="text-3xl font-bold mb-8">Marketplace</h1> */}

      <div className="grid grid-flow-row gap-8 grid-cols-[repeat(auto-fit,minmax(320px,1fr))]">
      {
          products.map((p: any) => {
            return (
              <ProductCard
                tab='all'
                productItem={p}
                purchasedProducts={purchasedProducts}
                onReloadData={onReloadData}
                handleOpenModal={handleOpenModal}
              />
            )
          })
        }
      </div>

      <PurchaseModal isOpen={isOpen} onClose={(isSave) => handlePurchaseModalClose(isSave)} product={product} balance={balance} />
    </div>
  )
}
