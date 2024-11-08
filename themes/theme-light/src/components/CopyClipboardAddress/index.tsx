import { Copy } from "lucide-react";
import { useTranslation } from "react-i18next";
import CopyToClipboard from "react-copy-to-clipboard"
import { toast } from "react-toastify";
import { Address } from "viem"

interface CopyboardAddressProps {
  iconSize?: number;
  address: Address;
  className?: string;
  iconClassName?: string;
  [key: string]: any;
}

export function CopyClipboardAddress({
  iconSize=20,
  address,
  className = '',
  iconClassName = '',
  ...props
}: CopyboardAddressProps) {
  const { t } = useTranslation()

  return (
    <CopyToClipboard text={address} onCopy={() => {
      toast.success(t('toastSuccess.copySuccess'), {
        autoClose: 1000,
        hideProgressBar: true,
      })
    }}>
      <span className="flex text-primary items-start">
        <span {...props} style={{wordBreak: 'break-all', display: 'block'}} className="text-xs">
          <span className={`text-primary ${className}`}>{address}</span>
        </span>
        <Copy 
          className={`cursor-pointer hover:scale-105 ml-2 ${iconClassName}`} 
          size={iconSize} 
        />
      </span>
    </CopyToClipboard>
  )
}
