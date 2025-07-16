import { cn } from '@/lib/utils';
import { formatBalance } from '@/lib/web3/format';
import { SUPPORTED_TOKENS_INFO } from '@/lib/web3/token';
import { CopyAddress } from '@/components/ui/CopyAddress';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import dayjs from 'dayjs';
import { TransactionHistoryTableProps } from './TransactionHistoryTableProps';
import { openTxPage } from './TransactionHistoryTable';

export function MobileTransactionHistoryTable({ className, data, isLoading }: TransactionHistoryTableProps) {
  return (
    <div className={cn('flex flex-col', className)}>
      <div className="px-0 pb-2 text-xs ">Transaction</div>
      {data.map((transaction) => (
        <div key={transaction.txid} className="border-t">
          <div className={cn(
            "px-0 py-6 w-full",
            isLoading ? "opaque-50 animate-pulse rounded-none" : null,
          )}>
            <div className="flex items-start gap-3">
              <img
                src={SUPPORTED_TOKENS_INFO[transaction.tokenType].iconUrl}
                className="w-[28px] h-[28px]"
              />
              <div className="flex flex-col w-[300px]">
                <span className="text-base font-bold leading-tight text-[#3d3d3d]">
                  {transaction.type}
                </span>
                <div className="flex flex-col gap-2 mt-[6px] text-xs text-[#929292] font-medium leading-none">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <div className="truncate cursor-pointer w-[280px]">
                          From: {transaction.from}
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <CopyAddress
                          textToCopy={transaction.from}
                          className="text-white text-xs"
                          iconSize={14}
                        />
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <div className="truncate cursor-pointer w-[280px]">
                          To: {transaction.to}
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <CopyAddress
                          textToCopy={transaction.to}
                          className="text-white text-xs"
                          iconSize={14}
                        />
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <div onClick={() => openTxPage(transaction.tokenType, transaction.txid)}>
                    <CopyAddress textToCopy={transaction.txid} />
                  </div>
                </div>

                <div className="w-full flex flex-col mt-[20px] text-sm">
                  <div className="w-full flex flex-row items-center">
                    <div className="flex-1 truncate">
                      <span className="text-[#929292]">Network:</span>{' '}
                      {SUPPORTED_TOKENS_INFO[transaction.tokenType].network}
                    </div>
                    <div
                      className={cn(
                        'text-lg font-bold leading-5',
                        transaction.type === 'receive'
                          ? 'text-[#00a478]'
                          : 'text-[#ff6363]'
                      )}
                    >
                      {(transaction.type === 'receive' ? '+' : '-') +
                        formatBalance(transaction.value) +
                        ' ' +
                        SUPPORTED_TOKENS_INFO[transaction.tokenType].symbol}
                    </div>
                  </div>
                  <div className="w-full text-end">
                    {dayjs(transaction.timestamp).format('MM/DD/YYYY, HH:mm')}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
