import { DailyTransactionLimitModal } from "@/pages/profile/components/DailyTransactionLimitModal";
import { useState } from "react";
import { formatDecimal } from "@/lib/utils";
import { TokenRecord, TokenType } from "@/types/tokens";
import { TotalAmount } from "./useMultisender";
import { parseEther } from "viem";
import { theTokenListingService } from "@/services/TokenListingService";

export function DailyLimitAlert({
  todayTokenTransferred,
  defaultLimits,
  totalAmount,
}: {
  todayTokenTransferred: TokenRecord<string>;
  defaultLimits: TokenRecord<string>;
  totalAmount: TotalAmount;
}) {
  const [isOpenDailyWithdrawalLimitModal, setIsOpenDailyWithdrawalLimitModal] = useState(false);

  const tokens: TokenType[] = theTokenListingService.getAllTokens().map(t => t.tokenType)
  const exceededTokens = tokens.filter(token => {
    const todayTransferred = BigInt(todayTokenTransferred[token]);
    const totalAmountValue = BigInt(parseEther(totalAmount[token]));
    const limit = BigInt(parseEther(defaultLimits[token]));
    return todayTransferred + totalAmountValue > limit;
  });

  if (exceededTokens.length === 0) return null;

  return (
    <>
      <div className="bg-black/5 rounded-lg border-b border-[#dbdbdb] py-[12px] px-[16px] mb-[24px]">
        <div className="flex items-start gap-[12px]">
          <img src="/imgs/icons/clear_filled.svg" />
          <div>
            {exceededTokens.map(token => (
              <p key={token} className="text-xs text-black font-normal leading-snug">
                {theTokenListingService.getToken(token).symbol} daily transaction limit exceeded. Current {theTokenListingService.getToken(token).symbol} limit: {formatDecimal(defaultLimits[token] || '0')} {theTokenListingService.getToken(token).symbol}
              </p>
            ))}
            <div
              className="flex items-center gap-1 text-xs text-black font-bold leading-none mt-[12px] cursor-pointer w-fit"
              onClick={() => setIsOpenDailyWithdrawalLimitModal(true)}
            >
              <span>Change limit</span>
              <img src="/imgs/icons/arrow_right.svg" className="w-[12px]" />
            </div>
          </div>
        </div>
      </div>

      {/* daily transaction limit modal */}
      <DailyTransactionLimitModal
        isOpen={isOpenDailyWithdrawalLimitModal}
        onClose={() => setIsOpenDailyWithdrawalLimitModal(false)}
        defaultLimits={defaultLimits}
      />
    </>
  );
}
