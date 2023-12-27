'use client';
// Core
import { forwardRef, HTMLProps } from 'react';
import cx from 'classnames';

interface InputProps extends Omit<HTMLProps<HTMLInputElement>, 'ref'> {
  placeholder: string;
  className?: string;
  variant?: 'white' | 'gray';
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type, placeholder, variant = 'gray', className, ...rest }, ref) => {
    const styles =
      'outline-none rounded-xl px-5 py-3 text-lg font-light w-full';
    const bgColor = variant === 'white' ? 'bg-white' : 'bg-gray-100';
    const inputClasses = cx(styles, bgColor, className);

    return (
      <input
        className={inputClasses}
        type={type}
        placeholder={placeholder}
        ref={ref}
        {...rest}
      />
    );
  }
);

Input.displayName = 'Input';
