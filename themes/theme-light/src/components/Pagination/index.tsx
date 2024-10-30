import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  current: number;
  total: number;
  pageSize?: number;
  onChange?: (page: number) => void;
}

export function Pagination({ 
  current, 
  total, 
  pageSize = 30,
  onChange 
}: PaginationProps) {
  if (total === 0) return null;
  
  const totalPages = Math.ceil(total / pageSize);
  
  const renderPageNumbers = () => {
    const pages: (number | 'ellipsis')[] = [];
    const showPages = 5; // always show 5 pages
    
    if (totalPages <= showPages) {
      // if total pages less than or equal to 5, show all pages
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // always show first page
      pages.push(1);
      
      if (current <= 3) {
        // current page close to start
        for (let i = 2; i <= 4; i++) {
          pages.push(i);
        }
        pages.push('ellipsis');
        pages.push(totalPages);
      } else if (current >= totalPages - 2) {
        // current page close to end
        pages.push('ellipsis');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        // current page in the middle
        pages.push('ellipsis');
        pages.push(current - 1);
        pages.push(current);
        pages.push(current + 1);
        pages.push('ellipsis');
        pages.push(totalPages);
      }
    }
    
    return pages.map((page, index) => {
      if (page === 'ellipsis') {
        return (
          <div key={`ellipsis-${index}`} className="w-8 h-8 flex items-center justify-center">
            <div className="text-center text-black/25 text-sm font-normal leading-loose tracking-widest">•••</div>
          </div>
        );
      }

      const isActive = page === current;
      
      return (
        <div
          key={page}
          onClick={() => !isActive && onChange?.(page)}  // 只在非激活状态时触发
          className={cn(
            "w-8 h-8 rounded-2xl border flex items-center justify-center",
            isActive 
              ? "bg-[#52c41a] border-[#52c41a]" 
              : "bg-white border-[#d9d9d9] hover:border-[#52c41a] hover:text-[#52c41a] cursor-pointer"
          )}
        >
          <div className={cn(
            "text-center text-sm",
            isActive ? "text-white font-medium" : "text-black/90 font-normal"
          )}>
            {page}
          </div>
        </div>
      );
    });
  };

  return (
    <div className="h-8 justify-start items-center gap-4 inline-flex">
      <div className="justify-start items-center gap-2 flex">
        <div className="pr-2 flex items-center">
          <div className="text-black/90 text-sm font-normal">Total {total} items</div>
        </div>
        
        {/* Prev button */}
        <div 
          onClick={() => current > 1 && onChange?.(current - 1)}
          className={cn(
            "w-8 h-8 bg-white rounded-2xl border border-[#d9d9d9] flex items-center justify-center",
            current > 1 ? "cursor-pointer hover:border-[#52c41a]" : "cursor-not-allowed opacity-50"
          )}
        >
          <ChevronLeft className="w-4 h-4" />
        </div>

        {/* Page numbers */}
        {renderPageNumbers()}

        {/* Next button */}
        <div 
          onClick={() => current < totalPages && onChange?.(current + 1)}
          className={cn(
            "w-8 h-8 bg-white rounded-2xl border border-[#d9d9d9] flex items-center justify-center",
            current < totalPages ? "cursor-pointer hover:border-[#52c41a]" : "cursor-not-allowed opacity-50"
          )}
        >
          <ChevronRight className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
}
