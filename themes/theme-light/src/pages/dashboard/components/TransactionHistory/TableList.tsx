import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Tooltip } from 'antd';
import { cn, formatDecimal, formatNumberWithCommas, log, symbolByToken } from "@/lib/utils"
import { formatEther } from "viem"
import { CopyClipboardAddress } from "@/components/CopyClipboardAddress";
import { TokenFactory } from "@/services/TokenService";

const tokenImages = {
  ETH: '/imgs/logos/eth.png',
  MATIC: '/imgs/logos/matic.png',
  TVWT: '/imgs/logos/tvwt.png',
}

/**
 * Format a large number with the following rules:
 * 1. Limit the total number of digits to maxDigits
 * 2. Add commas as thousand separators
 * 3. Keep decimal places if there's room within maxDigits
 * 
 * @param value - The number to format (in Wei)
 * @param maxDigits - Maximum number of digits to show (default: 10)
 * @returns Formatted string with commas and appropriate decimal places
 */
const formatLargeNumber = (value: string, maxDigits: number = 12) => {
  // Convert Wei to Ether and get string representation
  const formattedNumber = formatEther(BigInt(value));

  // Split into integer and decimal parts
  const [integerPart, decimalPart = ''] = formattedNumber.split('.');

  // Truncate integer part if it exceeds maxDigits
  const truncatedInteger = integerPart.length > maxDigits
    ? integerPart.slice(0, maxDigits)
    : integerPart;

  // Add thousand separators
  const withCommas = truncatedInteger.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  // Add decimal places if there's room within maxDigits
  const remainingDigits = maxDigits - truncatedInteger.length;
  const truncatedDecimal = remainingDigits > 0 && decimalPart
    ? '.' + decimalPart.slice(0, remainingDigits)
    : '';

  return withCommas + truncatedDecimal;
};

const openTxPage = (tx: any) => {
  const tokenInstance = TokenFactory.getInstance().createToken(tx.token)
  const url = `${tokenInstance.openUrl}/${tx.hash}`
  window.open(url, '_blank')
}

