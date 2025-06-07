import { useState, useCallback } from "react";
import { SUPPORTED_TOKEN_SYMBOLS, SUPPORTED_TOKENS_INFO, TokenType } from "@/lib/web3/token";
import { Input } from "../ui/input";

interface DailyWithdrawLimitsProps {
  initialLimits: Record<TokenType, string>;
  onChange?: (limits: Record<TokenType, string>, isValid: boolean) => void;
}

export function DailyWithdrawLimits({ initialLimits, onChange }: DailyWithdrawLimitsProps) {
  const [tokenLimits, setTokenLimits] = useState<Record<TokenType, string>>(initialLimits);
  const [limitErrors, setLimitErrors] = useState<Record<TokenType, string>>({} as Record<TokenType, string>);

  // Validate all limits and set overall validity
  const validateAllLimits = useCallback((limits: Record<TokenType, string>, errors: Record<TokenType, string>) => {
    // Check if any field has an error or is empty
    const hasError = Object.values(errors).some(error => error !== '');
    const hasEmptyField = Object.values(limits).some(limit => limit === undefined || limit === null);
    
    return !hasError && !hasEmptyField;
  }, []);

  const handleLimitChange = (tokenType: TokenType, value: string) => {
    const newValue = value;
    const newLimits = { ...tokenLimits };
    const newErrors = { ...limitErrors };
    
    // Allow empty value so user can clear the input
    if (newValue === '') {
      newErrors[tokenType] = '';
      newLimits[tokenType] = "";
      setTokenLimits(newLimits);
      setLimitErrors(newErrors);
      
      const isValid = validateAllLimits(newLimits, newErrors);
      
      if (onChange) {
        onChange(newLimits, isValid);
      }
      return;
    }
    
    // Validate if input is a valid number
    const numberRegex = /^(0|[1-9]\d*)(\.\d+)?$/;
    if (!numberRegex.test(newValue)) {
      newErrors[tokenType] = 'Please enter a valid number';
      newLimits[tokenType] = newValue;
      setTokenLimits(newLimits);
      setLimitErrors(newErrors);
      
      const isValid = validateAllLimits(newLimits, newErrors);
      
      if (onChange) {
        onChange(newLimits, isValid);
      }
      return;
    }
    
    // Parse to number to ensure validity
    const numValue = parseFloat(newValue);
    if (isNaN(numValue) || numValue < 0) {
      newErrors[tokenType] = 'Please enter a number greater than or equal to 0';
      newLimits[tokenType] = newValue;
      setTokenLimits(newLimits);
      setLimitErrors(newErrors);
      
      const isValid = validateAllLimits(newLimits, newErrors);
      
      if (onChange) {
        onChange(newLimits, isValid);
      }
      return;
    }
    
    newErrors[tokenType] = '';
    newLimits[tokenType] = newValue;
    setTokenLimits(newLimits);
    setLimitErrors(newErrors);
    
    const isValid = validateAllLimits(newLimits, newErrors);
    
    if (onChange) {
      onChange(newLimits, isValid);
    }
  };

  return (
    <>
      {SUPPORTED_TOKEN_SYMBOLS.map(symbol => {
        const tokenInfo = SUPPORTED_TOKENS_INFO[symbol];
        return (
          <div key={symbol} className="flex flex-col space-y-2">
            <div className="flex items-center justify-between gap-2 mb-2">
              <div className="flex items-center gap-2">
                <img 
                  src={tokenInfo.iconUrl} 
                  alt={tokenInfo.symbol} 
                  className="w-4 h-4 rounded-full"
                />
                <span>{tokenInfo.symbol}</span>
                <span className="text-gray-500 text-xs">({tokenInfo.name})</span>
              </div>

              <Input 
                value={tokenLimits[symbol]} 
                onChange={(e) => handleLimitChange(symbol, e.target.value)} 
                placeholder="0.001"
                className="w-32"
              />
            </div>
            {limitErrors[symbol] && <p className="text-sm text-red-500">{limitErrors[symbol]}</p>}
          </div>
        );
      })}
    </>
  )
}

export const getDefaultDailyWithdrawLimits = (): Record<TokenType, string> => {
  const defaults: Record<TokenType, string> = {} as Record<TokenType, string>;
  SUPPORTED_TOKEN_SYMBOLS.forEach(symbol => {
    defaults[symbol] = SUPPORTED_TOKENS_INFO[symbol].defaultWithdrawLimit || "0";
  });
  return defaults;
}
