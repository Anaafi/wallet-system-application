import { InputHTMLAttributes } from 'react';

interface RadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id?: string;
  disabled?: boolean;
  name: string;
  value: string;
}

export function RadioButton({
  label,
  id,
  value,
  disabled = false,
  name,
  ...rest
}: RadioButtonProps) {
  return (
    <div className="flex gap-2">
      <input
        type="radio"
        value={value}
        id={id}
        name={name}
        disabled={disabled}
        {...rest}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}
