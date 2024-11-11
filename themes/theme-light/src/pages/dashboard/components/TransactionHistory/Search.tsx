import { DatePicker, ConfigProvider } from "antd";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const { RangePicker } = DatePicker;

const tokens = [
  { symbol: 'ETH', icon: '/imgs/logos/eth.png' },
  { symbol: 'MATIC', icon: '/imgs/logos/matic.png' },
  { symbol: 'TVWT', icon: '/imgs/logos/tvwt.png' },
];

export function Search() {
  const [selectedToken, setSelectedToken] = useState('ETH');

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-[14px]">
        <Select value={selectedToken} onValueChange={setSelectedToken}>
          <SelectTrigger className={cn(
            "w-[120px] h-10 bg-white border border-[#E0E0E0]",
            "hover:border-[#52c41a] focus:ring-[#52c41a]",
            "text-sm",
          )}>
            <SelectValue>
              <div className="flex items-center gap-2">
                <img 
                  src={tokens.find(t => t.symbol === selectedToken)?.icon} 
                  alt={selectedToken}
                  className="w-4 h-4 rounded-full"
                />
                <span>{selectedToken}</span>
              </div>
            </SelectValue>
          </SelectTrigger>
          <SelectContent className="bg-white">
            {tokens.map((token) => (
              <SelectItem 
                key={token.symbol} 
                value={token.symbol}
                className="cursor-pointer text-sm"
              >
                <div className="flex items-center gap-2">
                  <img 
                    src={token.icon} 
                    alt={token.symbol}
                    className="w-4 h-4 rounded-full"
                  />
                  <span>{token.symbol}</span>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <ConfigProvider
          theme={{
            token: {
              colorPrimary: '#52c41a',
              controlHeight: 40,
            },
          }}
        >
          <RangePicker />
        </ConfigProvider>

        <div className="hidden tablet:block text-black text-base font-bold leading-tight cursor-pointer"> Reset</div>
      </div>

      <Button className="hidden tablet:block">
      Download CSV
      </Button>
    </div>
  )
}
