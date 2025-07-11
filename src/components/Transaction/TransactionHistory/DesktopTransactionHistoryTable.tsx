import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
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
import { TransactionItem } from '@/types/transaction-item';

export function DesktopTransactionHistoryTable({className, data, isLoading }: TransactionHistoryTableProps) {
  return (
    <Table className={className}>
      <TableHeader>
        <TableRow className="text-xs text-[#7b8293] leading-none hover:bg-transparent">
          <TableHead className="h-[16px] px-0 pb-[8px]">Transaction</TableHead>
          <TableHead className="h-[16px] px-0 pb-[8px]">Amount</TableHead>
          <TableHead className="hidden tablet:table-cell h-[16px] px-0 pb-[8px]">
            Network
          </TableHead>
          <TableHead className="hidden tablet:table-cell h-[16px] px-0 pb-[8px]">
            From
          </TableHead>
          <TableHead className="hidden tablet:table-cell h-[16px] px-0 pb-[8px]">
            To
          </TableHead>
          <TableHead className="hidden tablet:table-cell h-[16px] px-0 pb-[8px]">
            Transaction Hash
          </TableHead>
          <TableHead className="h-[16px] px-0 pb-[8px] text-right">
            Time
          </TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {data.map((transaction) => 
          <TransactionHistoryTableRow key={transaction.txid} isLoading={isLoading} transaction={transaction} />
        )}
      </TableBody>
    </Table>
  );
}

function TransactionHistoryTableRow({ isLoading, transaction }: { isLoading: boolean, transaction: TransactionItem }) {
  return (
    <TableRow className={
      isLoading ? "opaque-50 animate-pulse rounded-md" : "hover:bg-transparent"
    }>
      {/* token */}
      <TableCell className="px-0 py-6 desktop:w-[121px] laptop:w-[121px] tablet:w-[100px]">
        <div className="flex items-center gap-1">
          <img
            src={SUPPORTED_TOKENS_INFO[transaction.tokenType].iconUrl}
            className="w-[28px] h-[28px]"
          />
          <span className="font-bold leading-tight text-[#3d3d3d] text-xs desktop:text-sm">
            {transaction.type}
          </span>
        </div>
      </TableCell>

      {/* amount */}
      <TableCell className="px-0 py-6 desktop:w-[190px] laptop:w-[150px] w-[122px]">
        <span
          className={cn(
            'font-bold leading-tight text-xs desktop:text-sm',
            transaction.type === 'receive'
              ? 'text-[#00a478]'
              : 'text-[#ff6363]'
          )}
        >
          {transaction.type === 'receive' ? '+' : '-'}
          {formatBalance(transaction.value)}{' '}
          {SUPPORTED_TOKENS_INFO[transaction.tokenType].symbol}
        </span>
      </TableCell>

      {/* network */}
      <TableCell className="hidden tablet:table-cell px-0 py-6
        text-[#929292] font-medium leading-none text-xs desktop:text-sm">
        <p className="truncate tablet:w-[70px] laptop:w-[100px] desktop:w-[120px]">
          {SUPPORTED_TOKENS_INFO[transaction.tokenType].network}
        </p>
      </TableCell>

      {/* from */}
      <TableCell className="hidden tablet:table-cell px-0 py-6
        text-xs text-[#929292] font-medium leading-none break-all">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className="hidden tablet:block
              tablet:w-[111px] laptop:w-[131px] desktop:w-[216px]
              tablet:mr-[5px] laptop:mr-[10px] desktop:mr-[30px]">
              <div className="cursor-pointer truncate">
                {transaction.from}
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
      </TableCell>

      {/* to */}
      <TableCell className="hidden tablet:table-cell px-0 py-6
        text-xs text-[#929292] font-medium leading-none break-all">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger
              className="hidden tablet:block
                tablet:w-[111px] laptop:w-[131px] desktop:w-[216px]
                tablet:mr-[5px] laptop:mr-[10px] desktop:mr-[30px]">
              <div className="cursor-pointer truncate">
                {transaction.to}
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
      </TableCell>

      {/* transaction hash */}
      <TableCell className="hidden tablet:table-cell px-0 py-6
        text-xs text-[#929292] font-medium leading-none break-all">
        <CopyAddress textToCopy={transaction.txid} isTruncate />
        {/* <div className={cn(
          "hidden tablet:block laptop:hidden",
          'w-[140px] mr-[5px]',
          "cursor-pointer truncate"
        )}
          onClick={() => openTxPage(transaction)}
        >
          {transaction.txid}
        </div>
        <div className={cn(
          "hidden laptop:block",
          'laptop:w-[131px] desktop:w-[216px]',
          'laptop:mr-[10px] desktop:mr-[30px]',
          "cursor-pointer truncate"
        )}
          onClick={() => openTxPage(transaction)}
        >
          {transaction.txid}
        </div> */}
      </TableCell>

      {/* time */}
      <TableCell className="px-0 py-6 text-right text-xs text-black leading-none font-normal w-[110px]">
        {dayjs(transaction.timestamp).format('MM/DD/YYYY, HH:mm')}
      </TableCell>
    </TableRow>
  )
}