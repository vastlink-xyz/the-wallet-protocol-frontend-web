'use client'

import axios from 'axios'
import { useTranslations } from 'next-intl';
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
  handlePurchaseOpenModal,
  handleSkinOpenModal,
  tab,
}: {
  productItem: any;
  purchasedProducts: any[];
  onReloadData: () => void;
  handlePurchaseOpenModal: (event: any, product: any) => void;
  handleSkinOpenModal: (product: any) => void;
  tab: 'all' | 'purchased';
}) {
  const t = useTranslations('/marketplace.productCard');

  const p = productItem
  const {
    setIsModalOpen,
    setDappInfo,
    isConnected,
    setDisplayUriInput,
  } = useWalletConnectPair() as PairContextType
  const toastId = useRef<Id>();
  const [loading, setLoading] = useState(false)
  const { setTheme, theme } = useTheme()

  const statusBadge = (status: string) => {
    if (status === 'active') {
      return <Badge className="bg-green-400 hover:bg-green-400 h-8 text-white">{t('status.active')}</Badge>
    }
    return <Badge variant={'destructive'} className="h-8 text-white">{t('status.deleted')}</Badge>
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

    // skin category
    if (p.category === 'Theme' && checkPurchaseStatus(p) === 'active') {
      log('skin')
      handleSkinOpenModal(true)
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
        <h2 className="text-lg font-semibold">{t('deleteConfirmation.title')}</h2>
        <p className="mt-2">{t('deleteConfirmation.message')}</p>
        <div className="mt-4 flex justify-end">
          <Button 
            className="mr-2 px-4 py-2" 
            variant={'ghost'}
            onClick={() => {
              toast.dismiss(toastId.current)
            }}
          >
            {t('deleteConfirmation.cancel')}
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
                t('deleteConfirmation.confirm')
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
          // delete skin
          await deleteCustomSkin()
          window.location.reload()
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

  const deleteCustomSkin = async () => {
    const {
      authenticatedHeader,
      desUsername,
    } = auth.all()
    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_WALLET_PROTOCAL_API_BASEURL}/marketplace/product/customskin/delete`, {}, {
        headers: {
          "Content-Type": "application/json",
          "X-Encrypted-Key": `${authenticatedHeader["X-Encrypted-Key" as keyof typeof authenticatedHeader]}`,
          "X-Scope-Id": `${authenticatedHeader["X-Scope-Id" as keyof typeof authenticatedHeader]}`,
          "X-Encrypted-User": `${authenticatedHeader["X-Encrypted-User" as keyof typeof authenticatedHeader]}`,
          "X-Encrypted-Session": `${authenticatedHeader["X-Encrypted-Session" as keyof typeof authenticatedHeader]}`,
          "X-Passport-Username": `${desUsername.username}`,
        },
      })
    } catch(err) {
      const message = (err as any)?.response?.data
      if (message) {
        toast.error(message)
      }
    }
  }

  return (
    <div
      key={p.id}
      className={cn(
        "bg-card rounded-lg shadow-md shadow-card overflow-hidden flex flex-col h-full",
        tab === 'purchased' && checkPurchaseStatus(p) === 'deleted' ? 'opacity-40' : '',
      )}
    >
      {/* image part */}
      <div
        className={cn(
          "w-full bg-white relative px-4 aspect-square flex items-center justify-center cursor-pointer group"
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
            <h2 className="font-bold text-primary text-lg mb-2 w-fit cursor-pointer hover:underline" onClick={() => handleClick(p)}>{p.name}</h2>
          )
        }
        {
          tab === 'purchased' && (
            <div className="flex justify-between">
              <h2 className="font-bold text-primary text-lg mb-2 w-fit cursor-pointer hover:underline" onClick={() => handleClick(p)}>{p.name}</h2>
              {statusBadge(p.status)}
            </div>
          )
        }

        {/* product description */}
        <p className="text-primary opacity-80 text-base mb-2 flex-grow">{p.description}</p>

        {/* price */}
        {
          tab === 'all' && (
            <div className="flex items-center justify-start mb-4">
              <p className="text-primary text-sm font-medium mr-2">{t('price')}: </p>
              <p className="text-brand-foreground">
                <span className="text-lg font-extrabold text-brand-foreground inline-block mr-[4px]">{p.price}</span>
                <span className="font-medium text-sm">{t('currency')}</span>
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
                  <p className="text-sm text-primary">
                    {t('purchased')}: {format(p.purchaseDate, 'yyyy-MM-dd HH:mm:ss')}
                  </p>
                ) : (
                  <p className="text-sm text-destructive mt-1">
                    {t('deleted')}: {format(p.deleteDate, 'yyyy-MM-dd HH:mm:ss')}
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
              "w-full",
            )}
            onClick={(e) => handlePurchaseOpenModal(e, p)}
            disabled={checkPurchaseStatus(p) === 'active'}
          >
            {
              checkPurchaseStatus(p) === 'active' 
                ? t('buttons.purchased')
                : t('buttons.purchase')
            }
          </Button>

          <Button
            variant={'outline'}
            className={cn(
              "w-full bg-transparent text-primary",
              checkPurchaseStatus(p) === 'deleted' && 'hidden'
            )}
            disabled={checkPurchaseStatus(p) === 'deleted' || checkPurchaseStatus(p) === ''}
            onClick={(e) => handleDelete(e, p)}
          >
            {
              checkPurchaseStatus(p) === 'deleted' 
                ? t('buttons.deleted')
                : t('buttons.delete')
            }
          </Button>
        </div>
      </div>

    </div>
  )
}
