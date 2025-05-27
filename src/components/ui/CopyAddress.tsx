import { useState, useCallback } from 'react';
import { Check, Copy } from 'lucide-react';

interface CopyAddressProps {
  textToCopy: string;
  className?: string;
  iconSize?: number;
}

export function CopyAddress({ textToCopy, className, iconSize = 12 }: CopyAddressProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation(); // Prevent event bubbling if the button is inside another clickable element
    if (textToCopy) {
      navigator.clipboard.writeText(textToCopy).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset icon after 2 seconds
      }).catch(err => {
        console.error('Failed to copy: ', err);
      });
    }
  }, [textToCopy]);

  return (
    <div className={`flex items-center ${className || ''}`}>
      <span className="mr-2">{textToCopy}</span>
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