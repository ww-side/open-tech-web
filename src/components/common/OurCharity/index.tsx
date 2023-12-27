// Core
import Image from 'next/image';
import { v4 as uuid } from 'uuid';

// Components
import { Text, Title } from '@/components/ui';
import SectionLayout from '@/components/layouts/SectionLayout';
import { AppCarousel } from '@/components/common';
import { HiArrowLongRight } from 'react-icons/hi2';

export const OurCharity = () => {
  const charityImagesSlider = Array.from({ length: 6 }, (_, i) => ({
    id: uuid(),
    imgName: `charity-${i + 1}`,
  }));

  return (
    <SectionLayout
      className="pt-24 max-sm:pt-16"
      backgroundColor="white"
      isPadding={false}
    >
      <section className="flex max-[1200px]:flex-col justify-between gap-5 max-sm:gap-2">
        <section className="w-2/5 max-[1200px]:w-full">
          <Title tag="h2">CHARITY</Title>
          <Title className="mb-3" tag="h4">
            OUR POSITION
          </Title>
          <Text
            className="text-steel-blue text-lg max-md:text-base mb-6"
            tag="p"
          >
            We support the Karpatska Sich battalion and donate 30% of our income
            to the Ukrainian Army. We are a team of dedicated professionals
            committed to making a difference in the world. We believe that
            everyone deserves to live in a free and democratic society, and we
            are working to make that happen.
          </Text>
          <Text
            className="text-steel-blue text-lg max-md:text-base mb-6"
            tag="p"
          >
            We are proud to support the Karpatska Sich battalion and the
            Ukrainian Army. We believe that their fight for freedom is our fight
            for freedom. We are all connected, and we must stand together
            against tyranny.
          </Text>
        </section>
        <section className="w-3/6 max-[1200px]:w-full">
          <Image
            src="/img/charity/charity-title.png"
            alt="charity-img"
            width={1000}
            height={666}
          />
        </section>
      </section>
      <section className="flex gap-2 items-center mt-10 max-sm:mt-5 mb-[-30px]">
        <Text className="font-light text-sm" tag="p">
          SCROLL
        </Text>
        <HiArrowLongRight size={23} />
      </section>
      <AppCarousel
        className="mr-0 h-full my-0 w-full"
        arrows={false}
        dots={false}
        autoplay={false}
        playSpeed={500}
        swipe={true}
      >
        {charityImagesSlider.map(img => (
          <Image
            key={img.id}
            className="w-full pr-2 max-sm:px-2"
            src={`/img/charity/${img.imgName}.png`}
            alt={img.imgName}
            loading="eager"
            width={1000}
            height={666}
          />
        ))}
      </AppCarousel>
    </SectionLayout>
  );
};
