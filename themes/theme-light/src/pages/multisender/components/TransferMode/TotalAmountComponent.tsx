import { GasFees, TotalAmount } from "./useMultisender";
import { mergeGasFees } from "./helper";

export function TotalAmountComponent({
  totalAmount,
  gasFees,
}: {
  totalAmount: TotalAmount;
  gasFees: GasFees | null;
}) {
  const mergedGasFees = mergeGasFees(gasFees);

  const totalAmountBySymbol = (symbol: 'ETH' | 'TVWT' | 'POL') => {
    let amount = 0;
    try {
      if (symbol === 'POL') {
        const maticAmount = parseFloat(totalAmount.MATIC || '0');
        const polFees = parseFloat(mergedGasFees?.POL || '0');
        amount = maticAmount + polFees;
      } else if (symbol === 'ETH') {
        const ethAmount = parseFloat(totalAmount.ETH || '0');
        const ethFees = parseFloat(mergedGasFees?.ETH || '0');
        amount = ethAmount + ethFees;
      } else if (symbol === 'TVWT') {
        const tvwtAmount = parseFloat(totalAmount.TVWT || '0');
        amount = tvwtAmount;
      }

      if (amount === 0) {
        return null;
      }

      return {
        amount,
        symbol,
      }
    } catch (error) {
      console.error('Error calculating total amount:', error);
      return null;
    }
  }

  const items = () => {
    const items = [];

    items.push(totalAmountBySymbol('ETH'));
    items.push(totalAmountBySymbol('TVWT'));
    items.push(totalAmountBySymbol('POL'));

    return items.filter(item => item !== null);
  }

  const totalUsdValue = () => {
    const usdValue = parseFloat(totalAmount.usdValue);
    const gasFeesUsdValue = parseFloat(gasFees?.usdValue || '0');
    return usdValue + gasFeesUsdValue;
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
        {totalUsdValue() !== 0 &&
          ` (~$${totalUsdValue()} USD)`}
      </p>
    </>
  )
}
