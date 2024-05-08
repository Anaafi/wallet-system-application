// filter.tsx

import { CloseIcon } from '../../../../assets';
import { Button, DropDown2, Input } from '../../../../components';
import { FilterType } from '../../../../interfaces';
import { RadioButton } from '../RadioButton';
// Assuming DropDown2 is in the same directory

interface FilterProps {
  onClose: () => void;
  isLoading: boolean;
  handleFilterChange: (...args: any) => void;
  filter: FilterType;
  applyFilter: () => void;
  handleDropdownFilterChange: (filters: any) => void;
}

export function Filter({
  onClose,
  filter,
  handleFilterChange,
  applyFilter,
  isLoading,
  handleDropdownFilterChange,
}: FilterProps) {
  return (
    <div className="w-[496px] h-screen bg-white">
      <div className="flex justify-between items-center py-6 px-8">
        <p className="text-[24px] text-gray-800 font-semibold">Filter</p>
        <button type="button" onClick={onClose}>
          <CloseIcon />
        </button>
      </div>
      <hr />
      <div className="px-8 pt-10">
        <div className="pb-8">
          <p>Transfer Type</p>
          <DropDown2
            selected={filter.transactionType}
            onSelect={handleDropdownFilterChange}
            options={['Wallet Transfer', 'Wallet Deposit']}
            name="transactionType"
          />
        </div>
        <div className="flex gap-[24px]">
          <Input
            label="Start Date"
            type="date"
            name="startDate"
            value={filter.startDate}
            onChange={handleFilterChange}
          />
          <Input
            label="End Date"
            type="date"
            name="endDate"
            onChange={handleFilterChange}
          />
        </div>
        <div className="flex flex-col gap-2 py-8">
          <p>Transaction Status</p>
          <div className="flex gap-[46px] ">
            <RadioButton
              label="Successful"
              value="Successful"
              name="transactionStatus"
              onChange={handleFilterChange}
            />
            <RadioButton
              label="Failed"
              value="Failed"
              name="transactionStatus"
              onChange={handleFilterChange}
            />
          </div>
        </div>
        <Button onClick={applyFilter} isLoading={isLoading}>
          Apply Search
        </Button>
      </div>
    </div>
  );
}