export function TableList({ data, isLoading }: { data: any[], isLoading: boolean }) {

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
          <TableRow key={transaction.id} className="hover:bg-transparent">
            {/* token */}
            <TableCell className={cn(
              "px-0 py-6",
              'desktop:w-[121px] laptop:w-[121px] tablet:w-[100px]'
            )}>
              <div className="flex items-center gap-3">
                <img src={tokenImages[transaction.token as keyof typeof tokenImages]} alt={transaction.token} className="w-[28px] h-[28px]" />
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
                transaction.type === 'Receive' ? 'text-[#00a478]' : 'text-[#ff6363]'
              )}>
                {transaction.type === 'Receive' ? '+' : '-'}
                {formatLargeNumber(transaction.amount)} {symbolByToken(transaction.token)}
              </span>
            </TableCell>

            {/* network */}
            <TableCell className={cn(
              "hidden tablet:table-cell px-0 py-6",
              'text-[#929292] font-medium leading-none',
              'text-xs desktop:text-sm',
              'tablet:w-[70px] laptop:w-[90px] desktop:w-[120px]',
            )}>
              {transaction.network}
            </TableCell>

            {/* from */}
            <TableCell className={cn(
              'hidden tablet:table-cell px-0 py-6',
              'text-xs text-[#929292] font-medium leading-none break-all',
            )}>
              <div className={cn(
                "hidden tablet:block laptop:hidden",
                'max-w-[104px] mr-[10px]',
              )}>
                <Tooltip
                  title={
                    <CopyClipboardAddress
                      address={transaction.from}
                      className="text-white text-xs"
                      iconClassName="text-white"
                      iconSize={14}
                    />
                  }
                  trigger="hover"
                  placement="top"
                  overlayClassName="max-w-full"
                >
                  <div
                    className="cursor-pointer"
                    style={{
                      display: '-webkit-box',
                      WebkitBoxOrient: 'vertical',
                      WebkitLineClamp: 2,
                      overflow: 'hidden',
                      wordBreak: 'break-word'
                    }}
                  >
                    {transaction.from}
                  </div>
                </Tooltip>
              </div>
              <div className={cn(
                "hidden laptop:block",
                'laptop:w-[131px] desktop:w-[216px]',
                'laptop:mr-[10px] desktop:mr-[30px]'
              )}>
                <Tooltip
                  title={
                    <CopyClipboardAddress
                      address={transaction.from}
                      className="text-white text-xs"
                      iconClassName="text-white"
                      iconSize={14}
                    />
                  }
                  trigger="hover"
                  placement="top"
                  overlayClassName="max-w-full"
                >
                  <div className="truncate cursor-pointer">
                    {transaction.from}
                  </div>
                </Tooltip>
              </div>
            </TableCell>

            {/* to */}
            <TableCell className={cn(
              'hidden tablet:table-cell px-0 py-6',
              'text-xs text-[#929292] font-medium leading-none break-all',
            )}>
              <div className={cn(
                "hidden tablet:block laptop:hidden",
                'max-w-[104px] mr-[10px]',
              )}>
                <Tooltip
                  title={
                    <CopyClipboardAddress
                      address={transaction.to}
                      className="text-white text-xs"
                      iconClassName="text-white"
                      iconSize={14}
                    />
                  }
                  trigger="hover"
                  placement="top"
                  overlayClassName="max-w-full"
                >
                  <div
                    className="cursor-pointer"
                    style={{
                      display: '-webkit-box',
                      WebkitBoxOrient: 'vertical',
                      WebkitLineClamp: 2,
                      overflow: 'hidden',
                      wordBreak: 'break-word'
                    }}
                  >
                    {transaction.to}
                  </div>
                </Tooltip>
              </div>
              <div className={cn(
                "hidden laptop:block",
                'laptop:w-[131px] desktop:w-[216px]',
                'laptop:mr-[10px] desktop:mr-[30px]'
              )}>
                <Tooltip
                  title={
                    <CopyClipboardAddress
                      address={transaction.to}
                      className="text-white text-xs"
                      iconClassName="text-white"
                      iconSize={14}
                    />
                  }
                  trigger="hover"
                  placement="top"
                  overlayClassName="max-w-full"
                >
                  <div className="truncate cursor-pointer">
                    {transaction.to}
                  </div>
                </Tooltip>
              </div>
            </TableCell>

            {/* transaction hash */}
            <TableCell className={cn(
              'hidden tablet:table-cell px-0 py-6',
              'text-xs text-[#929292] font-medium leading-none break-all',
            )}>
              <div className={cn(
                "hidden tablet:block laptop:hidden",
                'max-w-[104px] mr-[5px]',
              )}>
                <div
                  className="cursor-pointer"
                  style={{
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 2,
                    overflow: 'hidden',
                    wordBreak: 'break-word'
                  }}
                  onClick={() => openTxPage(transaction)}
                >
                  {transaction.hash}
                </div>
              </div>
              <div className={cn(
                "hidden laptop:block",
                'laptop:w-[131px] desktop:w-[216px]',
                'laptop:mr-[10px] desktop:mr-[30px]'
              )}>
                <div className="truncate cursor-pointer" onClick={() => openTxPage(transaction)}>
                  {transaction.hash}
                </div>
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
          <TableRow key={transaction.id} className="hover:bg-transparent">
            <TableCell className={cn(
              "px-0 py-6 w-full",
            )}>
              <div className="flex items-start gap-3">
                <img src={tokenImages[transaction.token as keyof typeof tokenImages]} alt={transaction.token} className="w-[28px] h-[28px]" />
                <div className="flex flex-col w-[300px]">
                  <span className="text-base font-bold leading-tight text-[#3d3d3d]">{transaction.type}</span>
                  <div className="flex flex-col gap-2 mt-[6px] text-xs text-[#929292] font-medium leading-none">
                    <Tooltip
                      title={
                        <CopyClipboardAddress
                          address={transaction.to}
                          className="text-white text-xs"
                          iconClassName="text-white"
                          iconSize={14}
                        />
                      }
                      trigger="click"
                      placement="top"
                      overlayClassName="max-w-full"
                    >
                      <div className="truncate cursor-pointer">
                        From: {transaction.from}
                      </div>
                    </Tooltip>
                    <Tooltip
                      title={
                        <CopyClipboardAddress
                          address={transaction.to}
                          className="text-white text-xs"
                          iconClassName="text-white"
                          iconSize={14}
                        />
                      }
                      trigger="click"
                      placement="top"
                      overlayClassName="max-w-full"
                    >
                      <div className="truncate cursor-pointer">
                        To: {transaction.to}
                      </div>
                    </Tooltip>
                    <div className="w-[300px]">
                      <div className="truncate cursor-pointer" onClick={() => openTxPage(transaction)}>
                        Transaction Hash: {transaction.hash}
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between mt-[20px]">
                    <p><span className="text-[#929292]">Network:</span> {transaction.network}</p>
                    <div className="text-right">
                      <p className={cn(
                        "text-lg font-bold leading-tight",
                        transaction.type === 'Receive' ? 'text-[#00a478]' : 'text-[#ff6363]'
                      )}>
                        {transaction.type === 'Receive' ? '+' : '-'}
                        {formatLargeNumber(transaction.amount)} {transaction.token}
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
