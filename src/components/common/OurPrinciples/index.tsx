// Core
import { useInView } from 'react-intersection-observer';

// Components
import SectionLayout from '@/components/layouts/SectionLayout';
import { Title, Text, Icon } from '@/components/ui';

// Utils
import { ourPrinciples } from '@/data/ourPrinciples';
import cx from 'classnames';

export const OurPrinciples = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const ourPrinciplesClasses = cx(
    'bg-steel-blue p-7 w-1/4 max-xl:w-80 h-64 rounded-lg shadow-lg',
    {
      'animate__animated animate__fadeInUp opacity-100': inView,
      'opacity-0': !inView,
    }
  );

  return (
    <SectionLayout className="max-sm:pt-7" backgroundColor="white">
      <Title tag="h4">WHAT GUIDES US</Title>
      <Title tag="h2">Our principles</Title>
      <section
        ref={ref}
        className="flex flex-wrap gap-12 max-md:justify-center max-md:gap-5 mt-10"
      >
        {ourPrinciples.map(item => (
          <div key={item.id} className={ourPrinciplesClasses}>
            <section className="flex justify-between items-center mb-7">
              <Text className="text-white opacity-80 text-2xl" tag="p">
                {item.id}
              </Text>
              <Icon icon={item.icon} size={35} color="white" />
            </section>
            <Title className="text-white font-semibold mb-3" tag="h4">
              {item.title}
            </Title>
            <Text className="font-light text-white" tag="p">
              {item.description}
            </Text>
          </div>
        ))}
      </section>
    </SectionLayout>
  );
};
