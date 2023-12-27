// Core
import { type FC } from 'react';
import { Title, Text } from '@/components/ui';
export const CompanyBanner: FC = () => {
  return (
    <section className="relative flex flex-col items-center justify-center h-screen">
      <section className="absolute z-30 text-white flex flex-col items-center gap-2">
        <Title
          className="font-bold w-[800px] max-[840px]:w-[650px] max-[840px]:text-center max-sm:w-[360px]"
          tag="h1"
        >
          Top-notch developers for <span className="text-light-blue">your</span>{' '}
          brilliant ideas
        </Title>
        <Text
          className="text-3xl font-regular max-[840px]:text-2xl max-sm:text-lg max-sm:text-center"
          tag="p"
        >
          Front-end | Back-end | Full Stack Development
        </Text>
      </section>
      <div className="z-20 absolute top-0 left-0 w-full h-full bg-steel-blue opacity-30"></div>
      <video
        autoPlay
        loop
        muted
        preload="auto"
        playsInline
        className="z-10 w-full h-full object-cover"
        disablePictureInPicture
      >
        <source
          src="https://cdn2.mywave.video/embed/6568966584fc47505b628a7d/65689671a1ea6b7b7c70eab0.mp4"
          type="video/mp4"
        />
      </video>
    </section>
  );
};
