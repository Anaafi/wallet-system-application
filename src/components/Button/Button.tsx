import React from 'react';

import { cn } from '../../libs';
import { Spinner } from '../Spinner';
import styles from './Button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isLoading?: boolean;
  variant?: 'primary' | 'secondary' | 'tertiary';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  leftIcon,
  rightIcon,
  isLoading,
  variant = 'primary',
  className,
  ...props
}) => {
  return (
    <button
      {...props}
      className={cn(
        'flex justify-center items-center gap-2 w-full',
        className,
        styles[`${variant}`],
      )}
    >
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {leftIcon}
          {children}
          {rightIcon}
        </>
      )}
    </button>
  );
};
