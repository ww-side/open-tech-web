// Components
import SectionLayout from '@/components/layouts/SectionLayout';
import { Title } from '@/components/ui';
import { TechCarousel } from '@/components/common';

// Utils
import { backend, frontend } from '@/data/ourTechnology';

export const OurTechStack = () => {
  return (
    <SectionLayout backgroundColor="white">
      <Title tag="h2">OUR TECH STACK</Title>
      <Title className="mt-3 mb-5" tag="h4">
        We work with the latest and greatest technologies and tools to provide
        you with a powerful custom tech stack for your project
      </Title>
      <section className="flex flex-col gap-10">
        <TechCarousel title="FRONT-END DEVELOPMENT" technologies={frontend} />
        <TechCarousel title="BACK-END DEVELOPMENT" technologies={backend} />
      </section>
    </SectionLayout>
  );
};
