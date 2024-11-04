// kkktodo

import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { cn, handleError } from "@/lib/utils"
import { format } from 'date-fns';
import { Badge } from "@/components/ui/badge"
import { Id, toast } from "react-toastify"
import { PairContextType, useWalletConnectPair } from "@/providers/WalletConnectPairProvider"
// import { CategoryBadge } from "@/components/CategoryBadge"
import { LogoLoading } from "@/components/LogoLoading";
import { useNavigate } from "react-router-dom";
import api from '@/lib/api';
import { useTranslation } from 'react-i18next';

export function ProductCard({
  productItem,
  purchasedProducts,
  onReloadData,
  handlePurchaseOpenModal,
  handleRampOpenModal,
  tab,
}: {
  productItem: any;
  purchasedProducts: any[];
  onReloadData: () => void;
  handlePurchaseOpenModal: (event: any, product: any) => void;
  handleRampOpenModal: (product: any) => void;
  tab: 'all' | 'purchased';
}) {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const p = productItem
  const {
    setIsModalOpen,
    setDappInfo,
    isConnected,
    setDisplayUriInput,
  } = useWalletConnectPair() as PairContextType
  const toastId = useRef<Id>();
  const [loading, setLoading] = useState(false)

  const statusBadge = (status: string) => {
    if (status === 'active') {
      return <Badge className="bg-green-400 hover:bg-green-400 h-8 text-white">{t('/marketplace.productCard.status.active')}</Badge>
    }
    return <Badge variant={'destructive'} className="h-8 text-white">{t('/marketplace.productCard.status.deleted')}</Badge>
  }

  const checkPurchaseStatus = (product: any) => {
    const p = purchasedProducts.find(p => p.productId === product.id)
    if (p) {
      return p.status
    }
    return ''
  }

  const handleClick = (p: any) => {
    // product flow
    if (p.products && p.followOrder && checkPurchaseStatus(p) === 'active') {
      const params = new URLSearchParams()
      params.set('flowId', p.id)
      params.set('flowIndex', '0')
      navigate(`${p.serviceUrl}?${params.toString()}`)
      return
    }

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

    // payment
    if (p.category === 'Payment' && checkPurchaseStatus(p) === 'active') {
      handleRampOpenModal(p)
      return
    }

    // multisig
    if (p.category === 'Team' && checkPurchaseStatus(p) === 'active') {
      navigate('/marketplace/multisig-setting')
      return
    }

    // kyb / kyc
    if (p.category === 'Compliance' && !p.products && checkPurchaseStatus(p) === 'active') {
      navigate(p.serviceUrl)
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
        <h2 className="text-lg font-semibold">{t('/marketplace.productCard.deleteConfirmation.title')}</h2>
        <p className="mt-2">{t('/marketplace.productCard.deleteConfirmation.message')}</p>
        <div className="mt-4 flex justify-end">
          <Button 
            className="mr-2 px-4 py-2" 
            variant={'ghost'}
            onClick={() => {
              toast.dismiss(toastId.current)
            }}
          >
            {t('/marketplace.productCard.deleteConfirmation.cancel')}
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
                t('/marketplace.productCard.deleteConfirmation.confirm')
              )
            }
          </Button>
        </div>
      </div>,
      {
        closeOnClick: false,
        autoClose: false,
        className: 'bg-card !important',
      }
    )
  }

  const onDelete = async (product: any) => {
    try {
      setLoading(true)
      const response = await api.post('/user/deleteProducts', {
        productId: product.id,
      })
        
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
      }
    } catch(err) {
      const errorInfo = handleError(err)
      toast.error(errorInfo.message)
    } finally {
      toast.dismiss(toastId.current)
      setLoading(false)
    }
  }

  const deleteCustomSkin = async () => {
    try {
      const res = await api.post('/marketplace/product/customskin/delete')
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
          {/* <CategoryBadge categoryType={p.category} /> */}
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

        {/* price and discount */}
        {
          tab === 'all' && (
            <div className="mb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <p className="text-primary text-sm font-medium mr-2">{t('/marketplace.productCard.price')}: </p>
                  <p className="text-brand-foreground">
                    <span className="text-lg font-extrabold text-brand-foreground inline-block mr-[4px]">{p.price}</span>
                    <span className="font-medium text-sm">{t('/marketplace.productCard.currency')}</span>
                  </p>
                </div>
                {p.discount && (
                  <div className="flex items-center mt-1">
                    <p className="text-primary text-sm font-medium mr-2">{t('/marketplace.productCard.discount')}: </p>
                    <p className="text-green-500 font-medium">
                      {`${p.discount}%`}
                    </p>
                  </div>
                )}
              </div>
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
                    {t('/marketplace.productCard.purchased')}: {format(p.purchaseDate, 'yyyy-MM-dd HH:mm:ss')}
                  </p>
                ) : (
                  <p className="text-sm text-destructive mt-1">
                    {t('/marketplace.productCard.deleted')}: {format(p.deleteDate, 'yyyy-MM-dd HH:mm:ss')}
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
                ? t('/marketplace.productCard.buttons.purchased')
                : t('/marketplace.productCard.buttons.purchase')
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
                ? t('/marketplace.productCard.buttons.deleted')
                : t('/marketplace.productCard.buttons.delete')
            }
          </Button>
        </div>
      </div>

    </div>
  )
}
