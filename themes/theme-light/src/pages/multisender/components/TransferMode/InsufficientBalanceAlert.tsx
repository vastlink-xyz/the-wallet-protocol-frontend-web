import { TokenType } from "@/types/tokens";
import { formatNumberWithCommas, symbolByToken } from "@/lib/utils";
import { TokenPrices } from "@/hooks/useTokenPrice";
import { GasFees, TotalAmount } from "./useMultisender";

export function InsufficientBalanceAlert({
  tokenBalances,
  tokenPrices,  
  totalAmount,
  hasInsufficientBalance,
  gasFees,
}: {
  tokenBalances: Record<TokenType, string>;
  tokenPrices: TokenPrices;
  totalAmount: TotalAmount;
  hasInsufficientBalance: boolean;
  gasFees: GasFees | null;
}) {

  if (!hasInsufficientBalance) return null;

  const getUSDValue = (amount: string, token: TokenType) => {
    if (!tokenPrices?.[token]) return '0';
    return formatNumberWithCommas((parseFloat(amount) * parseFloat(tokenPrices[token])).toString(), 2);
  };

  return (
    <div className="bg-black/5 rounded-lg border-b border-[#dbdbdb] py-[12px] px-[16px] mb-[24px]">
      <div className="flex items-start gap-[12px]">
        <img src="/imgs/icons/clear_filled.svg" />
        <div>
          <p className="text-sm text-black font-bold leading-none mb-[8px]">Insufficient balance:</p>
          {Object.keys(tokenBalances).map((token) => {
            const tokenType = token as TokenType;
            const balance = parseFloat(tokenBalances[tokenType] || '0');
            const transferAmount = parseFloat(totalAmount[tokenType] || '0');
            const gasFeeAmount = gasFees && gasFees[tokenType] ? parseFloat(gasFees[tokenType]!) : 0;
            const totalExpense = transferAmount + gasFeeAmount;

            return totalExpense > balance && (
              <div key={token} className="mb-3">
                <p className="text-xs text-black/50 font-normal leading-none mb-[4px]">
                  {symbolByToken(tokenType)} balance: {formatNumberWithCommas(balance.toString(), 6)} {symbolByToken(tokenType)} ~{getUSDValue(balance.toString(), tokenType)} USDT
                </p>
                <p className="text-xs text-black/50 font-normal leading-none mb-[4px]">
                  Required: {formatNumberWithCommas(totalExpense.toString(), 6)} {symbolByToken(tokenType)} (Transfer: {formatNumberWithCommas(transferAmount.toString(), 6)} + Gas: {formatNumberWithCommas(gasFeeAmount.toString(), 6)})
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
