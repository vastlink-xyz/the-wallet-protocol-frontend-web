import { Breadcrumb } from '@/components/Breadcrumb';
import { ContentContainer } from '@/components/ContentContainer';
import api from '@/lib/api';
import { auth, cn, log } from '@/lib/utils';
import { Detail } from '@/pages/marketplace/feature-detail/Detail';
import { IProduct } from '@/pages/marketplace/types';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TokenFactory } from '@/services/TokenService';
import { Success } from '@/pages/marketplace/feature-detail/Success';

export default function FeatureDetailPage() {
  const { productId } = useParams<{ productId: string }>();

  const [balance, setBalance] = useState('')
  const [product, setProduct] = useState<IProduct | null>(null)
  const [showSuccess, setShowSuccess] = useState(false)

  useEffect(() => {
    init()
  }, [productId])

  const init = async () => {
    const res = await api.get(`/marketplace/product/product/${productId}`)
    setProduct(res.data)
    // refresh TVWT balance
    refreshTVWTBalance()
  }

  const refreshTVWTBalance = async () => {
    const addr = auth.all().address
    const b = await TokenFactory.getInstance().createToken('TVWT').getBalance(addr)
    setBalance(b)
  }

  const handlePurchaseSuccess = () => {
    setShowSuccess(true)
  }

  return <div>
    <ContentContainer className="laptop:w-[1000px] tablet:mt-[76px]">
      {!showSuccess ? (
        <Detail
          product={product}
          balance={balance}
          onPurchaseSuccess={handlePurchaseSuccess}
        />
      ) : (
        <Success product={product} />
      )}
    </ContentContainer>
  </div>
}
