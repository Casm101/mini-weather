import React, { SelectHTMLAttributes } from 'react';

import styles from './Dropdown.module.css';

export type DropdownOption<T extends string | number> = {
  value: T;
  label: string;
};

export type DropdownProps<T extends string | number> = Omit<
  SelectHTMLAttributes<HTMLSelectElement>,
  'onChange' | 'value'
> & {
  value: T;
  onChange: (value: T) => void;
  options: DropdownOption<T>[];
  placeholder?: string;
  disabled?: boolean;
  className?: string;
};

export function Dropdown<T extends string | number>({
  value,
  onChange,
  options,
  placeholder = 'Select an option',
  disabled = false,
  className = '',
  ...rest
}: DropdownProps<T>) {
  const handleChange: React.ChangeEventHandler<HTMLSelectElement> = e => {
    const rawValue = e.target.value;
    const matchedOption = options.find(option => String(option.value) === rawValue);

    onChange((matchedOption?.value ?? (rawValue as unknown as T)) as T);
  };

  return (
    <select
      value={String(value)}
      onChange={handleChange}
      disabled={disabled}
      className={[className, styles.dropdown].join(' ')}
      {...rest}
    >
      {placeholder && (
        <option value="" disabled hidden>
          {placeholder}
        </option>
      )}
      {options.map(option => (
        <option key={String(option.value)} value={String(option.value)}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export const DropdownWithLabel = <T extends string | number>({
  label,
  value,
  onChange,
  options,
  placeholder = 'Select an option',
  disabled = false,
  className = '',
  ...rest
}: DropdownProps<T> & { label: string }) => {
  return (
    <div className={[className, styles.dropdownWithLabel].join(' ')}>
      <label className={styles.label}>{label}</label>
      <Dropdown
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        options={options}
      />
    </div>
  );
};
