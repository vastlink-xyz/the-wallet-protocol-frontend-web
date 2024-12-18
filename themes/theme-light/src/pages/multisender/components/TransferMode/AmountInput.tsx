import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Transfer } from './useMultisender';

interface AmountInputProps {
  transfer: Transfer;
  handleAmountChange: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void;
  index: number;
}

export function AmountInput({
  transfer,
  handleAmountChange,
  index,
}: AmountInputProps) {
  return (
    <>
      <Input
        value={transfer.amount}
        type="number"
        inputMode="decimal"
        onChange={(e) => handleAmountChange(e, index)}
        className={cn(
          "pl-[110px] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
          transfer.token === 'ETH' && 'pl-[144px]',
          transfer.token === 'MATIC' && 'pl-[100px]',
          'desktop:w-[219px] laptop:w-[228px] tablet:w-[265px] w-[216px]',
        )}
        placeholder="Amount"
      />
    </>
  )
}
