export const formatDecimal = (amount: string, decimal=6) => parseFloat(amount).toFixed(decimal)

export const trimTrailingZeros = (num: string) => num.replace(/\.?0+$/, '');

/**
 * Format balance to a specified decimal places and remove trailing zeros
 * @param amount The number to format (in string format)
 * @param decimal Number of decimal places to keep (defaults to 6)
 * @param useCommas Whether to add comma separators (defaults to true)
 * @returns Formatted number string
 */
export const formatBalance = (amount: string, decimal=6, useCommas: boolean = true) => {
  const formatted = formatDecimal(amount, decimal);
  const trimmed = trimTrailingZeros(formatted);
  
  // Add comma formatting if requested
  if (useCommas) {
    const parts = trimmed.split('.');
    const integerPart = parts[0];
    const decimalPart = parts[1];
    
    // Add commas to integer part
    const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    
    // Combine integer and decimal parts
    return decimalPart ? `${formattedInteger}.${decimalPart}` : formattedInteger;
  }
  
  return trimmed;
}
