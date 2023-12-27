// Core
import Image from 'next/image';
import { type FC } from 'react';

// Components
import { Text } from '@/components/ui';

// Definitions
import { type OurTechnologyType } from '@/types/ourTechnology';

interface TechnologyIconProps {
  item: OurTechnologyType;
  size: number;
}

export const TechnologyIcon: FC<TechnologyIconProps> = ({ item, size }) => {
  return (
    <div className="flex flex-col items-center justify-center select-none pointer-events-none relavite">
      <Image
        className="absolute inset-y-auto mb-4"
        src={`/icons/${item.icon}.svg`}
        alt={item.icon}
        loading="lazy"
        width={size}
        height={size}
      />
      <Text className="text-sm absolute bottom-0" tag="p">
        {item.title}
      </Text>
    </div>
  );
};
