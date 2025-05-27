export const formatDecimal = (amount: string, decimal=6) => parseFloat(amount).toFixed(decimal)

export const trimTrailingZeros = (num: string) => num.replace(/\.?0+$/, '');

/**
 * Format balance to a specified decimal places and remove trailing zeros
 * @param amount The number to format (in string format)
 * @param decimal Number of decimal places to keep (defaults to 6)
 * @returns Formatted number string
 */
export const formatBalance = (amount: string, decimal=6) => {
  const formatted = formatDecimal(amount, decimal);
  return trimTrailingZeros(formatted);
}
