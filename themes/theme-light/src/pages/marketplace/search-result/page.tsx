import { useSearchParams } from 'react-router-dom';
import { Breadcrumb } from "@/components/Breadcrumb";
import { SearchInput } from '@/pages/marketplace/components/SearchInput';
import { ProductList } from '@/pages/marketplace/components/ProductList';
import { useCallback, useEffect, useState } from 'react';
import { IProduct } from '@/pages/marketplace/types';
import api from '@/lib/api';
import { ContentContainer } from '@/components/ContentContainer';
import { Loading } from '@/components/Loading';
import { handleError } from '@/lib/utils';
import { toast } from 'react-toastify';
import { Empty } from '@/components/Empty';

const emptyText = 'We couldn’t find what you’re looking for. Try using different keywords or explore other options.'
const imgSrc = '/imgs/icons/empty_search.png'

export default function SearchResultPage() {
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState<IProduct[]>([]);
  const searchKeyword = searchParams.get('search') || '';

  const handleSearch = useCallback(async (value: string) => {
    try {
      setLoading(true);
      setSearchParams({ search: value });
      const res = await api.post('/marketplace/product/search-products', {
        keyword: value,
      });
      setProducts(res.data.products);
    } catch (err) {
      const errorInfo = handleError(err);
      toast.error(errorInfo.message);
    } finally {
      setLoading(false);
    }
  }, [setSearchParams]);

  useEffect(() => {
    if (searchKeyword) {
      handleSearch(searchKeyword);
    }
  }, [searchKeyword]);

  return (
    <div>
      <Breadcrumb
        primaryRoute={{
          path: '/marketplace',
          name: 'Marketplace',
        }}
        secondaryRoute={{
          name: 'Search results',
        }}
      />

      {loading && <Loading />}

      <ContentContainer>
        <SearchInput
          className="mb-[52px] mt-[24px] mx-auto"
          onSearch={handleSearch}
          defaultValue={searchKeyword}
        />

        <ProductList
          products={products}
          empty={<Empty className="mt-[96px] mx-auto" text={emptyText} imgSrc={imgSrc} />}
        />
      </ContentContainer>
    </div>
  );
}
