'use client';
// Core
import { type FC, type ReactNode } from 'react';
import cx from 'classnames';

// Utils
import {
  ButtonColor,
  ButtonShape,
  ButtonSize,
} from '@/components/ui/Button/config';

interface ButtonProps {
  type: 'button' | 'submit' | 'reset';
  shape: keyof typeof ButtonShape;
  size: keyof typeof ButtonSize;
  color: keyof typeof ButtonColor;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export const Button: FC<ButtonProps> = ({
  type,
  size,
  children,
  color,
  shape,
  className,
  onClick,
  disabled,
}) => {
  const buttonClasses = cx(
    'select-none',
    'transition',
    'duration-300',
    'ease-in-out',
    ButtonSize[size],
    ButtonColor[color],
    ButtonShape[shape],
    className
  );

  return (
    <button
      disabled={disabled}
      type={type}
      className={buttonClasses}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
