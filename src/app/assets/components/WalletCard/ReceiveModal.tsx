import { X } from "lucide-react"
import { QRCodeSVG } from 'qrcode.react';
import { cn } from "@/lib/utils"
import ReactDOM from "react-dom"
import { toast } from "react-toastify";
import { CopyAddress } from "@/components/ui/CopyAddress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { SUPPORTED_TOKENS_ARRAY, SUPPORTED_TOKENS_INFO, TokenType } from "@/lib/web3/token";
import { useState, useMemo } from "react";

export function ReceiveModal({
  addresses,
  open,
  email,
  onClose,
}: {
  addresses: {
    btc: string;
    eth: string;
  };
  open: boolean;
  email: string;
  onClose: (open: boolean) => void;
}) {
  const [selectedToken, setSelectedToken] = useState<TokenType>('BTC');
  
  // Get the token info for the selected token
  const selectedTokenInfo = useMemo(() => 
    SUPPORTED_TOKENS_INFO[selectedToken], 
  [selectedToken]);

  const address = useMemo(() => {
    const tokenInfo = SUPPORTED_TOKENS_INFO[selectedToken];
    return addresses[tokenInfo.addressKey];
  }, [selectedToken, addresses]);

  const handleTokenChange = (token: TokenType) => {
    setSelectedToken(token);
  }

  const modalContent = open ? (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* background */}
      <div className="fixed inset-0 bg-[#1f2533]/40"></div>

      {/* modal */}
      <div className={cn(
        "relative z-50",
      )}>
        <div className="bg-background text-primary rounded-[6px] w-full">
          <header className="flex justify-between items-center px-5 py-[14px] border-b border-[#EBEBEB]">
            <p className="text-black text-lg font-medium">Receive</p>
            <button
              onClick={() => onClose(false)}
              className="text-[#929292] hover:text-[#929292]/80"
            >
              <X />
            </button>
          </header>

          <div className="p-6 border-b border-[#EBEBEB]">
            <div className="flex justify-center mb-4">
              <Select
                value={selectedToken}
                onValueChange={(value: string) => handleTokenChange(value as TokenType)}
              >
                <SelectTrigger className="w-[226px] border border-black rounded-full bg-white">
                  <SelectValue>
                    <div className="flex items-center gap-2">
                      {selectedTokenInfo.iconUrl && (
                        <img src={selectedTokenInfo.iconUrl} alt={selectedTokenInfo.name} className="w-4 h-4" />
                      )}
                      <div className="flex items-center gap-2">
                        <span>{selectedTokenInfo.symbol}</span>
                        <span className="text-gray-500 text-xs">({selectedTokenInfo.name})</span>
                      </div>
                    </div>
                  </SelectValue>
                </SelectTrigger>
                <SelectContent>
                  {SUPPORTED_TOKENS_ARRAY.map((token) => (
                    <SelectItem key={token.symbol} value={token.symbol}>
                      <div className="flex items-center gap-2">
                        {token.iconUrl && (
                          <img src={token.iconUrl} alt={token.name} className="w-5 h-5" />
                        )}
                        <div className="flex items-center gap-2">
                          <span>{token.symbol}</span>
                          <span className="text-gray-500 text-xs">({token.name})</span>
                        </div>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center justify-center mx-auto mt-6 mb-2">
              <CopyAddress textToCopy={address} iconSize={14} />
            </div>

            <div className="w-[216px] mx-auto p-[10px]">
              <QRCodeSVG
                id="qr-code-svg"
                value={address}
                size={320}
                level="H"
                fgColor="#000"
                bgColor="#fff"
                imageSettings={{
                  src: selectedTokenInfo.iconUrl || "/static/imgs/logos/vastlink.png",
                  height: 60,
                  width: 60,
                  excavate: true
                }}
                style={{ width: '196px', height: '196px' }}
              />
            </div>
          </div>

          {/* Email section at the bottom */}
          <div className="p-4 flex items-center justify-center">
            <CopyAddress textToCopy={email} iconSize={12} />
          </div>
        </div>
      </div>
    </div>
  ) : null;

  if (typeof window !== 'undefined') {
    return ReactDOM.createPortal(
      modalContent,
      document.body
    );
  }
}
