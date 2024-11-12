import { Back } from "@/components/Back";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import api from "@/lib/api";
import { auth, cn, formatDecimal, formatNumberWithCommas, handleError, log } from "@/lib/utils";
import { Progress } from "antd";
import { RefreshCcw } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const tokenImages = {
  ETH: '/imgs/logos/eth.png',
  MATIC: '/imgs/logos/matic.png',
  TVWT: '/imgs/logos/tvwt.png',
}

export default function ViewAllPage() {
  const { address } = auth.all()

  const [tableData, setTableData] = useState<any[]>([])

  useEffect(() => {
    init()
  }, [])

  const init = async () => {
    try {
      const res = await api('/user-assets/asset-distribution', {
        params: {
          address
        }
      });
      log('ress', res)
      setTableData(res.data.assetDistribution)
    } catch (err) {
      const errInfo = handleError(err)
      toast.error(errInfo.message)
    }
  }

  return <div>
    <div className="flex items-center justify-between mt-[46px] mb-[52px] text-[#52c41a]">
      <Back />
      <RefreshCcw
        size={22}
        className="cursor-pointer ml-4 text-2xl hover:scale-125 hover:rotate-180 transition duration-300"
        onClick={() => init()}
      />
    </div>

    <Table>
      <TableHeader className="">
        <TableRow className="text-xs text-[#7b8293] leading-none hover:bg-transparent">
          <TableHead className="h-[16px] px-0 pb-[8px]">Asset</TableHead>
          <TableHead className="h-[16px] px-0 pb-[8px]">Price</TableHead>
          <TableHead className="h-[16px] px-0 pb-[8px] text-right tablet:text-left">Balance</TableHead>
          <TableHead className="hidden tablet:table-cell h-[16px] px-0 pb-[8px]">Proportion</TableHead>
          <TableHead className="hidden tablet:table-cell h-[16px] px-0 pb-[8px] text-right"></TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {tableData.map((item) => (
          <TableRow key={item.token} className="hover:bg-transparent">
            <TableCell className="px-0 py-6">
              <div className="flex items-center gap-3">
                <img src={tokenImages[item.token as keyof typeof tokenImages]} alt="img" className="w-[28px] h-[28px]" />
                <div className="flex flex-col">
                  <span className="text-base font-bold leading-tight text-[#3d3d3d]">{item.token}</span>
                </div>
              </div>
            </TableCell>
            <TableCell className="px-0 py-6">
              <div>
                <p className="text-sm font-normal leading-snug text-black">${formatNumberWithCommas(item.price)}</p>
                <p className={cn(
                  "text-sm font-normal leading-snug text-black",
                  item.priceChange.startsWith('+') ? 'text-[#52c41a]' : 'text-[#ff0004]'
                )}>{item.priceChange}</p>
              </div>
            </TableCell>
            <TableCell className="px-0 py-6 text-right tablet:text-left">
              <p className="text-sm font-normal leading-snug text-black">{formatDecimal(item.balance)}</p>
              <p className="text-sm font-normal leading-snug text-[#828282]">${formatNumberWithCommas(item.value)}</p>
            </TableCell>
            <TableCell className="hidden tablet:table-cell px-0 py-6">
              <div>
                <Progress percent={parseFloat(item.proportion)} strokeColor={'#52c41a'} strokeWidth={12} />
              </div>
            </TableCell>
            <TableCell className="hidden tablet:table-cell px-0 py-6">
              <div className="flex items-center justify-end gap-[17px]">
                <img className="cursor-pointer" src="/imgs/icons/send.svg" alt="" />
                <img className="cursor-pointer" src="/imgs/icons/receive.svg" alt="" />
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>;
}