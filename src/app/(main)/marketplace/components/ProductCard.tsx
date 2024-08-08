'use client'

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { auth, cn, log } from "@/lib/utils"
import { format } from 'date-fns';
import { Badge } from "@/components/ui/badge"
import { Id, toast } from "react-toastify"
import { PairContextType, useWalletConnectPair } from "@/providers/WalletConnectPairProvider"
import { useTheme } from "next-themes"
import { CategoryBadge } from "@/components/CategoryBadge"
import { makeAuthenticatedApiRequest } from "@/lib/utils"
import { LogoLoading } from "@/components/LogoLoading";

export function ProductCard({
  productItem,
  purchasedProducts,
  onReloadData,
  handleOpenModal,
  tab,
}: {
  productItem: any;
  purchasedProducts: any[];
  onReloadData: () => void;
  handleOpenModal: (event: any, product: any) => void;
  tab: 'all' | 'purchased';
}) {
  const p = productItem
  const {
    setIsModalOpen,
    setDappInfo,
    isConnected,
    setDisplayUriInput,
  } = useWalletConnectPair() as PairContextType
  const [isOpen, setIsOpen] = useState(false)
  const [product, setProduct] = useState({})
  const toastId = useRef<Id>();
  const [loading, setLoading] = useState(false)
  const { setTheme, theme } = useTheme()

  const statusBadge = (status: string) => {
    if (status === 'active') {
      return <Badge className="bg-green-400 h-8 text-white">Actived</Badge>
    }
    return <Badge variant={'destructive'} className="h-8 text-white">Deleted</Badge>
  }

  const checkPurchaseStatus = (product: any) => {
    const p = purchasedProducts.find(p => p.productId === product.id)
    if (p) {
      return p.status
    }
    return ''
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

  const handleDelete = (event: any, product: any) => {
    event.stopPropagation()
    toastId.current = toast(
      <div className="w-full text-primary">
        <h2 className="text-lg font-semibold">Confirm Deletion</h2>
        <p className="mt-2">Are you sure you want to delete this item?</p>
        <div className="mt-4 flex justify-end">
          <Button 
            className="mr-2 px-4 py-2" 
            variant={'ghost'}
            onClick={() => {
              toast.dismiss(toastId.current)
            }}
          >
            Cancel
          </Button>
          <Button 
            className="px-4 py-2" 
            variant={'destructive'}
            onClick={() => onDelete(product)}
            disabled={loading}
          >
            {
              loading ? (
                <LogoLoading />
              ) : (
                'Delete'
              )
            }
          </Button>
        </div>
      </div>,
      {
        closeOnClick: false,
        autoClose: false,
        theme: theme,
        className: 'bg-card !important',
      }
    )
  }

  const onDelete = async (product: any) => {
    try {
      setLoading(true)
      const response = await makeAuthenticatedApiRequest({
        path: 'user/deleteProducts',
        data: {
          productId: product.id,
        }
      })
        
      log('response', response)
      if (response.data.success) {
        toast.success(response.data.message)
        // reload data
        onReloadData()

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

  return (
    <div
      key={p.id}
      className={cn(
        "bg-white rounded-lg shadow-md shadow-card overflow-hidden flex flex-col h-full",
        tab === 'purchased' && checkPurchaseStatus(p) === 'deleted' ? 'opacity-40' : '',
      )}
      >
      {/* image part */}
      <div
        className={cn(
          "w-full relative px-4 aspect-square flex items-center justify-center cursor-pointer group",
          // 'bg-[linear-gradient(135deg,rgb(128,128,128)_0%,rgb(64,64,64)_50%,rgb(10,10,10)_100%)]'
          // 'bg-black/90',
          'bg-[#22212f]'
        )}
        onClick={() => handleClick(p)}
      >
        <img src={p.logoUrl} className="object-cover transition-transform duration-700 group-hover:scale-110" alt="Image" />
        <div className="absolute top-4 left-4">
          <CategoryBadge categoryType={p.category} />
        </div>
      </div>

      <div className="p-4 flex flex-col flex-grow">
        {/* product name */}
        {
          tab === 'all' && (
            <h2 className="font-bold text-lg mb-2">{p.name}</h2>
          )
        }
        {
          tab === 'purchased' && (
            <div className="flex justify-between">
              <h2 className="font-bold text-lg mb-2">{p.name}</h2>
              {statusBadge(p.status)}
            </div>
          )
        }

        {/* product description */}
        <p className="text-gray-700 text-base mb-2 flex-grow">{p.description}</p>

        {/* price */}
        {
          tab === 'all' && (
            <div className="flex items-center justify-start mb-4">
              <p className="text-gray-600 text-sm font-medium mr-2">Price: </p>
              <p className="text-brand-foreground">
                <span className="text-lg font-extrabold text-brand-foreground inline-block mr-[4px]">{p.price}</span>
                <span className="font-medium text-sm">TVWT</span>
              </p>
            </div>
          )
        }

        {/* purchased/deleted date */}
        {
          tab === 'purchased' && (
            <div className="my-2 pt-4">
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
          )
        }

        {/* bottom buttons */}
        <div className="flex justify-between items-center space-x-2 mt-auto">
          <Button
            className={cn(
              "w-full bg-ink text-ink-foreground hover:bg-ink/80",
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
              "w-full bg-transparent",
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
}
