'use client'

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import axios from 'axios'
import { auth, cn, log } from "@/lib/utils"
import { PurchaseModal } from "./PurchaseModal"
import { TokenFactory } from "@/services/TokenService"
import { Address } from "viem"
import { Id, toast } from "react-toastify"
import { PairContextType, useWalletConnectPair } from "@/providers/WalletConnectPairProvider"
import { useTheme } from "next-themes"
import { CategoryBadge } from "@/components/CategoryBadge"

export function List() {
  const [products, setProducts] = useState<any[]>([])
  const [purchasedProducts, setPurchasedProducts] = useState<any[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [product, setProduct] = useState({})
  const [balance, setBalance] = useState('')
  const [loading, setLoading] = useState(false)
  const toastId = useRef<Id>();

  const { setTheme } = useTheme()

  const {
    setIsModalOpen,
    setDappInfo,
    isConnected,
    setDisplayUriInput,
  } = useWalletConnectPair() as PairContextType

  useEffect(() => {
    refreshTVWTBalance()
    loadProducts()
  }, [])

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

  const checkPurchaseStatus = (product: any) => {
    const p = purchasedProducts.find(p => p.productId === product.id)
    if (p) {
      return p.status
    }
    return ''
  }

  const onDelete = async (product: any) => {
    const {
      authenticatedHeader,
      desUsername,
    } = auth.all()

    try {
      setLoading(true)
      const response = await axios.post(`${process.env.NEXT_PUBLIC_WALLET_PROTOCAL_API_BASEURL}/user/deleteProducts`, 
        {
          productId: product.id,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "X-Encrypted-Key": `${authenticatedHeader["X-Encrypted-Key" as keyof typeof authenticatedHeader]}`,
            "X-Scope-Id": `${authenticatedHeader["X-Scope-Id" as keyof typeof authenticatedHeader]}`,
            "X-Encrypted-User": `${authenticatedHeader["X-Encrypted-User" as keyof typeof authenticatedHeader]}`,
            "X-Encrypted-Session": `${authenticatedHeader["X-Encrypted-Session" as keyof typeof authenticatedHeader]}`,
            "X-Passport-Username": `${desUsername.username}`,
          },
        }
      )
      log('response', response)
      if (response.data.success) {
        toast.success(response.data.message)
        // reload data
        loadProducts()
        refreshTVWTBalance()

        // The theme product automatically changes the theme after purchase
        const p = product as any
        if (p.integrationPoints.includes('theme')) {
          setTheme('light')
        }
      } else {
        toast.error(response.data.message)
      }
    } catch(err) {
      toast.error((err as Error).message)
    } finally {
      toast.dismiss(toastId.current)
      setLoading(false)
    }
  }

  const handleDelete = (event: any, product: any) => {
    event.stopPropagation()
    toastId.current = toast(
      <div className="w-full">
        <h2 className="text-lg font-semibold">Confirm Deletion</h2>
        <p className="mt-2">Are you sure you want to delete this item?</p>
        <div className="mt-4 flex justify-end">
          <button 
            className="mr-2 px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400" 
            onClick={() => {
              toast.dismiss(toastId.current)
            }}
          >
            Cancel
          </button>
          <button 
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700" 
            onClick={() => onDelete(product)}
            disabled={loading}
          >
            {
              loading ? (
                'Deleting...'
              ) : (
                'Delete'
              )
            }
          </button>
        </div>
      </div>,
      {
        closeOnClick: false,
      }
    )
  }

  const handleClick = (p: any) => {
    // wallet connect
    if (p.integrationPoints.includes('walletconnect') && checkPurchaseStatus(p) === 'active') {
      if (isConnected) {
        window.open(p.serviceUrl, '_blank')
      } else {
        setDappInfo({
          name: p.name,
          url: p.serviceUrl,
        })
        setDisplayUriInput(false)
        setIsModalOpen(true)
      }
      return
    }

    // other types
    let url = p.website
    if (p.integrationPoints.includes("standalone") && checkPurchaseStatus(p) === 'active') {
      url = p.serviceUrl
    }
    window.open(url, '_blank')
  }

  return (
    <div className="px-4 py-8">
      {/* <h1 className="text-3xl font-bold mb-8">Marketplace</h1> */}

      <div className="grid grid-flow-row gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {
          products.map((p: any) => {
            return (
              <div
                key={p.id}
                className={cn(
                  "bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full",
                  'cursor-pointer hover:scale-105',
                  checkPurchaseStatus(p) === 'deleted' && 'opacity-40',
                )}
                onClick={() => handleClick(p)}
              >
                <div
                  className="w-full relative px-4 bg-black aspect-square flex items-center justify-center"
                >
                  <img src={p.logoUrl} className="object-cover" alt="Image" />
                  <div className="absolute top-4 left-4">
                    <CategoryBadge categoryType={p.category} />
                  </div>
                </div>

                <div className="p-4 flex flex-col flex-grow">
                  <h2 className="font-bold text-lg mb-2">{p.name}</h2>
                  <p className="text-gray-700 text-base mb-2 flex-grow">{p.description}</p>

                  <div className="flex items-center justify-start mb-4">
                    <p className="text-gray-600 text-sm font-medium mr-2">Price: </p>
                    <p className="">
                      <span className="text-lg font-bold text-warm-foreground inline-block mr-[4px]">{p.price}</span>
                      <span className="text-gray-600 font-medium text-sm">TVWT</span>
                    </p>
                  </div>

                  <div className="flex justify-between items-center space-x-2 mt-auto">
                    <Button
                      className={cn(
                        "w-full bg-warm-flame",
                      )}
                      onClick={(e) => handleOpenModal(e, p)}
                      disabled={checkPurchaseStatus(p) === 'active'}
                    >
                      {
                        checkPurchaseStatus(p) === 'active' ? (
                          'Purchased'
                        ) : (
                          'Purchase'
                        )
                      }
                    </Button>

                    <Button
                      variant={'outline'}
                      className={cn(
                        "w-full text-warm-foreground border-warm-foreground bg-white hover:bg-white hover:text-warm-foreground",
                        checkPurchaseStatus(p) === 'deleted' && 'hidden'
                      )}
                      disabled={checkPurchaseStatus(p) === 'deleted' || checkPurchaseStatus(p) === ''}
                      onClick={(e) => handleDelete(e, p)}
                    >
                      {
                        checkPurchaseStatus(p) === 'deleted' ? (
                          'Deleted'
                        ) : (
                          'Delete'
                        )
                      }
                    </Button>
                  </div>
                </div>

              </div>
            )
          })
        }
      </div>

      <PurchaseModal isOpen={isOpen} onClose={(isSave) => handlePurchaseModalClose(isSave)} product={product} balance={balance} />
    </div>
  )
}
