'use client';
// Core
import { type FC } from 'react';

// Components
import * as BiIcons from 'react-icons/bi';

interface IconProps {
  icon: string;
  size: number;
  color: string;
  className?: string;
}

export const Icon: FC<IconProps> = ({ icon, size, color, className }) => {
  const SelectedIcon = BiIcons[icon as keyof typeof BiIcons];

  return <SelectedIcon className={className} size={size} color={color} />;
};
