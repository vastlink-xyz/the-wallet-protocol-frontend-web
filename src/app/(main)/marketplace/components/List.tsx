'use client'

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import axios from 'axios'
import { auth, cn, log } from "@/lib/utils"
import { PurchaseModal } from "./PurchaseModal"
import { TokenFactory } from "@/services/TokenService"
import { Address } from "viem"

export function List() {
  const [products, setProducts] = useState([])
  const [purchasedProductIds, setPurchasedProductIds] = useState<string[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [product, setProduct] = useState({})
  const [balance, setBalance] = useState('')

  useEffect(() => {
    const addr = auth.all().address
    setTVWTBalanceByAddress(addr)

    getProducts()
    getPurchasedProducts()
  }, [])
  
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
    const ids = res.data.map((p: any) => p.id)
    setPurchasedProductIds(ids)
  }
  
  const getProducts = async () => {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_WALLET_PROTOCAL_API_BASEURL}/marketplace/products`)
    setProducts(res.data)
  }

  const setTVWTBalanceByAddress = async (address: Address) => {
    const b = await TokenFactory.getInstance().createToken('TVWT').getBalance(address)
    setBalance(b)
  }

  const handleOpenModal = (product: any) => {
    if (purchasedProductIds.includes(product.id)) {
      return
    }
    setIsOpen(true)
    setProduct(product)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Marketplace</h1>

      <div className="grid gap-6 " style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
        {
          products.map((p: any) => {
            return (
              <div
                key={p.id}
                className={cn(
                  "bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full",
                )}
                onClick={() => handleOpenModal(p)}
              >
                <div
                  className="w-full relative px-4 bg-black aspect-square flex items-center justify-center"
                >
                  <img src={p.logoUrl} className="object-cover" alt="Image" />
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
                        purchasedProductIds.includes(p.id) && 'cursor-default'
                      )}
                      onClick={() => handleOpenModal(p)}
                      disabled={purchasedProductIds.includes(p.id)}
                    >
                      {
                        purchasedProductIds.includes(p.id) ? (
                          'Purchased'
                        ) : (
                          'Purchase'
                        )
                      }
                    </Button>
                    <Button
                      variant={'outline'}
                      className="w-full text-warm-foreground border-warm-foreground bg-white hover:bg-white hover:text-warm-foreground"
                    >
                      Delete
                    </Button>
                  </div>
                </div>

              </div>
            )
          })
        }
      </div>

      <PurchaseModal isOpen={isOpen} onClose={() => setIsOpen(false)} product={product} balance={balance} />
    </div>
  )
}
