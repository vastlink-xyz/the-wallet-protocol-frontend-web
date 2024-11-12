import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { cn, formatDecimal, formatNumberWithCommas } from "@/lib/utils"
import { formatEther } from "viem"

const tokenImages = {
  ETH: '/imgs/logos/eth.png',
  MATIC: '/imgs/logos/matic.png',
  TVWT: '/imgs/logos/tvwt.png',
}

export function TableList({ data }: { data: any[] }) {

  return (
    <Table>
      <TableHeader className="hidden tablet:table-header-group">
        <TableRow className="text-xs text-[#7b8293] leading-none hover:bg-transparent">
          <TableHead className="h-[16px] px-0 pb-[8px]">Transaction</TableHead>
          <TableHead className="h-[16px] px-0 pb-[8px]">Amount</TableHead>
          <TableHead className="hidden tablet:table-cell h-[16px] px-0 pb-[8px]">Network</TableHead>
          <TableHead className="hidden tablet:table-cell h-[16px] px-0 pb-[8px]">From</TableHead>
          <TableHead className="hidden tablet:table-cell h-[16px] px-0 pb-[8px]">To</TableHead>
          <TableHead className="h-[16px] px-0 pb-[8px] text-right">Time</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody className="hidden tablet:table-row-group">
        {data.map((transaction) => (
          <TableRow key={transaction.id} className="hover:bg-transparent">
            <TableCell className={cn(
              "px-0 py-6",
              'desktop:w-[150px] laptop:w-[150px]'
            )}>
              <div className="flex items-center gap-3">
                <img src={tokenImages[transaction.token as keyof typeof tokenImages]} alt={transaction.token} className="w-[28px] h-[28px]" />
                <span className="text-base font-bold leading-tight text-[#3d3d3d]">{transaction.type}</span>
              </div>
            </TableCell>
            <TableCell className={cn(
              "px-0 py-6",
              'desktop:w-[190px] laptop:w-[150px]'
            )}>
              <span className={cn(
                "text-lg font-bold leading-tight",
                transaction.type === 'Receive' ? 'text-[#00a478]' : 'text-[#ff6363]'
              )}>
                {transaction.type === 'Receive' ? '+' : '-'}{formatNumberWithCommas(formatEther(transaction.amount), 2)} {transaction.token}
              </span>
            </TableCell>
            {/* from */}
            <TableCell className={cn(
              "hidden tablet:table-cell px-0 py-6",
              'text-sm text-[#929292] font-medium leading-none',
              'tablet:w-[90px] laptop:w-[120px]'
            )}>
              {transaction.network}
            </TableCell>
            <TableCell className={cn(
              'hidden tablet:table-cell px-0 py-6',
              'text-xs text-[#929292] font-medium leading-none break-all',
            )}>
              <div className={cn(
                "hidden tablet:block laptop:hidden",
                'max-w-[110px] truncate',
              )}>
                {transaction.from}
              </div>
              <div className={cn(
                "hidden laptop:block desktop:hidden",
                'w-[141px] mr-[30px]',
              )}>
                {transaction.from}
              </div>
              <div className={cn(
                "hidden desktop:block",
                'w-[298px]',
              )}>
                {transaction.from}
              </div>
            </TableCell>
            {/* to */}
            <TableCell className={cn(
              'hidden tablet:table-cell px-0 py-6',
              'text-xs text-[#929292] font-medium leading-none break-all',
            )}>
              <div className={cn(
                "hidden tablet:block laptop:hidden",
                'max-w-[110px] truncate',
              )}>
                {transaction.to}
              </div>
              <div className={cn(
                "hidden laptop:block desktop:hidden",
                'w-[141px] mr-[30px]',
              )}>
                {transaction.to}
              </div>
              <div className={cn(
                "hidden desktop:block",
                'w-[298px]',
              )}>
                {transaction.to}
              </div>
            </TableCell>
            <TableCell className="px-0 py-6 text-right text-sm text-black leading-none font-normal w-[120px]">
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

      <TableBody className="table-row-group tablet:hidden">
        {data.map((transaction) => (
          <TableRow key={transaction.id} className="hover:bg-transparent">
            <TableCell className={cn(
              "px-0 py-6 w-[180px]",
            )}>
              <div className="flex items-center gap-3">
                <img src={tokenImages[transaction.token as keyof typeof tokenImages]} alt={transaction.token} className="w-[28px] h-[28px]" />
                <div className="flex flex-col">
                  <span className="text-base font-bold leading-tight text-[#3d3d3d]">{transaction.type}</span>
                  <div className="flex flex-col gap-1 mt-[6px] text-xs text-[#929292] font-medium leading-none break-all">
                    <p>From: {transaction.from}</p>
                    <p>To: {transaction.to}</p>
                    <p>Network: {transaction.network}</p>
                  </div>
                </div>
              </div>
            </TableCell>
            <TableCell className={cn(
              "px-0 py-6",
              'desktop:w-[190px] laptop:w-[150px]'
            )}>
            </TableCell>
            <TableCell className="px-0 py-6 text-right text-sm text-black leading-none font-normal w-[120px]">
              <p className={cn(
                "text-lg font-bold leading-tight",
                transaction.type === 'Receive' ? 'text-[#00a478]' : 'text-[#ff6363]'
              )}>
                {transaction.type === 'Receive' ? '+' : '-'}{formatNumberWithCommas(formatEther(transaction.amount), 2)} {transaction.token}
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
            </TableCell>
          </TableRow>
        ))}
      </TableBody>

    </Table>
  )
}
