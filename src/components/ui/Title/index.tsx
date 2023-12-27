'use client';
// Core
import { type FC, type ReactNode } from 'react';
import cx from 'classnames';

// Utils
import { TitleTag } from '@/components/ui/Title/config';

interface TitleProps {
  tag: keyof typeof TitleTag;
  className?: string;
  children: ReactNode;
}

export const Title: FC<TitleProps> = ({
  tag: Element = 'h2',
  children,
  className,
}) => {
  const titleClasses = cx(TitleTag[Element], className);

  return <Element className={titleClasses}>{children}</Element>;
};
