import { cn } from "@/lib/utils";
import { TransferResult } from "../../page";
import { Button } from "@/components/ui/button";
import { TokenType } from "@/types/tokens";
import { TotalAmount } from "../TransferMode/useMultisender";
import { AlertCircle, CircleCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { GasFees } from "../TransferMode/useMultisender";
import { useTokenPrice } from "@/hooks/useTokenPrice";
import { TotalAmountComponent } from "../TransferMode/TotalAmountComponent";
import { theTokenService } from "@/services/TokenService";
export function ResultMode({
  transferResults,
  onTransferAgain,
  gasFees,
  totalAmount,
}: {
  transferResults: TransferResult[];
  onTransferAgain: () => void;
  gasFees: GasFees | null;
  totalAmount: TotalAmount;
}) {
  const navigate = useNavigate();
  const { data: tokenPrices } = useTokenPrice();

  // const totalAmount = useMemo(() => {
  //   const total = {
  //     ETH: 0,
  //     MATIC: 0,
  //     TVWT: 0
  //   };

  //   transferResults.forEach(transfer => {
  //     if (
  //       transfer.amount && 
  //       !isNaN(parseFloat(transfer.amount)) && 
  //       transfer.status === 'sent'
  //     ) {
  //       total[transfer.token] += parseFloat(transfer.amount);
  //     }
  //   });

  //   const usdValue = tokenPrices ? 
  //     total.ETH * parseFloat(tokenPrices.ETH || '0') +
  //     total.MATIC * parseFloat(tokenPrices.MATIC || '0') +
  //     total.TVWT * parseFloat(tokenPrices.TVWT || '0') :
  //     0;

  //   return {
  //     ETH: total.ETH.toString(),
  //     MATIC: total.MATIC.toString(),
  //     TVWT: total.TVWT.toString(),
  //     usdValue: formatNumberWithCommas(usdValue.toString(), 2)
  //   };
  // }, [transferResults, tokenPrices]);

  return <div className={cn(
    "pt-[76px] mx-auto pb-[320px]",
    'w-[343px] tablet:w-[722px] laptop:w-[913px] desktop:w-[985px]',
  )}>
    <header className="text-center mb-[40px]">
      <p className="text-[32px] text-[#111] font-bold leading-tight mb-[16px]">
        Token sent
      </p>
      <p className="text-sm text-[#979797] font-normal leading-none">
        You can find the transactions under the "History" tab in the Dashboard page.
      </p>
    </header>

    <div>
      <header className={cn(
        "flex items-center bg-[#fafafa] rounded-tl-xl rounded-tr-xl",
        "h-[42px] pl-[28px] pr-[23px]",
        'text-black/90 text-xs font-normal leading-snug',
      )}>
        <div className="desktop:w-[397px] laptop:w-[397px] tablet:w-[319px]">To</div>
        <div className="desktop:w-[308px] laptop:w-[299px] tablet:w-[252px] hidden tablet:block">Status</div>
        <div className="flex-1 text-right hidden tablet:block">Amount</div>
      </header>

      <div className="">
        {
          transferResults.map((transfer, index) => {
            return (
              <div
                key={index}
                className={cn(
                  "border-b border-[#ebebeb]",
                  "flex items-center flex-wrap py-[25px]",
                )}
              >
                {/* To */}
                <div className={cn(
                  "flex items-center justify-between px-0 text-xs",
                )}>
                  <div className="w-[22px]">{index + 1}.</div>
                  <div className={cn(
                    "flex items-center",
                    'desktop:w-[297px] laptop:w-[297px] tablet:w-[297px] w-[302px]',
                    'desktop:mr-[100px] laptop:mr-[100px] tablet:mr-[20px]',
                    'py-[8px] tablet:py-0',
                  )}>
                    <p className={cn(
                      'mr-1',
                      '[text-decoration:none]',
                      (transfer.type === 'transaction' && transfer.status === 'sent') && 'text-green-500',
                      (transfer.type === 'invitation' && transfer.status === 'sent') && 'text-blue-500',
                      (transfer.status === 'failed') && 'text-destructive',
                    )}>
                      {transfer.to}
                    </p>
                    {(transfer.type === 'transaction' && transfer.status === 'sent') && (
                      <CircleCheck className="text-green-500" size={12} />
                    )}
                    {(transfer.type === 'invitation' && transfer.status === 'sent') && (
                      <AlertCircle className="text-blue-500" size={12} />
                    )}
                    {(transfer.status === 'failed') && (
                      <AlertCircle className="text-destructive" size={12} />
                    )}
                  </div>
                </div>

                {/* Status */}
                <p className={cn(
                  'text-xs text-black font-normal leading-tight break-words',
                  'desktop:w-[362px] laptop:w-[348px] tablet:w-[252px] w-full',
                  'mb-1 tablet:mb-0',
                  transfer.status === 'failed' && 'text-destructive',
                )}>{transfer.statusMessage}</p>

                {/* Amount */}
                <div className={cn(
                  'flex-1 text-sm text-black font-normal leading-none text-right',
                  'pr-0 tablet:pr-[8px]',
                )}>
                  <p>{transfer.amount} {theTokenService.getToken(transfer.token as TokenType).symbol}</p>
                  {
                    (transfer.type === 'transaction' && transfer.status === 'failed') && (
                      <p>(Not Sent)</p>
                    )
                  }
                </div>
              </div>
            )
          })
        }
      </div>
    </div>

    {/* Estimated gas fee */}
    <div className="mt-[30px]">
      <div className="text-[#929292] text-sm font-normal leading-none flex items-center justify-end gap-1">
        <p>Estimated gas fee:</p>
      </div>
      <p className="text-black text-sm font-medium leading-none text-right mt-0.5">
        {gasFees && Object.entries(gasFees)
          .filter(([token]) => token !== 'usdValue' && gasFees[token as keyof TotalAmount] !== '0')
          .map(([token, amount], index, array) => (
            <span key={token}>
              {amount} {theTokenService.getToken(token as TokenType).symbol}
              {index < array.length - 1 && ' & '}
            </span>
          ))}
        {gasFees && Object.values(gasFees).some(amount => amount !== '0') &&
          ` (~$${gasFees.usdValue} USD)`}
      </p>

      <TotalAmountComponent
        totalAmount={totalAmount}
        gasFees={gasFees}
      />

      <div className="mt-[104px]">
        <div className="flex justify-center flex-wrap gap-4 mt-6 w-full">
          <Button className="w-[343px] tablet:w-[242px]" variant="outline" onClick={onTransferAgain}>
            Transfer again
          </Button>
          <Button className="w-[343px] tablet:w-[242px]" onClick={() => {
            navigate(-1);
          }}>
            OK
          </Button>
        </div>
      </div>
    </div>
  </div>
}
