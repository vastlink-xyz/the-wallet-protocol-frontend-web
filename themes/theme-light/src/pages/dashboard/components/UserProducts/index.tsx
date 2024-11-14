import { useEffect, useState } from 'react';
import { cn, log } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { IProduct } from '@/pages/marketplace/types';
import { useUserInfo } from '@/hooks/user/useUserInfo';
import api from '@/lib/api';
import { UserProductList } from './UserProductList';

type TabType = 'frequently' | 'added';

export function UserProducts() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState<TabType>('frequently');
  const [frequentlyUsedProducts, setFrequentlyUsedProducts] = useState<IProduct[]>([])
  const { data: userInfo } = useUserInfo()
  const [addedProducts, setAddedProducts] = useState<IProduct[]>([])

  useEffect(() => {
    if (userInfo && userInfo.purchasedProducts) {
      init()
    }
  }, [userInfo])

  const init = async () => {
    const products = await fetchAllProducts()
    const purchasedProducts = userInfo?.purchasedProducts
      .filter(p => p.status === 'active')
      .map(p => {
        const product = products.find((p2: IProduct) => p2.id === p.productId)
        return {
          ...product,
          lastUsedAt: p.lastUsedAt,
        }
      }) || []
    const frequentlyUsedProducts = purchasedProducts.filter(p => {
      if (!p.lastUsedAt) {
        return false
      }
      const lastUsedAt = new Date(p.lastUsedAt)
      const now = new Date()
      const diffTime = Math.abs(now.getTime() - lastUsedAt.getTime())
      return diffTime < 24 * 60 * 60 * 1000
    })
    setFrequentlyUsedProducts(frequentlyUsedProducts)
    setAddedProducts(purchasedProducts)
  }

  const fetchAllProducts = async () => {
    const res = await api.get('/marketplace/product/all-products')
    return res.data
  }

  return (
    <div className='mt-[80px]'>
      <div className="flex justify-between items-center border-b border-[#ebebeb]">
        {/* tabs */}
        <div className="flex items-center">
          <p
            className={cn(
              'text-[#929292] text-[22px] font-bold cursor-pointer',
              'pb-[14px] mr-[24px]',
              activeTab === 'frequently' && 'text-black border-b-2 border-black',
            )}
            onClick={() => setActiveTab('frequently')}
          >
            Frequently used
          </p>
          <p
            className={cn(
              'text-[#929292] text-[22px] font-bold cursor-pointer',
              'pb-[14px] mr-[24px]',
              activeTab === 'added' && 'text-black border-b-2 border-black',
            )}
            onClick={() => setActiveTab('added')}
          >
            Added
          </p>
        </div>

        <Button className="py-[10px] hidden tablet:block" onClick={() => {
          navigate('/marketplace')
        }}>
          Explore more features
        </Button>
      </div>

      <div className="mt-4">
        {activeTab === 'frequently' ? (
          <UserProductList products={frequentlyUsedProducts} />
        ) : (
          <UserProductList products={addedProducts} />
        )}
      </div>
    </div>
  );
}
