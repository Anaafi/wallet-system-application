import { useState } from 'react';

import { cn } from '../../libs';

interface TransactionProps {
  options: string[];
  onSelect: (seletedOption: string) => void;
  className?: string;
}

export const DropDown = ({
  className,
  options,
  onSelect,
}: TransactionProps) => {
  const [seletedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    onSelect(option);
  };

  return (
    <div className={cn('flex flex-col gap-2 ', className)}>
      <label>Transaction Type</label>
      <select
        className={cn('py-4 px-4 w-full border rounded')}
        value={seletedOption || undefined}
        onChange={(event) => handleSelect(event.target.value)}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
