import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch?: (value: string) => void;
  defaultValue?: string;
}

export const SearchInput: React.FC<SearchInputProps> = ({ className, onSearch, defaultValue = '', ...props }) => {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    props.onChange?.(e);
  };

  const handleClear = () => {
    setValue('');
    // Simulate an input change event
    const event = new Event('input', { bubbles: true });
    const input = document.querySelector('input') as HTMLInputElement;
    input.value = '';
    input.dispatchEvent(event);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearch?.(value);
    }
  };

  return (
    <div className={cn(
      'w-[342px] tablet:w-[392px]',
      'flex items-center gap-2 bg-[#F5F5F5] rounded-full px-2 py-3',
      'focus-within:ring-1 focus-within:ring-black',
      className
    )}>
      <img src="/imgs/icons/search.svg" />
      <input
        type="text"
        placeholder="Search"
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className={cn(
          'bg-transparent w-full outline-none text-gray-700 placeholder-gray-400',
          'text-base leading-5'
        )}
        {...props}
      />
      {value && (
        <img
          src="/imgs/icons/clear.svg" 
          className="cursor-pointer w-4 h-4"
          onClick={handleClear}
        />
      )}
    </div>
  );
};
