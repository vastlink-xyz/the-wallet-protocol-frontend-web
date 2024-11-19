import { DatePicker, ConfigProvider } from "antd";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import dayjs from 'dayjs';

const { RangePicker } = DatePicker;

const tokens = [
  { symbol: 'ALL', icon: '' },
  { symbol: 'ETH', icon: '/imgs/logos/eth.png' },
  { symbol: 'MATIC', icon: '/imgs/logos/matic.png' },
  { symbol: 'TVWT', icon: '/imgs/logos/tvwt.png' },
];

export function Search({ 
  onDateChange,
  dates,
  onTokenChange,
  selectedToken,
  onReset,
  onDownloadCSV,
}: { 
  onDateChange: (dates: [Date, Date]) => void,
  onTokenChange: (token: string) => void,
  onReset: () => void,
  selectedToken: string,
  dates: [Date, Date],
  onDownloadCSV: () => void,
}) {

  const handleTokenChange = (tokenType: string) => {
    onTokenChange(tokenType)
  }

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-[14px]">
        <DropdownMenu>
          <DropdownMenuTrigger className={cn(
            "w-[120px] h-10 bg-white border border-[#E0E0E0] rounded-md",
            "hover:border-[#52c41a] focus:ring-[#52c41a] focus:outline-none",
            "text-sm px-3",
            "flex items-center justify-between"
          )}>
            <div className="flex items-center gap-2">
              <img
                src={tokens.find(t => t.symbol === selectedToken)?.icon}
                alt={selectedToken}
                className={cn(
                  'w-4 h-4 rounded-full',
                  !tokens.find(t => t.symbol === selectedToken)?.icon && 'invisible'
                )}
              />
              <span>{selectedToken}</span>
            </div>
            <ChevronDown className="h-4 w-4 opacity-50" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white">
            {tokens.map((token) => (
              <DropdownMenuItem
                key={token.symbol}
                onClick={() => handleTokenChange(token.symbol)}
                className={cn(
                  "cursor-pointer text-sm",
                  "flex items-center justify-between",
                )}
              >
                <div className="flex items-center gap-2">
                  <img
                    src={token.icon}
                    alt={token.symbol}
                    className={cn(
                      'w-4 h-4 rounded-full',
                      !token.icon && 'invisible'
                    )}
                  />
                  <span className={cn(
                    selectedToken === token.symbol && "text-[#52c41a]"
                  )}>{token.symbol}</span>
                </div>
                {selectedToken === token.symbol && (
                  <img src="/imgs/icons/checked.svg" alt="" />
                )}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <ConfigProvider
          theme={{
            token: {
              colorPrimary: '#52c41a',
              controlHeight: 40,
            },
          }}
        >
          <RangePicker 
            value={[
              dayjs(dates[0]),
              dayjs(dates[1])
            ]}
            disabledDate={(current) => current && current > dayjs().endOf('day')}
            onChange={(dates) => {
              if (dates && dates[0] && dates[1]) {
                const startDate = dates[0].startOf('day').toDate();
                const endDate = dates[1].endOf('day').toDate();
                onDateChange([startDate, endDate]);
              }
            }}
          />
        </ConfigProvider>

        <div className="hidden tablet:block text-black text-base font-bold leading-tight cursor-pointer" onClick={onReset}> Reset</div>
      </div>

      <Button className="hidden tablet:block" onClick={onDownloadCSV}>
        Download CSV
      </Button>
    </div>
  )
}
