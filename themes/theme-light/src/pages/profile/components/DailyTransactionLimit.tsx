import { Button } from "@/components/ui/button";
import { useTokenBalance } from "@/hooks/useTokenBalance";
import { DailyTransactionLimitModal } from "./DailyTransactionLimitModal";
import { useState } from "react";

export function DailyTransactionLimit() {
  const { data: ethBalance } = useTokenBalance('ETH')
  const { data: maticBalance } = useTokenBalance('MATIC')
  const { data: tvwtBalance } = useTokenBalance('TVWT')

  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {
    setIsOpen(true)
  }

  return <div className="pt-[36px]">
    <p className="text-black text-[22px] font-bold leading-normal">Settings</p>
    <div className="mt-[32px] border rounded-[8px] border-[#edf0f7] p-6">
      <p className="text-black text-xl font-bold leading-normal">Daily transaction limit</p>
      <div className="my-6 border-t border-[#dbdbdb]" />
      <div className="flex items-center justify-between">
        <p className="text-[#4f4f4f] text-base font-normal leading-relaxed">Manage how much you can transact daily for enhanced security and control.</p>
        {/* desktop button */}
        <Button className="hidden tablet:inline-block h-[36px]" variant="outline" onClick={handleOpen}>Change limit</Button>
      </div>
      <div className="text-[#929292] text-xs font-normal leading-relaxed mt-2 tablet:mt-1">
        <p>{ethBalance?.balance} ETH</p>
        <p>{maticBalance?.balance} MATIC</p>
        <p>{tvwtBalance?.balance} TVWT</p>
      </div>

      {/* mobile button */}
      <div className="text-center mt-4">
        <Button className="tablet:hidden h-[36px]" variant="outline" onClick={handleOpen}>Change limit</Button>
      </div>
    </div>

    {/* modal */}
    <DailyTransactionLimitModal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      ethBalance={ethBalance?.balance || '0'}
      maticBalance={maticBalance?.balance || '0'}
      tvwtBalance={tvwtBalance?.balance || '0'}
    />
  </div>;
}
