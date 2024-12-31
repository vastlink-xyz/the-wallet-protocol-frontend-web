import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Transfer } from './useMultisender';
import { useEffect, useRef, useState } from "react";
import { TokenDropdownMenu } from "./TokenDropdownMenu";
import { Divider } from "antd";
import { TokenType } from "@/types/tokens";

interface TokenAmountInputProps {
  transfer: Transfer;
  handleAmountChange: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void;
  handleTokenTypeChange: (tokenType: TokenType, index: number) => void;
  index: number;
  sending: boolean;
  handleAmountBlur: (index: number) => void;
  isEmpty: boolean;
}

export function TokenAmountInput({
  transfer,
  sending,
  handleAmountChange,
  handleTokenTypeChange,
  index,
  handleAmountBlur,
  isEmpty,
}: TokenAmountInputProps) {
  // Reference to measure the width of token dropdown
  const symbolRef = useRef<HTMLDivElement>(null);
  const [symbolWidth, setSymbolWidth] = useState(0);

  useEffect(() => {
    if (symbolRef.current) {
      setTimeout(() => {
        const width = symbolRef.current?.getBoundingClientRect().width;
        if (width) {
          setSymbolWidth(width + 12); // Add extra padding for the divider
        }
      }, 0);
    }
  }, [transfer.token]); // recalculate when token changes

  return (
    <div className="relative">
      <Input
        disabled={sending}
        value={transfer.amount}
        type="number"
        inputMode="decimal"
        onChange={(e) => handleAmountChange(e, index)}
        onBlur={() => handleAmountBlur(index)}
        className={cn(
          "[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
          'desktop:w-[219px] laptop:w-[228px] tablet:w-[265px] w-[216px]',
        )}
        placeholder="Amount"
        style={{
          paddingLeft: `${symbolWidth}px`
        }}
      />
      <div ref={symbolRef} className="absolute left-[12px] top-1/2 -translate-y-1/2 flex items-center">
        <TokenDropdownMenu
          index={index}
          transfer={transfer}
          handleTokenTypeChange={handleTokenTypeChange}
          sending={sending}
        />
        <Divider type="vertical" className="h-[16px]" />
      </div>
      {isEmpty && (
        <p className={cn(
          "absolute -bottom-[20px] left-[0] text-xs text-destructive",
        )}>
          Amount is required
        </p>
      )}
    </div>
  );
}