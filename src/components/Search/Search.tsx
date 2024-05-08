import React from 'react';

import { SearchIcon } from '../../assets/icons';
import { cn } from '../../libs';

interface SearchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onSearch: (search: string) => void;
}

export const Search = React.forwardRef<HTMLInputElement, SearchProps>(
  ({ className, onSearch, ...props }, ref) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      onSearch(event.target.value);
    };

    return (
      <div
        className={cn(
          'flex justify-between gap-2 items-center border rounded py-3 px-4 w-full',
          className,
        )}
      >
        <input
          className="border-none focus:outline-none  grow"
          type="text"
          placeholder="Search by name"
          {...props}
          ref={ref}
          onChange={handleInputChange}
        />
        <SearchIcon />
      </div>
    );
  },
);
