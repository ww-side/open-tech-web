// Core
import { ChangeEvent, type FC, ReactNode } from 'react';
import cx from 'classnames';

interface RadioButtonProps {
  name: string;
  value: string;
  selectedValue: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  children?: ReactNode;
  variant?: 'white' | 'blue';
}

export const RadioButton: FC<RadioButtonProps> = ({
  name,
  value,
  selectedValue,
  onChange,
  children,
  variant,
}) => {
  const styles =
    'px-4 py-2 font-light rounded-[30px] cursor-pointer transition duration-300';
  const buttonColor =
    variant === 'white'
      ? 'border border-white bg-steel-blue text-white'
      : 'bg-gray-200 text-black';
  const buttonSelectedColor =
    variant === 'white'
      ? 'border border-white bg-white text-black'
      : 'bg-steel-blue text-white';
  const radioButtonClasses = cx(styles, {
    [buttonSelectedColor]: selectedValue === value,
    [buttonColor]: selectedValue !== value,
  });

  return (
    <label className={radioButtonClasses}>
      <input
        hidden
        type="radio"
        name={name}
        value={value}
        onChange={onChange}
      />
      {children ? children : value}
    </label>
  );
};
