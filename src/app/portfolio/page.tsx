// Core
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

// Components
import SectionLayout from '@/components/layouts/SectionLayout';
import { Button, Text, Title } from '@/components/ui';
import { PortfolioCases } from '@/components/common';

// Utils
import { portfolioMetadata } from '@/constants/metadata';

export const metadata: Metadata = portfolioMetadata;

const Portfolio = () => {
  return (
    <>
      <SectionLayout backgroundColor="white">
        <Title tag="h4">OUR WORK</Title>
        <Title className="w-[450px] max-sm:w-full" tag="h2">
          Take a look at some of our recent work
        </Title>
      </SectionLayout>
      <PortfolioCases />
      <SectionLayout
        className="flex max-sm:flex-col justify-between mb-5"
        backgroundColor="white"
      >
        <div className="flex flex-col gap-4 w-6/12 max-sm:w-full">
          <Title tag="h2">LEVEL UP YOUR PROJECT</Title>
          <Text className="text-steel-blue text-lg" tag="p">
            Our team handles a wide range of tasks, including defining your
            idea, providing cost estimates, designing, conducting testing, and
            offering ongoing support.
          </Text>
          <Link href="/contact">
            <Button
              className="w-max"
              type="button"
              shape="ellipse"
              size="large"
              color="blue"
            >
              Contact with us
            </Button>
          </Link>
        </div>
        <div>
          <Image
            className="max-sm:mx-auto"
            src="/img/portfolio/portfolio-icon.svg"
            alt="portfolio-icon"
            width={300}
            height={300}
          />
        </div>
      </SectionLayout>
    </>
  );
};

export default Portfolio;
