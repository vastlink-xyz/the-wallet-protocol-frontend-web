'use client'

import { cn } from '@/lib/utils';
import { X } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, className, children }) => {
  const modalContent = isOpen ? (
    <div className={cn(
      "fixed inset-0 z-50 flex items-center justify-center",
      className,
    )}>
      <div className="fixed inset-0 bg-black/80"></div>
      <div className="relative z-50 bg-background text-primary rounded-lg p-6 max-w-md w-full">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-primary hover:text-primary/80"
        >
          <X />
        </button>
        {children}
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
