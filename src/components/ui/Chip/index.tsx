// Core
import { type FC, type ReactNode } from 'react';

// Components
import { Icon } from '@/components/ui';
import Image from 'next/image';

interface ChipProps {
  children: ReactNode;
  icon: string;
}

export const Chip: FC<ChipProps> = ({ children, icon }) => {
  return (
    <span className="rounded-2xl text-sm flex w-max justify-center items-center gap-1 px-2 py-1 select-none bg-white">
      <Image src={`/icons/${icon}.svg`} alt={icon} width={20} height={20} />
      <span>{children}</span>
    </span>
  );
};
