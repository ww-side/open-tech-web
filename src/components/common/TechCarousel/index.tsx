// Core
import { type FC } from 'react';

// Components
import { Text, Title } from '@/components/ui';
import { AppCarousel, TechnologyIcon } from '@/components/common';
import { HiArrowLongRight } from 'react-icons/hi2';

// Definitions
import { type OurTechnologyType } from '@/types/ourTechnology';

// Utils
import { customSettings } from '@/components/common/OurTechStack/config';

interface TechCarousel {
  title: string;
  technologies: OurTechnologyType[];
}

export const TechCarousel: FC<TechCarousel> = ({ title, technologies }) => {
  return (
    <section>
      <Title className="mb-1" tag="h3">
        {title}
      </Title>
      <section className="flex gap-2 items-center mb-2">
        <Text className="font-light text-sm" tag="p">
          SCROLL
        </Text>
        <HiArrowLongRight size={23} />
      </section>
      <AppCarousel
        className="w-3/5 max-md:w-full"
        arrows={false}
        autoplay={false}
        dots={false}
        playSpeed={500}
        swipe={true}
        customSettings={customSettings}
      >
        {technologies.map(item => (
          <TechnologyIcon key={item.id} item={item} size={40} />
        ))}
      </AppCarousel>
    </section>
  );
};
