import React from 'react';

import { cn } from '../../libs';
import styles from './TransactionStatus.module.scss';

interface StatusProps {
  leftIcon?: React.ReactNode;
  status: string;
  className?: string;
  colorDisplay?: string;
  variant?: 'primary' | 'secondary';
}

export const TransactionStatus = ({
  // leftIcon,
  status,
  className,
  // colorDisplay,
  variant = 'primary',
}: StatusProps) => {
  return (
    <div
      className={cn(
        'flex items-center text-xs py-1.5 px-2 gap-2 border rounded',
        className,
        styles[variant],
      )}
    >
      <div className=" rounded-full bg-white w-3 h-3 p-[3px]">
        <div
          className={cn(
            ' rounded-full h-[6px]',
            variant === 'primary' ? 'bg-green-100' : 'bg-red-100',
          )}
        ></div>
      </div>
      {/* {leftIcon} */}
      {status}
    </div>
  );
};
