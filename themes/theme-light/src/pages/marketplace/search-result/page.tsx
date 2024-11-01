import { useSearchParams } from 'react-router-dom';
import { Breadcrumb } from "@/components/Breadcrumb";
import { SearchInput } from '@/pages/marketplace/components/SearchInput';
import { ProductList } from '@/pages/marketplace/components/ProductList';
import { useCallback, useEffect, useState } from 'react';
import { IProduct } from '@/pages/marketplace/types';
import api from '@/lib/api';
import { ContentContainer } from '@/components/ContentContainer';
import { Loading } from '@/components/Loading';
import { cn, handleError } from '@/lib/utils';
import { toast } from 'react-toastify';
import { Empty } from '@/components/Empty';
import { Back } from '@/components/Back';

const emptyText = 'We couldn’t find what you’re looking for. Try using different keywords or explore other options.'
const imgSrc = '/imgs/icons/empty_search.png'

export default function SearchResultPage() {
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState<IProduct[]>([]);
  const searchKeyword = searchParams.get('search') || '';

  const handleSearch = useCallback(async (value: string) => {
    try {
      setLoading(true);
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
  }, []);

  useEffect(() => {
    if (searchKeyword) {
      handleSearch(searchKeyword);
    }
  }, [searchKeyword]);

  return (
    <div>
      <ContentContainer className="relative">
        {/* back button on mobile */}
        <Back className={cn([
          'mb-[16px] mt-[20px]',
          'tablet:hidden',
        ])} />

        {/* back button on desktop */}
        <Back className={cn([
          'absolute top-[16px] left-[0px]',
          'tablet:block hidden',
        ])} />

        <SearchInput
          className={cn([
            'mb-[52px]',
            'tablet:mx-auto tablet:mt-[60px]',
          ])}
          onSearch={handleSearch}
          defaultValue={searchKeyword}
        />

        <ProductList
          loading={loading}
          products={products}
          empty={<Empty className="mt-[96px] mx-auto" text={emptyText} imgSrc={imgSrc} />}
        />
      </ContentContainer>
    </div>
  );
}
