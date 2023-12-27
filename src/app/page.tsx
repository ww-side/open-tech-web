// Core
import Link from 'next/link';

// Components
import SectionLayout from '@/components/layouts/SectionLayout';
import {
  CompanyBanner,
  Faq,
  HighlightedCases,
  HomeForm,
  OurTechStack,
  ReviewsCarousel,
  ServicesCarousel,
} from '@/components/common';
import { Button, Title } from '@/components/ui';

const Home = () => {
  return (
    <>
      <CompanyBanner />
      <SectionLayout className="mb-16" backgroundColor="white">
        <Title tag="h4">THIS IS WHAT WE DO</Title>
        <Title tag="h2">OUR SERVICES</Title>
        <ServicesCarousel />
      </SectionLayout>
      <HomeForm />
      <OurTechStack />
      <SectionLayout backgroundColor="white">
        <Title tag="h4">HIGHLIGHTED</Title>
        <Title tag="h2">CASES</Title>
        <HighlightedCases />
      </SectionLayout>
      <SectionLayout backgroundColor="white">
        <Title tag="h2">WHAT CLIENT SAYS</Title>
        <Title className="leading-8 w-10/12" tag="h4">
          Our team creates an exceptional visualization and thought-out
          functionality. We believe, our clients deserve to be remarkable in
          their business. The studio develops the products people appreciate all
          around the world.
        </Title>
        <ReviewsCarousel />
        <section className="text-center my-16">
          <Link href="#form">
            <Button type="button" size="large" shape="ellipse" color="blue">
              Contact with us
            </Button>
          </Link>
        </section>
      </SectionLayout>
      <Faq />
    </>
  );
};

export default Home;
