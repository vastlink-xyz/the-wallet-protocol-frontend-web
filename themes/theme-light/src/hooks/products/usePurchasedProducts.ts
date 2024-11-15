import { useQuery } from '@tanstack/react-query';
import api from '@/lib/api';
import { IProduct } from '@/pages/marketplace/types';

// Query key for purchased products
export const PURCHASED_PRODUCTS_KEY = ['purchased-products'] as const;

// Fetch function
const fetchPurchasedProducts = async (): Promise<IProduct[]> => {
  const response = await api.get('/user/purchasedProducts');
  return response.data;
};

export const usePurchasedProducts = () => {
  return useQuery({
    queryKey: PURCHASED_PRODUCTS_KEY,
    queryFn: fetchPurchasedProducts,
  });
};
