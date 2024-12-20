import { useState } from 'react';
import { Dialog } from '@/components/ui/dialog';
import { X } from 'lucide-react';

interface ZoomableImageProps {
  src: string;
  alt?: string;
  className?: string;
  type?: 'image' | 'video';
}

export function ZoomableImage({ src, alt, className, type = 'image' }: ZoomableImageProps) {
  const [isOpen, setIsOpen] = useState(false);

  if (!src) return null;

  const renderMedia = () => {
    if (type === 'video') {
      return (
        <video 
          src={src}
          controls={false}
          className={className}
          onClick={() => setIsOpen(true)}
        />
      );
    }
    
    return (
      <img 
        src={src} 
        alt={alt} 
        className={`cursor-zoom-in ${className}`}
        onClick={() => setIsOpen(true)}
      />
    );
  };

  const renderZoomedMedia = () => {
    if (type === 'video') {
      return (
        <video
          src={src}
          controls
          className="w-full object-contain"
          onClick={(e) => e.stopPropagation()}
          autoPlay
        />
      );
    }

    return (
      <img
        src={src}
        alt={alt}
        className="w-full object-contain"
        onClick={(e) => e.stopPropagation()}
      />
    );
  };

  return (
    <>
      {/* thumbnail/video */}
      {renderMedia()}

      {/* zoomout modal */}
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
              {renderZoomedMedia()}
            </div>
          </div>
        </Dialog>
      )}
    </>
  );
}