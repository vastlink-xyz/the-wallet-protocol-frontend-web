import { DEFAULT_PAGE_SIZE } from '@/components/Pagination/usePagination';
import api from '@/lib/api';
import { handleError } from '@/lib/utils';
import { LoaderFunction } from 'react-router-dom';

export const marketplaceLoader: LoaderFunction = async () => {
  try {
    const res = await api.post('/marketplace/product/search-products', {
      page: 1,
      pageSize: DEFAULT_PAGE_SIZE,
    });
    return {
      products: res.data.products,
      total: res.data.total,
    };
  } catch (err) {
    const errorInfo = handleError(err);
    throw new Error(errorInfo.message);
  }
};
