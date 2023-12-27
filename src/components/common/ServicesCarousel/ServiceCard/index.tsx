// Core
import { type FC } from 'react';
import Image from 'next/image';

// Components
import { Title } from '@/components/ui';

interface ServiceCardProps {
  imgName: string;
  title: string;
}

export const ServiceCard: FC<ServiceCardProps> = ({ imgName, title }) => {
  return (
    <div className="select-none pointer-events-none">
      <Image
        src={`/img/our-services/${imgName}.svg`}
        alt={title}
        width={250}
        height={100}
      />
      <Title className="text-lg" tag="h3">
        {title}
      </Title>
    </div>
  );
};
