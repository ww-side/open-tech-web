// Core
import { type FC } from 'react';
import { v4 as uuid } from 'uuid';

// Components
import { AppCarousel, ServiceCard } from '@/components/common';

// Utils
import { ourServices } from '@/data/ourServices';

export const ServicesCarousel: FC = () => {
  return (
    <AppCarousel playSpeed={500}>
      {ourServices.map(service => (
        <ServiceCard
          key={uuid()}
          imgName={service.imgName}
          title={service.title}
        />
      ))}
    </AppCarousel>
  );
};
