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
      <div className="flex">
        <p {...props} style={{wordBreak: 'break-all'}}>{address}</p>
        <Copy className="cursor-pointer hover:scale-105 mr-2" size={iconSize} />
      </div>
    </CopyToClipboard>
  )
}
