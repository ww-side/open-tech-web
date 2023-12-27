// Core
import Link from 'next/link';
import { Metadata } from 'next';

// Components
import {
  Faq,
  OurCharity,
  OurPrinciples,
  PartnerBanner,
  TechCarousel,
} from '@/components/common';
import SectionLayout from '@/components/layouts/SectionLayout';
import { Button, Text, Title } from '@/components/ui';
import { BsArrowRight } from 'react-icons/bs';

// Utils
import { aboutUsMetadata } from '@/constants/metadata';
import { backend, frontend } from '@/data/ourTechnology';

export const metadata: Metadata = aboutUsMetadata;

const AboutUs = () => {
  return (
    <>
      <PartnerBanner />
      <SectionLayout className="mb-16 max-sm:pt-7" backgroundColor="white">
        <Title tag="h4">THIS IS WHAT WE USE</Title>
        <Title className="mb-12" tag="h2">
          OUR TECHNOLOGY
        </Title>
        <section className="flex flex-col gap-16">
          <TechCarousel title="FRONT-END DEVELOPMENT" technologies={frontend} />
          <TechCarousel title="BACK-END DEVELOPMENT" technologies={backend} />
        </section>
      </SectionLayout>
      <SectionLayout className="py-10" backgroundColor="blue" isPadding={false}>
        <Text className="text-white text-xl font-light max-sm:text-sm" tag="p">
          IF YOU WERE LOOKING FOR
        </Text>
        <Title className="text-white flex items-center gap-3 mb-3" tag="h3">
          {`A QUALITY TEAM FOCUSED ON RESULTS, YOU'VE JUST MADE IT`}
          <BsArrowRight className="max-lg:hidden" size={35} />
        </Title>
        <Link href="/contact">
          <Button
            type="button"
            shape="square"
            size="medium"
            color="transparent"
          >
            Contact with us
          </Button>
        </Link>
      </SectionLayout>
      <OurPrinciples />
      <OurCharity />
      <Faq />
    </>
  );
};

export default AboutUs;
