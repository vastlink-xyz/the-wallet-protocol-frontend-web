import { log } from '@/lib/utils';
import { useState } from 'react';

interface PaginationState {
  current: number;
  total: number;
  pageSize: number;
}

interface UsePaginationProps {
  total?: number;
  pageSize?: number;
}

export function usePagination({ 
  total = 0, 
  pageSize = 30 
}: UsePaginationProps = {}) {
  const [pagination, setPagination] = useState<PaginationState>({
    current: 1,
    total: total,
    pageSize: pageSize
  });

  const handlePageChange = (page: number) => {
    log('handlePageChange', page);
    setPagination(prev => ({
      ...prev,
      current: page
    }));
  };

  const updateTotal = (newTotal: number) => {
    setPagination(prev => ({
      ...prev,
      total: newTotal
    }));
  };

  const updatePageSize = (newPageSize: number) => {
    setPagination(prev => ({
      ...prev,
      pageSize: newPageSize,
      // reset to first page, when page size changed
      current: 1
    }));
  };

  return {
    pagination,
    handlePageChange,
    updateTotal,
    updatePageSize
  };
}
