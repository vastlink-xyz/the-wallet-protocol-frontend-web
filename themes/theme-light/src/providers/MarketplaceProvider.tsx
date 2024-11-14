import { useUserInfo } from '@/hooks/user/useUserInfo';
import React, { createContext, useContext, useState, useCallback } from 'react';

interface MarketplaceContextType {
  checkNewProducts: () => Promise<void>;
  hasNewProducts: boolean;
}

const MarketplaceContext = createContext<MarketplaceContextType | undefined>(undefined);

export function MarketplaceProvider({ children }: { children: React.ReactNode }) {
  const [hasNewProducts, setHasNewProducts] = useState(false);
  const { data: userInfo } = useUserInfo()

  const checkNewProducts = useCallback(async () => {
    try {
      // const res = await api.get('/user/purchasedProducts');
      const products = userInfo?.purchasedProducts || []
      const hasNew = products.some((product) => 
        product.status === 'active' && product.unread
      );
      setHasNewProducts(hasNew);
    } catch (err) {
      console.error('Failed to check new products:', err);
    }
  }, [userInfo]);

  return (
    <MarketplaceContext.Provider value={{ checkNewProducts, hasNewProducts }}>
      {children}
    </MarketplaceContext.Provider>
  );
}

export const useMarketplace = () => {
  const context = useContext(MarketplaceContext);
  if (context === undefined) {
    throw new Error('useMarketplace must be used within a MarketplaceProvider');
  }
  return context;
};