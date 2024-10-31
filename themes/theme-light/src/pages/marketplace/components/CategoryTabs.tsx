import { cn, log } from "@/lib/utils";
import { useState, useEffect, useRef } from "react";
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { CATEGORIES, Category, IProduct, PurchasedProduct } from "@/pages/marketplace/types";
import api from "@/lib/api";
import { useLocation } from "react-router-dom";
import { useMarketplace } from '@/providers/MarketplaceProvider';

interface CategoryTabsProps {
  onSelect?: (value: Category) => Promise<void>;
  selectedValue?: Category;
}

export function CategoryTabs({ 
  onSelect,
  selectedValue,
}: CategoryTabsProps) {
  const { checkNewProducts, hasNewProducts } = useMarketplace();
  const location = useLocation();
  const categories = CATEGORIES;
  const [showRightArrow, setShowRightArrow] = useState(false);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const updateArrows = () => {
    const container = scrollContainerRef.current;
    if (container) {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1); // -1 for potential rounding errors
    }
  };

  // Add resize observer
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      const resizeObserver = new ResizeObserver(() => {
        updateArrows();
      });
      resizeObserver.observe(container);
      return () => resizeObserver.disconnect();
    }
  }, []);

  // Initial check and categories change
  useEffect(() => {
    updateArrows();
  }, [categories]);

  // Scroll event listener
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', updateArrows);
      return () => container.removeEventListener('scroll', updateArrows);
    }
  }, []);

  // check new products when entering marketplace page
  useEffect(() => {
    if (location.pathname === '/marketplace') {
      checkNewProducts();
    }
  }, [location.pathname, checkNewProducts]);

  // Scroll handlers
  const scrollLeft = () => {
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <div className={cn([
      'relative w-full',
      'desktop:w-[1224px] laptop:w-[816px] mx-auto'
    ])}>
      {showLeftArrow && (
        <button 
          onClick={scrollLeft}
          className="absolute left-0 top-0 h-full flex items-center z-10"
        >
          <div className="bg-gradient-to-r from-white via-white to-transparent h-full flex items-center">
            <ChevronLeft className="w-5 h-5 text-gray-500" />
          </div>
        </button>
      )}
      <div 
        ref={scrollContainerRef}
        className="w-full h-9 flex items-center gap-7 overflow-x-auto scrollbar-hide"
      >
        {categories.map((category, index) => {
          const isActive = selectedValue === category;
          return (
            <div 
              key={index}
              onClick={() => onSelect?.(category)}
              className={cn(
                "text-center text-sm font-medium font-['Roboto'] leading-none whitespace-nowrap relative shrink-0",
                isActive 
                  ? "h-9 w-[110px] bg-black rounded-[60px] justify-center items-center gap-2 flex" 
                  : "h-9 flex items-center justify-center"
              )}
            >
              <div className={cn(
                "cursor-pointer relative",
                isActive ? "text-white" : "text-black"
              )}>
                {category}
                {category === 'Added' && hasNewProducts && (
                  <div className="absolute -top-1 -right-4 w-2 h-2 bg-red-500 rounded-full" />
                )}
              </div>
            </div>
          );
        })}
      </div>
      {showRightArrow && (
        <button 
          onClick={scrollRight}
          className="absolute right-0 top-0 h-full flex items-center z-10"
        >
          <div className="bg-gradient-to-l from-white via-white to-transparent h-full flex items-center">
            <ChevronRight className="w-5 h-5 text-gray-500" />
          </div>
        </button>
      )}
    </div>
  );
}
