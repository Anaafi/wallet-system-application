import React from 'react';

import { EyeIcon, EyeOffIcon } from '../../assets/icons';
import { cn } from '../../libs';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id?: string;
  error?: string;
  rightIcon?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, id, error, type, className, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);
    return (
      <div className={cn('w-full', className)}>
        <label htmlFor={id} className="text-w-[14px] text-gray-g200">
          {label}
        </label>
        <div
          className={cn(
            'w-full py-3 px-4 flex justify-between items-center gap-4 border rounded mt-2',
            {
              'border-red-600': error,
            },
          )}
        >
          <input
            type={showPassword ? 'text' : type}
            className="border-none focus:outline-none w-full"
            {...props}
            ref={ref}
            id={id}
          />
          {type === 'password' && (
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <EyeIcon /> : <EyeOffIcon />}
            </button>
          )}
        </div>
        {error && <div className="text-red-600 text-xs">{error}</div>}
      </div>
    );
  },
);

//falsy : '', null, undefined, 0, false,
