// Components
import SectionLayout from '@/components/layouts/SectionLayout';
import { Accordion, Title } from '@/components/ui';

// Utils
import { faq } from '@/data/faq';

export const Faq = () => {
  return (
    <SectionLayout className="mt-8" backgroundColor="white" isPadding={false}>
      <Title tag="h2">FAQ</Title>
      <Title tag="h4">READY ANSWERS TO YOUR QUESTIONS</Title>
      <Accordion items={faq} />
    </SectionLayout>
  );
};
