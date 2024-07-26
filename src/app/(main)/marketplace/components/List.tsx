'use client'

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import axios from 'axios'
import { log } from "@/lib/utils"

export function List() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    (async function() {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_WALLET_PROTOCAL_API_BASEURL}/marketplace/products`)
      setProducts(res.data)
    })();
  }, [])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Marketplace</h1>

      <div className="grid gap-6 " style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
        {
          products.map((p: any) => {
            return (
              <div key={p.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
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
                    <Button className="w-full bg-warm-flame">Buy</Button>
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
    </div>
  )
}
