'use client'

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import axios from 'axios'
import { auth, cn, log } from "@/lib/utils"
import { format } from 'date-fns';
import { Badge } from "@/components/ui/badge"
import { Id, toast } from "react-toastify"
import { PurchaseModal } from "./PurchaseModal"
import { TokenFactory } from "@/services/TokenService"
import { Address } from "viem"
import { PairContextType, useWalletConnectPair } from "@/providers/WalletConnectPairProvider"

export function PurchasedList() {
  const [purchasedProducts, setPurchasedProducts] = useState<any[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [product, setProduct] = useState({})
  const [balance, setBalance] = useState('')
  const [loading, setLoading] = useState(false)
  const toastId = useRef<Id>();

  const {
    setIsModalOpen,
    setDappInfo,
    isConnected,
  } = useWalletConnectPair() as PairContextType

  useEffect(() => {
    refreshTVWTBalance()

    getPurchasedProducts()
  }, [])

  const handlePurchaseModalClose = (isSave: boolean) => {
    log('handle close call')
    setIsOpen(false)
    if (isSave) {
      getPurchasedProducts()
      refreshTVWTBalance()
    }
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
        getPurchasedProducts()
        refreshTVWTBalance()
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
    // const list = res.data
    const list = [
      ...res.data,
    ]
    log('list', list)
    setPurchasedProducts(list)
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

  const statusBadge = (status: string) => {
    if (status === 'active') {
      return <Badge className="bg-green-400 h-8">Actived</Badge>
    }
    return <Badge variant={'destructive'} className="h-8">Deleted</Badge>
  }

  return (
    <div className="mx-auto px-4 py-8">
      {/* <h1 className="text-3xl font-bold mb-8">Marketplace</h1> */}

      <div className="grid grid-flow-row gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {
          purchasedProducts.map((p: any) => {
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
                </div>

                <div className="p-4 flex flex-col flex-grow">
                  <div className="flex justify-between">
                    <h2 className="font-bold text-lg mb-2">{p.name}</h2>
                    {
                      statusBadge(p.status)
                    }
                  </div>
                  <p className="text-gray-700 text-base mb-2 flex-grow">{p.description}</p>

                  <div className="mt-4 pt-4 border-t border-gray-200">
                    {
                      p.status === 'active' ? (
                        <p className="text-sm text-gray-600">
                          Purchased: {format(p.purchaseDate, 'yyyy-MM-dd HH:mm:ss')}
                        </p>
                      ) : (
                        <p className="text-sm text-red-500 mt-1">
                          Deleted: {format(p.deleteDate, 'yyyy-MM-dd HH:mm:ss')}
                        </p>
                      )
                    }
                  </div>
                </div>

                <div className="flex justify-between items-center space-x-2 m-4">
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
            )
          })
        }
      </div>

      <PurchaseModal isOpen={isOpen} onClose={(isSave) => handlePurchaseModalClose(isSave)} product={product} balance={balance} />
    </div>
  )
}
