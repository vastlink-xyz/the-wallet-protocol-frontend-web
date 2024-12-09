import { cn } from '@/lib/utils';
import { X } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
  overlayClassName?: string;
  title?: string;
  containerClassName?: string;
  contentClassName?: string;
  footer?: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, className, overlayClassName, title, containerClassName, contentClassName, children, footer }) => {
  const modalContent = isOpen ? (
    <div className={cn(
      "fixed inset-0 z-50 flex items-center justify-center",
      className,
    )}>
      <div className={cn(
        "fixed inset-0 bg-black/80",
        overlayClassName
      )}></div>
      <div className={cn(
        "relative z-50 bg-background text-primary rounded-lg max-w-[600px] w-full overflow-hidden",
        containerClassName,
      )}>
        <div className={cn(
          'flex items-center justify-between py-[14px] px-[20px]',
          'border-b border-[#ebebeb] pb-2',
        )}>
          <p>{title}</p>
          <button
            onClick={onClose}
            className="text-[#929292] hover:text-primary/80"
          >
            <X />
          </button>
        </div>

        <div className={cn(
          'py-3 px-6',
          contentClassName,
        )}>
          {children}
        </div>

        {
          footer && (
            <footer className='border-t border-[#ebebeb] py-[18px] px-[24px]'>
              {footer}
            </footer>
          )
        }
      </div>
    </div>
  ) : null;

  if (typeof window !== 'undefined') {
    return ReactDOM.createPortal(
      modalContent,
      document.body
    );
  }

};
