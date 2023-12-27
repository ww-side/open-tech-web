// Core
import { useInView } from 'react-intersection-observer';
import cx from 'classnames';

// Components
import SectionLayout from '@/components/layouts/SectionLayout';
import { Title } from '@/components/ui';
import { SubmitForm } from '@/components/common';

export const HomeForm = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  const titlesClasses = cx({
    'animate__animated animate__slideInLeft opacity-100': inView,
    'opacity-0': !inView,
  });

  return (
    <SectionLayout id="form" className="pb-16" backgroundColor="blue">
      <section className={titlesClasses} ref={ref}>
        <Title className="text-white w-[500px] max-sm:w-full" tag="h2">
          Fill out a short application and we will contact you
        </Title>
        <Title className="mt-2 mb-4 text-white" tag="h4">
          Contact with us
        </Title>
      </section>
      <SubmitForm />
    </SectionLayout>
  );
};
