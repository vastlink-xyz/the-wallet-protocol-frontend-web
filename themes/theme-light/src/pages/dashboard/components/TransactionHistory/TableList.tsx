import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { cn } from "@/lib/utils"
import { TransactionItem } from ".";

interface TableListProps {
  data: TransactionItem[];
}

export function TableList({ data }: TableListProps) {
  return (
    <Table>
      <TableHeader className="">
        <TableRow className="text-xs text-[#7b8293] leading-none">
          <TableHead className="h-[16px] px-0 pb-[8px]">Transaction</TableHead>
          <TableHead className="h-[16px] px-0 pb-[8px]">Amount</TableHead>
          <TableHead className="hidden tablet:table-cell h-[16px] px-0 pb-[8px]">Network</TableHead>
          <TableHead className="hidden tablet:table-cell h-[16px] px-0 pb-[8px]">Receiving Wallet</TableHead>
          <TableHead className="h-[16px] px-0 pb-[8px] text-right">Time</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {data.map((transaction) => (
          <TableRow key={transaction.id}>
            <TableCell className="px-0 py-6">
              <div className="flex items-center gap-3">
                <img src="/imgs/logos/eth.png" alt="send" className="w-[28px] h-[28px]" />
                <div className="flex flex-col">
                  <span className="text-base font-bold leading-tight text-[#3d3d3d]">{transaction.type}</span>
                  {transaction.from && (
                    <p className={cn(
                      'text-xs text-[#929292] font-medium leading-none break-all',
                      'max-w-[137px] tablet:max-w-[191px] laptop:max-w-[236px]'
                    )}>From {transaction.from}</p>
                  )}
                </div>
              </div>
            </TableCell>
            <TableCell className="px-0 py-6">
              <span className={cn(
                "text-lg font-bold leading-tight",
                transaction.type === 'Receive' ? 'text-[#00a478]' : 'text-[#929292]'
              )}>
                {transaction.type === 'Receive' ? '+' : '-'}{transaction.amount} {transaction.token}
              </span>
            </TableCell>
            <TableCell className="hidden tablet:table-cell px-0 py-6">{transaction.network}</TableCell>
            <TableCell className="hidden tablet:table-cell px-0 py-6">{transaction.receivingWallet}</TableCell>
            <TableCell className="px-0 py-6 text-right">{transaction.time}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
