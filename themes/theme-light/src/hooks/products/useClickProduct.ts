import { useNavigate } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';
import { useMarketplace } from '@/providers/MarketplaceProvider';
import { IProduct } from '@/pages/marketplace/types';
import api from '@/lib/api';
import { useWalletConnect } from '@/providers/WalletConnectProvider';

interface UseProductProps {
  activedPurchasedProductIds: string[];
  handleRampOpenModal: (product: IProduct) => void;
}

export const useClickProduct = ({
  activedPurchasedProductIds,
  handleRampOpenModal,
}: UseProductProps) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  
  const {
    setIsModalOpen,
    setDappInfo,
    isConnected,
    setDisplayUriInput,
  } = useWalletConnect()
  const { checkNewProducts } = useMarketplace();

  const checkPurchaseStatus = (product: IProduct) => {
    const exist = activedPurchasedProductIds.some(p => p === product.id);
    return exist ? 'active' : '';
  };

  const handleClick = async (product: IProduct) => {
    // user has not purchased this product
    if (checkPurchaseStatus(product) !== 'active') {
      navigate(`/marketplace/feature-detail/${product.id}`)
      return
    }

    // mark as viewed & update last used date
    try {
      await api.post('/user/products/update-usage-status', {
        productId: product.id
      });
      // invalidate and refetch user info
      await queryClient.invalidateQueries({ queryKey: ['userInfo'] })
      await checkNewProducts();
    } catch (err) {
      console.error('Failed to mark product as viewed:', err);
    }

    // product flow
    if (product.products && product.followOrder) {
      const params = new URLSearchParams()
      params.set('flowId', product.id)
      params.set('flowIndex', '0')
      navigate(`${product.serviceUrl}?${params.toString()}`);
      return
    }

    // wallet connect
    if (product.integrationPoints.includes('walletconnect')) {
      if (isConnected) {
        window.open(product.serviceUrl, '_blank')
      } else {
        setDappInfo({
          name: product.name,
          url: product.serviceUrl,
        })
        setDisplayUriInput(false)
        setIsModalOpen(true)
      }
      return
    }

    // payment Moonpay
    if (product.vendor === 'Moonpay') {
      handleRampOpenModal(product)
      return
    }

    // switch theme
    if (product.integrationPoints.includes('theme')) {
      // refresh to the new url
      window.location.href = product.serviceUrl;
      return
    }

    if (product.category === 'Security') {
      window.open(product.website, '_blank')
      return
    }

    if (product.serviceUrl.startsWith('http')) {
      // open in new tab
      window.open(product.serviceUrl, '_blank')
    } else if (product.serviceUrl.startsWith('/')) {
      // navigate to the product page
      navigate(product.serviceUrl)
    }
  }

  return {
    handleClick,
    checkPurchaseStatus,
  };
};
