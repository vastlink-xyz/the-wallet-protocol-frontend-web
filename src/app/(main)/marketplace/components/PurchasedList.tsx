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

export function PurchasedList() {
  const [purchasedProducts, setPurchasedProducts] = useState<any[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [product, setProduct] = useState({})
  const [balance, setBalance] = useState('')
  const [loading, setLoading] = useState(false)
  const toastId = useRef<Id>();

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

  const handleOpenModal = (product: any) => {
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

  const handleDelete = (product: any) => {
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

  const statusBadge = (status: string) => {
    if (status === 'active') {
      return <Badge className="bg-green-400">Actived</Badge>
    }
    return <Badge variant={'destructive'}>Deleted</Badge>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* <h1 className="text-3xl font-bold mb-8">Marketplace</h1> */}

      <div className="grid gap-6 ml-auto mr-0" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
        {
          purchasedProducts.map((p: any) => {
            return (
              <div
                key={p.id}
                className={cn(
                  "bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full max-w-sm",
                )}
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
                      onClick={() => handleOpenModal(p)}
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
                      className="w-full text-warm-foreground border-warm-foreground bg-white hover:bg-white hover:text-warm-foreground"
                      disabled={checkPurchaseStatus(p) === 'deleted' || checkPurchaseStatus(p) === ''}
                      onClick={() => handleDelete(p)}
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
