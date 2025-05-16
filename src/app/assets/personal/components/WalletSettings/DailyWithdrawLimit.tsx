import { useState } from 'react';
import { Input } from "@/components/ui/input";

interface DailyWithdrawLimitProps {
  onLimitChange: (value: string, isValid: boolean) => void;
  value: string;
}

export function DailyWithdrawLimit({ 
  onLimitChange,
  value
}: DailyWithdrawLimitProps) {
  const [error, setError] = useState<string>('');
  
  const handleLimitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    let isValid = true;
    
    // Allow empty value so user can clear the input
    if (newValue === '') {
      setError('');
      onLimitChange(newValue, false);
      return;
    }
    
    // Validate if input is a valid number
    const numberRegex = /^(0|[1-9]\d*)(\.\d+)?$/;
    if (!numberRegex.test(newValue)) {
      setError('Please enter a valid number');
      onLimitChange(newValue, false);
      return;
    }
    
    // Parse to number to ensure validity
    const numValue = parseFloat(newValue);
    if (isNaN(numValue) || numValue < 0) {
      setError('Please enter a number greater than or equal to 0');
      onLimitChange(newValue, false);
      return;
    }
    
    setError('');
    onLimitChange(newValue, true);
  };
  
  return (
    <div className="space-y-4">
      <h2>Daily Withdraw Limit</h2>
      <div className="flex flex-col space-y-2">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <Input 
              value={value} 
              onChange={handleLimitChange} 
              placeholder="0.001"
              className="w-32"
            />
            <span className="font-medium">ETH</span>
          </div>
        </div>
        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>
    </div>
  );
}