import { Copy } from "lucide-react";
import CopyToClipboard from "react-copy-to-clipboard"
import { toast } from "react-toastify";
import { Address } from "viem"

interface CopyboardAddressProps {
  iconSize?: number;
  address: Address;
  [key: string]: any;
}

export function CopyClipboardAddress({
  iconSize=24,
  address,
  ...props
}: CopyboardAddressProps) {
  return (
    <CopyToClipboard text={address} onCopy={() => {
      toast.success('Copy success!', {
        autoClose: 1000,
        hideProgressBar: true,
      })
    }}>
      <span className="flex text-primary">
        <span {...props} style={{wordBreak: 'break-all', display: 'block'}}>
          <span className="text-primary">{address}</span>
        </span>
        <Copy className="cursor-pointer hover:scale-105 mr-2" size={iconSize} />
      </span>
    </CopyToClipboard>
  )
}
