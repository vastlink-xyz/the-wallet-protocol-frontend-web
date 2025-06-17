import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { cn, log } from "@/lib/utils"
import { formatBalance } from "@/lib/web3/format";
import { SUPPORTED_TOKENS_INFO, TokenType } from "@/lib/web3/token";
import { CopyAddress } from "../ui/CopyAddress";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";


const openTxPage = (tx: any) => {
  log('openTxPage', tx)
}

export interface TransactionItem {
  txid: string;
  value: string;
  from: string;
  to: string;
  timestamp: string;
  status: "confirmed" | "pending" | "failed";
  type: "send" | "receive";
}

interface ITableListProps {
  data: TransactionItem[];
  isLoading: boolean;
  tokenType: TokenType;
}

export function TableList({ data, tokenType, isLoading }: ITableListProps) {

  return (
    <Table className={cn(
      isLoading && 'opacity-30',
    )}>
      <TableHeader className="hidden tablet:table-header-group">
        <TableRow className="text-xs text-[#7b8293] leading-none hover:bg-transparent">
          <TableHead className="h-[16px] px-0 pb-[8px]">Transaction</TableHead>
          <TableHead className="h-[16px] px-0 pb-[8px]">Amount</TableHead>
          <TableHead className="hidden tablet:table-cell h-[16px] px-0 pb-[8px]">Network</TableHead>
          <TableHead className="hidden tablet:table-cell h-[16px] px-0 pb-[8px]">From</TableHead>
          <TableHead className="hidden tablet:table-cell h-[16px] px-0 pb-[8px]">To</TableHead>
          <TableHead className="hidden tablet:table-cell h-[16px] px-0 pb-[8px]">Transaction Hash</TableHead>
          <TableHead className="h-[16px] px-0 pb-[8px] text-right">Time</TableHead>
        </TableRow>
      </TableHeader>

      {/* desktop */}
      <TableBody className="hidden tablet:table-row-group">
        {data.map((transaction) => (
          <TableRow key={transaction.txid} className="hover:bg-transparent">
            {/* token */}
            <TableCell className={cn(
              "px-0 py-6",
              'desktop:w-[121px] laptop:w-[121px] tablet:w-[100px]'
            )}>
              <div className="flex items-center gap-3">
                <img src={SUPPORTED_TOKENS_INFO[tokenType].iconUrl} className="w-[28px] h-[28px]" />
                <span className={cn(
                  'font-bold leading-tight text-[#3d3d3d]',
                  'text-xs desktop:text-sm'
                )}>{transaction.type}</span>
              </div>
            </TableCell>

            {/* amount */}
            <TableCell className={cn(
              "px-0 py-6",
              'desktop:w-[190px] laptop:w-[150px] w-[122px]'
            )}>
              <span className={cn(
                "font-bold leading-tight",
                'text-xs desktop:text-sm',
                transaction.type === 'receive' ? 'text-[#00a478]' : 'text-[#ff6363]'
              )}>
                {transaction.type === 'receive' ? '+' : '-'}
                {formatBalance(transaction.value)} {SUPPORTED_TOKENS_INFO[tokenType].symbol}
              </span>
            </TableCell>

            {/* network */}
            <TableCell className={cn(
              "hidden tablet:table-cell px-0 py-6",
              'text-[#929292] font-medium leading-none',
              'text-xs desktop:text-sm',
              'tablet:w-[70px] laptop:w-[90px] desktop:w-[120px]',
            )}>
              {SUPPORTED_TOKENS_INFO[tokenType].network}
            </TableCell>

            {/* from */}
            <TableCell className={cn(
              'hidden tablet:table-cell px-0 py-6',
              'text-xs text-[#929292] font-medium leading-none break-all',
            )}>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className={cn(
                    "hidden tablet:block laptop:hidden",
                    'max-w-[104px] mr-[10px]',
                  )}>
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
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className={cn(
                    "hidden laptop:block",
                    'laptop:w-[131px] desktop:w-[216px]',
                    'laptop:mr-[10px] desktop:mr-[30px]'
                  )}>
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
            <TableCell className={cn(
              'hidden tablet:table-cell px-0 py-6',
              'text-xs text-[#929292] font-medium leading-none break-all',
            )}>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className={cn(
                    "hidden tablet:block laptop:hidden",
                    "w-[140px] mr-[10px]"
                  )}>
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
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className={cn(
                    "hidden laptop:block",
                    'laptop:w-[131px] desktop:w-[216px]',
                    'laptop:mr-[10px] desktop:mr-[30px]'
                  )}>
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
            <TableCell className={cn(
              'hidden tablet:table-cell px-0 py-6',
              'text-xs text-[#929292] font-medium leading-none break-all',
            )}>
              <div className={cn(
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
              </div>
            </TableCell>

            {/* time */}
            <TableCell className="px-0 py-6 text-right text-xs text-black leading-none font-normal w-[110px]">
              {new Date(transaction.timestamp).toLocaleString('en-US', {
                year: 'numeric',
                month: 'numeric',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                hour12: false
              })}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>

      {/* mobile */}
      <TableBody className="table-row-group tablet:hidden">
        {data.map((transaction) => (
          <TableRow key={transaction.txid} className="hover:bg-transparent">
            <TableCell className={cn(
              "px-0 py-6 w-full",
            )}>
              <div className="flex items-start gap-3">
                <img src={SUPPORTED_TOKENS_INFO[tokenType].iconUrl} className="w-[28px] h-[28px]" />
                <div className="flex flex-col w-[300px]">
                  <span className="text-base font-bold leading-tight text-[#3d3d3d]">{transaction.type}</span>
                  <div className="flex flex-col gap-2 mt-[6px] text-xs text-[#929292] font-medium leading-none">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <div className="truncate cursor-pointer">
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
                          <div className="truncate cursor-pointer">
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
                    <div className="w-[300px]">
                      <div className="truncate cursor-pointer" onClick={() => openTxPage(transaction)}>
                        Transaction Hash: {transaction.txid}
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between mt-[20px]">
                    <p><span className="text-[#929292]">Network:</span> {SUPPORTED_TOKENS_INFO[tokenType].network}</p>
                    <div className="text-right">
                      <p className={cn(
                        "text-lg font-bold leading-tight",
                        transaction.type === 'receive' ? 'text-[#00a478]' : 'text-[#ff6363]'
                      )}>
                        {transaction.type === 'receive' ? '+' : '-'}
                        {formatBalance(transaction.value)} {SUPPORTED_TOKENS_INFO[tokenType].symbol}
                      </p>
                      <p>
                        {new Date(transaction.timestamp).toLocaleString('en-US', {
                          year: 'numeric',
                          month: 'numeric',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit',
                          hour12: false
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>

    </Table>
  )
}
