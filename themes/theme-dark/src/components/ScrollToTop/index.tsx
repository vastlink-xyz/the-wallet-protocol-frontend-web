import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface ScrollToTopProps {
  threshold?: number;
  className?: string;
}

export function ScrollToTop({ threshold = 300, className }: ScrollToTopProps) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return showScrollTop ? (
    <div 
      onClick={scrollToTop}
      className={cn([
        'w-11 h-11 bg-white rounded-full',
        'flex items-center justify-center',
        'fixed bottom-[80px] right-[22px] cursor-pointer',
        'shadow-lg hover:shadow-xl transition-shadow',
        'hover:bg-gray-50',
        className
      ])}
    >
      <img src="/imgs/icons/arrow_up.svg" alt="Scroll to top" />
    </div>
  ) : null;
} 