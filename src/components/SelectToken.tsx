import { useState } from 'react';
import { SUPPORTED_TOKENS_ARRAY, TokenType } from '@/lib/web3/token';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from './ui/select';

export interface SelectTokenProps {
  /**
   * Callback function called when a token is selected
   */
  onSelect: (tokenSymbol: TokenType | "all") => void;

  /**
   * Default selected token
   * @default "BTC"
   */
  defaultValue?: TokenType | "all";

  /**
   * Optional CSS class name
   */
  className?: string;

  /**
   * Optional label for the select field
   */
  label?: string;

  /**
   * Whether to include an option for selecting all tokens
   */
  includeAllOption?: boolean;
}

/**
 * A component for selecting from available tokens
 */
export function SelectToken({
  onSelect,
  defaultValue = "BTC",
  className,
  label,
  includeAllOption = false,
}: SelectTokenProps) {
  const [selectedToken, setSelectedToken] = useState<TokenType | "all">(
    defaultValue
  );

  const handleChange = (value: string) => {
    const tokenSymbol = value as TokenType;
    setSelectedToken(tokenSymbol);
    onSelect(tokenSymbol);
  };

  return (
    <div className={className}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <Select
        value={selectedToken || 'all'}
        onValueChange={handleChange}
        defaultValue={defaultValue || 'all'}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select a token" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {label && <SelectLabel>{label}</SelectLabel>}
            {includeAllOption && (<SelectItem
              value="all"
              className="flex items-center"
            >
              <span className="ml-6">ALL</span>
            </SelectItem>)}
            {SUPPORTED_TOKENS_ARRAY.map((token) => (
              <SelectItem
                key={token.symbol}
                value={token.symbol}
                className="flex items-center gap-2"
              >
                {token.iconUrl && (
                  <img
                    src={token.iconUrl}
                    alt={token.symbol}
                    className="w-4 h-4 rounded-full"
                  />
                )}
                <span>{token.symbol}</span>
                <span className="text-gray-500 text-xs">({token.name})</span>
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
