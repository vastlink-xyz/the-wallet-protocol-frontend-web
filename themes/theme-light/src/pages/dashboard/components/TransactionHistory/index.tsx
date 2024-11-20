import { auth, cn, log } from "@/lib/utils";
import { Search } from "./Search";
import { TableList } from "./TableList";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import dayjs from "dayjs";
import { Empty } from "@/components/Empty";
import { WalletConnectButton } from "@/components/VastWalletConnect";
import { useTotalAsset } from "@/hooks/useTotalAsset";
import { useTransactionHistory } from "@/hooks/useTransactionHistory";

const defaultDates = [
  dayjs().subtract(1, 'month').startOf('day').toDate(),
  dayjs().endOf('day').toDate(),
] as [Date, Date]

export function TransactionHistory() {
  const { address } = auth.all()
  // const address = '0xf79d08f838a962756370c0f10343f7169ec12dc3'
  const [dates, setDates] = useState<[Date, Date]>(defaultDates)
  const [selectedToken, setSelectedToken] = useState('ALL');
  const { data: totalAsset } = useTotalAsset({
    enabled: !!address,
  })

  const { data: tableData, isLoading, refetch, error } = useTransactionHistory({
    enabled: !!address,
    startDate: dates[0].getTime(),
    endDate: dates[1].getTime(),
    tokenType: selectedToken === 'ALL' ? undefined : selectedToken,
  })

  useEffect(() => {
    handleSearch(defaultDates, 'ALL')
  }, [])

  useEffect(() => {
    if (error) {
      toast.error(error.message)
    }
  }, [error])

  const handleSearch = async (dates: [Date, Date], tokenType: string = 'ALL') => {
    setDates(dates)
    setSelectedToken(tokenType)
  }

  const handleTokenChange = (tokenType: string) => {
    setSelectedToken(tokenType)
    handleSearch(dates, tokenType)
  }

  const handleDatesChange = (dates: [Date, Date]) => {
    setDates(dates)
    handleSearch(dates, selectedToken)
  }

  const handleRefresh = async () => {
    await refetch()
    toast.success('Refresh successfully')
  }

  const handleDownloadCSV = () => {
    if (!tableData) return
    log('download csv')
    // prepare headers
    const headers = ['Date', 'Type', 'Token', 'Amount', 'Status'];
    const csvData = tableData.map(tx => [
      dayjs(tx.timestamp).format('YYYY-MM-DD HH:mm:ss'),
      tx.type,
      tx.token,
      tx.amount,
      tx.status
    ]);

    // generate csv content
    const csvContent = [
      headers.join(','),
      ...csvData.map(row => row.join(','))
    ].join('\n');

    // create and trigger download
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');

    link.setAttribute('href', url);
    link.setAttribute('download', `transaction-history-${dayjs().format('YYYY-MM-DD')}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  return (
    <div className="min-h-[500px]">
      <div className={cn(
        'text-[#111111] font-bold',
        'text-2xl tablet:text-[32px]',
        'mb-6'
      )}>History</div>

      {
        (totalAsset && !totalAsset.isZero) && (
          <div className="mb-[40px]">
            <Search
              onDateChange={handleDatesChange}
              dates={dates}
              onTokenChange={handleTokenChange}
              selectedToken={selectedToken}
              // onReset={handleReset}
              onDownloadCSV={handleDownloadCSV}
              onRefresh={handleRefresh}
            />
          </div>
        )
      }

      {
        !isLoading && tableData?.length === 0 ? (
          <div className="mt-[96px]">
            <Empty
              className="mx-auto w-[120px]"
              text="No transaction history now, but you can connect wallet and make a transfer!"
              imgSrc="/imgs/icons/history_empty.svg"
            />
            <WalletConnectButton className="mt-[24px]" buttonClassName="text-white bg-black rounded-full py-[10px] px-[16px] w-[173px]" />
          </div>
        ) : (
          <TableList data={tableData || []} />
        )
      }
    </div>
  )
}
