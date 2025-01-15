import { Button } from "@/components/ui/button";
import { DailyTransactionLimitModal } from "./DailyTransactionLimitModal";
import { useState } from "react";
import { useDailyWithdrawalLimits } from "@/hooks/useDailyWithdrawalLimits";
import { theTokenListingService } from "@/services/TokenListingService";
import { useQueryClient } from "@tanstack/react-query";

export function DailyTransactionLimit() {
  const queryClient = useQueryClient()
  const { data: defaultLimits } = useDailyWithdrawalLimits()
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {
    setIsOpen(true)
  }

  const handleClose = (reload = false) => {
    setIsOpen(false)
    if (reload) {
      queryClient.invalidateQueries({ queryKey: ['dailyWithdrawalLimits'] })
    }
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
        {theTokenListingService.getAllTokens().map(t => (
          <p key={t.tokenType}>{defaultLimits[t.tokenType]} {t.symbol}</p>
        ))}
      </div>

      {/* mobile button */}
      <div className="text-center mt-4">
        <Button className="tablet:hidden h-[36px]" variant="outline" onClick={handleOpen}>Change limit</Button>
      </div>
    </div>

    {/* modal */}
    <DailyTransactionLimitModal
      isOpen={isOpen}
      onClose={handleClose}
      defaultLimits={defaultLimits}
    />
  </div>;
}
