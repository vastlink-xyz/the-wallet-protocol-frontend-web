import { useState } from 'react';
import { Dialog } from '@/components/ui/dialog';
import { X } from 'lucide-react';

interface ZoomableImageProps {
  src: string;
  alt?: string;
  className?: string;
}

export function ZoomableImage({ src, alt, className }: ZoomableImageProps) {
  const [isOpen, setIsOpen] = useState(false);

  if (!src) return null;

  return (
    <>
      {/* Thumbnail image */}
      <img 
        src={src} 
        alt={alt} 
        className={`cursor-zoom-in ${className}`}
        onClick={() => setIsOpen(true)}
      />

      {/* Zoom view modal */}
      {isOpen && (
        <Dialog 
          open={isOpen} 
          onOpenChange={setIsOpen}
        >
          {/* Add onClick handler for overlay click */}
          <div 
            className="fixed inset-0 bg-[#1f2533]/40 z-50 flex items-center justify-center"
            onClick={() => setIsOpen(false)}
          >
            <div className="relative w-[60vw]">
              <img
                src={src}
                alt={alt}
                className="w-full object-contain"
                onClick={(e) => e.stopPropagation()}  // Prevent modal closing when clicking image
              />
            </div>
          </div>
        </Dialog>
      )}
    </>
  );
}