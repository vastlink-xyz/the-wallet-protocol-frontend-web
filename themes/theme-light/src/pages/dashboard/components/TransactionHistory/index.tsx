import { auth, cn, handleError, log } from "@/lib/utils";
import { Search } from "./Search";
import { TableList } from "./TableList";
import { useEffect, useState } from "react";
import api from "@/lib/api";
import { toast } from "react-toastify";
import dayjs from "dayjs";
import { Empty } from "@/components/Empty";
import { WalletConnectButton } from "@/components/VastWalletConnect";

const defaultDates = [
  dayjs().subtract(1, 'month').startOf('day').toDate(),
  dayjs().endOf('day').toDate(),
] as [Date, Date]

export function TransactionHistory() {
  const { address } = auth.all()
  const [dates, setDates] = useState<[Date, Date]>(defaultDates)
  const [tableData, setTableData] = useState<any[]>([])
  const [historyData, setHistoryData] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [selectedToken, setSelectedToken] = useState('ALL');

  useEffect(() => {
    handleSearch(defaultDates, 'ALL')
  }, [])

  const handleSearch = async (dates: [Date, Date], tokenType: string = 'ALL') => {
    setDates(dates)
    const startDate = dates[0].getTime()
    const endDate = dates[1].getTime()
    try {
      setLoading(true)
      const res = await api.get('/user-assets/transaction-history', {
        params: {
          address,
          // address: '0xf79d08f838a962756370c0f10343f7169ec12dc3',
          startDate,
          endDate
        }
      })
      setHistoryData(res.data)
      // set table data
      if (tokenType === 'ALL') {
        setTableData(res.data.slice())
      } else {
        setTableData(res.data.filter((t: any) => {
          return t.token === tokenType
        }))
      }
    } catch (error) {
      const errInfo = handleError(error)
      toast.error(errInfo.message)
    } finally {
      setLoading(false)
    }
  }

  const handleTokenChange = (tokenType: string) => {
    setSelectedToken(tokenType)
    if (tokenType === 'ALL') {
      setTableData(historyData.slice())
    } else {
      setTableData(historyData.filter(t => {
        return t.token === tokenType
      }))
    }
  }

  const handleReset = () => {
    setSelectedToken('ALL');
    setDates(defaultDates)
    handleSearch(defaultDates, 'ALL');
  }

  const handleDownloadCSV = () => {
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
        'text-2xl mobile:text-[32px]',
        'mb-6'
      )}>History</div>

      <div className="mb-[40px]">
        <Search
          onDateChange={(dates) => handleSearch(dates, selectedToken)}
          dates={dates}
          onTokenChange={handleTokenChange}
          selectedToken={selectedToken}
          onReset={handleReset}
          onDownloadCSV={handleDownloadCSV}
        />
      </div>

      {
        !loading && tableData.length === 0 ? (
          <div className="mt-[96px]">
            <Empty
              className="mx-auto w-[120px]"
              text="No transaction history now, but you can connect wallet and make a transfer!"
              imgSrc="/imgs/icons/history_empty.svg"
            />
            <WalletConnectButton className="mt-[24px]" buttonClassName="text-white bg-black rounded-full py-[10px] px-[16px] w-[173px]" />
          </div>
        ) : (
          <TableList data={tableData} />
        )
      }
    </div>
  )
}
