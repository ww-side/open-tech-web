'use client';
// Core
import { type FC, type ReactNode } from 'react';

interface TextProps {
  tag: 'p' | 'span';
  className?: string;
  children: ReactNode;
}

export const Text: FC<TextProps> = ({
  tag: Element = 'span',
  children,
  className,
}) => {
  return <Element className={className}>{children}</Element>;
};
