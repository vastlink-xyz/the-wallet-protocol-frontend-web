import { TokenType } from "@/types/tokens";
import { formatNumberWithCommas, symbolByToken } from "@/lib/utils";
import { TokenPrices } from "@/hooks/useTokenPrice";
import { TotalAmount } from "./useMultisender";

export function InsufficientBalanceAlert({
  tokenBalances,
  tokenPrices,  
  totalAmount,
  hasInsufficientBalance,
}: {
  tokenBalances: Record<TokenType, string>;
  tokenPrices: TokenPrices;
  totalAmount: TotalAmount;
  hasInsufficientBalance: boolean;
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
          {Object.keys(tokenBalances).map((token) => (
            parseFloat(totalAmount[token as TokenType] || '0') > parseFloat(tokenBalances[token as TokenType] || '0') && (
              <p key={token} className="text-xs text-black/50 font-normal leading-none mb-[4px]">
                {symbolByToken(token as TokenType)} balance: {formatNumberWithCommas(tokenBalances[token as TokenType] || '0')} {symbolByToken(token as TokenType)} ~{getUSDValue(tokenBalances[token as TokenType] || '0', token as TokenType)} USDT
              </p>
            )
          ))}
        </div>
      </div>
    </div>
  );
}
