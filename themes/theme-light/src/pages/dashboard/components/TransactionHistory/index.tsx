import { auth, cn, handleError, log } from "@/lib/utils";
import { Search } from "./Search";
import { TableList } from "./TableList";
import { useEffect, useState } from "react";
import api from "@/lib/api";
import { toast } from "react-toastify";

export function TransactionHistory() {
  const { address } = auth.all()
  const [tableData, setTableData] = useState([])

  useEffect(() => {
    initTableData()
  }, [])

  const handleSearch = async (data: any[]) => {
  }

  const initTableData = async () => {
    try {
      const res = await api.get('/user-assets/transaction-history', {
        params: {
        address
      }
      })
      setTableData(res.data)
    } catch (error) {
      const errInfo = handleError(error)
      toast.error(errInfo.message)
    }
  }

  return (
    <div>
      <div className={cn(
        'text-[#111111] font-bold',
        'text-2xl mobile:text-[32px]',
        'mb-6'
      )}>History</div>

      <div className="mb-[40px]">
        <Search />
      </div>

      <TableList data={tableData} />
    </div>
  )
}
