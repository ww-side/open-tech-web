// Core
import { type FC, forwardRef, type TextareaHTMLAttributes } from 'react';
import cx from 'classnames';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  placeholder: string;
  variant?: 'white' | 'gray';
  className?: string;
}

export const TextArea: FC<TextAreaProps> = forwardRef<
  HTMLTextAreaElement,
  TextAreaProps
>(({ placeholder, variant, className, ...props }, ref) => {
  const styles =
    'w-full resize-none outline-none rounded-xl px-5 py-3 text-lg font-light h-44';
  const bgColor = variant === 'white' ? 'bg-white' : 'bg-gray-100';
  const textareaClasses = cx(styles, bgColor, className);

  return (
    <textarea
      className={textareaClasses}
      ref={ref}
      placeholder={placeholder}
      {...props}
    />
  );
});

TextArea.displayName = 'TextArea';
