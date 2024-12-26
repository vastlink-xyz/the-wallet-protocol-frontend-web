import { GasFees, TotalAmount } from "./useMultisender";
import { mergeGasFees } from "./helper";
import { ERC20TokenType, GasFeeSymbol } from "@/types/tokens";
import { theTokenService } from "@/services/TokenService";
import { formatDecimal, formatNumberWithCommas, log, trimTrailingZeros } from "@/lib/utils";

export function TotalAmountComponent({
  totalAmount,
  gasFees,
}: {
  totalAmount: TotalAmount;
  gasFees: GasFees | null;
}) {
  const mergedGasFees = mergeGasFees(gasFees);

  const totalAmountByGasSymbol = (symbol: GasFeeSymbol) => {
    const nativeTokenType = theTokenService.getNativeTokenTypeByGasSymbol(symbol);
    let amount = 0;
    if (nativeTokenType) {
      amount = parseFloat(totalAmount[nativeTokenType] || '0') + parseFloat(mergedGasFees?.[symbol] || '0');
    } else {
      amount = parseFloat(mergedGasFees?.[symbol] || '0');
    }
    if (!amount) {
      return null;
    }

    return {
      amount: trimTrailingZeros(formatDecimal(amount.toString(), 18)),
      symbol,
    }
  }

  const totalAmountByERC20TokenType = (symbol: ERC20TokenType) => {
    const tokenType = symbol as ERC20TokenType;
    const amount = parseFloat(totalAmount[tokenType] || '0')
    if (!amount) {
      return null;
    }

    return {
      amount: trimTrailingZeros(formatDecimal(amount.toString())),
      symbol: tokenType,
    }
  }

  const items = () => {
    const items: ({ amount: string; symbol: GasFeeSymbol | ERC20TokenType; } | null)[] = [];

    // add all gas symbols
    Object.values(GasFeeSymbol).forEach(symbol => {
      items.push(totalAmountByGasSymbol(symbol));
    });

    // add all ERC20 tokens
    theTokenService.getAllTokens()
      .filter(token => theTokenService.isERC20Token(token.tokenType))
      .forEach(token => {
        items.push(totalAmountByERC20TokenType(token.tokenType as ERC20TokenType));
      });

    return items.filter(item => item !== null);
  }

  const totalUsdValue = () => {
    const usdValue = parseFloat(totalAmount.usdValue);
    const gasFeesUsdValue = parseFloat(gasFees?.usdValue || '0');
    const totalUsdValue = usdValue + gasFeesUsdValue;
    return formatNumberWithCommas(totalUsdValue.toString());
  }

  return (
    <>
      <div className="mt-[16px] text-[#929292] text-sm font-normal leading-none flex items-center justify-end gap-1">
        <p>Total amount:</p>
      </div>
      <p className="text-black text-xl font-medium leading-none text-right mt-0.5">
        {items().map((item, index, array) => (
          <span key={index}>
            {item.amount} {item.symbol}
            {index < array.length - 1 && ' & '}
          </span>
        ))}
        {parseFloat(totalUsdValue()) !== 0 &&
          ` (~$${totalUsdValue()} USD)`}
      </p>
    </>
  )
}
