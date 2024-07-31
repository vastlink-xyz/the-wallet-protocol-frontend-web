'use client'

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import axios from 'axios'
import { auth, cn, log } from "@/lib/utils"
import { format } from 'date-fns';
import { Badge } from "@/components/ui/badge"

export function PurchasedList() {
  const [purchasedProducts, setPurchasedProducts] = useState<any[]>([])

  useEffect(() => {
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
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
