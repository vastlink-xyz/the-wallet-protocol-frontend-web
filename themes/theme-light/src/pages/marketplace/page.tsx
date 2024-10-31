import { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { cn, handleError, log } from "@/lib/utils";
import { Banner } from "@/pages/marketplace/components/Banner";
import { SearchInput } from "@/pages/marketplace/components/SearchInput";
import { useTranslation } from "react-i18next";
import { ProductList } from '@/pages/marketplace/components/ProductList';
import { CategoryTabs } from "@/pages/marketplace/components/CategoryTabs";
import { Pagination } from '@/components/Pagination';
import { usePagination } from '@/components/Pagination/usePagination';
import api from '@/lib/api';
import { toast } from 'react-toastify';
import { CATEGORIES, Category, IProduct, SearchProductsParams } from '@/pages/marketplace/types';
import { Empty } from "@/components/Empty";
import { MarketplaceProvider } from '@/providers/MarketplaceProvider';
import { ScrollToTop } from '@/components/ScrollToTop';

// kkktodo
const DEFAULT_PAGE_SIZE = 30;
const emptyText = 'It looks like you haven’t added any items yet. Head over to the marketplace and discover new products and features to add!'


export default function MarketplacePage() {
  const { t } = useTranslation()
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [products, setProducts] = useState<IProduct[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<Category>(CATEGORIES[0]);
  const {
    pagination,
    handlePageChange,
    updateTotal,
    updatePageSize,
  } = usePagination();

  const searchProducts = useCallback(async (params: SearchProductsParams) => {
    try {
      setLoading(true);
      const res = await api.post('/marketplace/product/search-products', params);
      setProducts(res.data.products);
      updateTotal(res.data.total);
    } catch (err) {
      const errorInfo = handleError(err);
      toast.error(errorInfo.message);
    } finally {
      setLoading(false);
    }
  }, [updateTotal]);  // Only depend on updateTotal

  useEffect(() => {
    // Set page size only once when component mounts
    updatePageSize(DEFAULT_PAGE_SIZE);

    // Initial search
    const p: SearchProductsParams = {
      page: 1,
      pageSize: DEFAULT_PAGE_SIZE,
    }
    searchProducts(p);
  }, []);

  const handleCategorySelect = async (value: Category) => {
    setSelectedCategory(value);
    const p: SearchProductsParams = {
      page: 1,
      pageSize: DEFAULT_PAGE_SIZE,
    };
    if (value === 'Free') {
      p.freeOnly = true;
    } else if (value === 'Most popular') {
      p.sortBy = 'popular';
    } else if (value === 'Latest') {
      p.sortBy = 'latest';
    } else if (value === 'Added') {
      p.installedOnly = true;
    } else {
      // other categories
      p.category = value;
    }
    searchProducts(p);
  };

  const handleSearch = (value: string) => {
    console.log("Search value:", value);
    navigate(`/marketplace/search-result?search=${value}`);
  };

  const onPageChange = (page: number) => {
    handlePageChange(page);
    searchProducts({
      page,
      pageSize: DEFAULT_PAGE_SIZE,
    });
  }

  return <MarketplaceProvider>

    <div className={cn([
      'desktop:w-[1224px] laptop:w-[936px] tablet:w-[720px] w-[346px]',
      'mx-auto pb-12'
    ])}>

      <SearchInput
        className="my-[52px] mx-auto"
        onSearch={handleSearch}
      />

      <Banner />

      {/* Title outside of sticky container */}
      <div className={cn([
        'mt-[60px] mb-[16px] text-black text-[28px] font-bold leading-[36.96px]',
        'desktop:w-[1224px] laptop:w-[816px] mx-auto'
      ])}>
        All features
      </div>

      {/* Sticky container only for tabs */}
      <div className="sticky top-[0px] bg-white z-20 mb-8">
        <CategoryTabs
          onSelect={handleCategorySelect}
          selectedValue={selectedCategory}
        />
      </div>

      <div className={cn([
        'mb-[32px] mx-auto relative',
        'desktop:w-[1224px] laptop:w-[816px]'
      ])}>

        <ProductList
          selectedCategory={selectedCategory}
          products={products}
          empty={<Empty className="mt-[96px] mx-auto" text={emptyText} />}
        />

        <div className='mt-[67px] text-center'>
          <Pagination
            {...pagination}
            onChange={onPageChange}
          />
        </div>
      </div>

      <ScrollToTop />
    </div>
  </MarketplaceProvider>
}
