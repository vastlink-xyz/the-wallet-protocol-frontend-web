import { useState, useCallback } from 'react';
import { Check, Copy } from 'lucide-react';
import { toast } from 'react-toastify';
import { cn, truncateMiddle } from '@/lib/utils';
import { useTranslations } from 'next-intl';

interface CopyAddressProps {
  textToCopy: string;
  className?: string;
  iconSize?: number;
  isTruncate?: boolean;
}

export function CopyAddress({ textToCopy, className, iconSize = 12, isTruncate = false }: CopyAddressProps) {
  const t = useTranslations('CopyAddress');

  const [copied, setCopied] = useState(false);

  const copyToClipboard = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation(); // Prevent event bubbling if the button is inside another clickable element
    if (textToCopy) {
      navigator.clipboard.writeText(textToCopy).then(() => {
        setCopied(true);
        toast.success(t('success'), {
          autoClose: 1000,
        });
        setTimeout(() => setCopied(false), 2000); // Reset icon after 2 seconds
      }).catch(err => {
        console.error('Failed to copy: ', err);
      });
    }
  }, [textToCopy]);

  return (
    <div className={`flex items-center ${className || ''}`}>
      <p className={cn(
        "mr-2 text-center overflow-hidden"
      )} title={textToCopy}>
        {isTruncate ? truncateMiddle(textToCopy) : (
          <>
            <span className='hidden laptop:inline'>{textToCopy}</span>
            <span className='laptop:hidden'>{truncateMiddle(textToCopy)}</span>
          </>
        )}
      </p>
      <div
        onClick={copyToClipboard}
        className="p-1 cursor-pointer"
        aria-label="Copy to clipboard"
      >
        {copied ? (
          <Check className={`h-${iconSize/4} w-${iconSize/4} text-green-500`} style={{ width: iconSize, height: iconSize, flexShrink: 0 }} />
        ) : (
          <Copy className={`h-${iconSize/4} w-${iconSize/4}`} style={{ width: iconSize, height: iconSize, flexShrink: 0 }} />
        )}
      </div>
    </div>
  );
} 