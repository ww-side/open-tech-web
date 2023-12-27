// Components
import { Title } from '@/components/ui';

export const PartnerBanner = () => {
  return (
    <section className="relative flex items-center mt-12 max-sm:mt-6 overflow-hidden">
      <div className="mt-12 mb-40 ml-[100px] max-md:ml-[50px] max-sm:ml-[15px]">
        <Title className="relative z-30 text-white text-5xl" tag="h2">
          DISCOVER YOUR
        </Title>
        <Title className="relative z-30 text-white text-5xl" tag="h2">
          TECH PARTNER
        </Title>
      </div>
      <video
        autoPlay
        loop
        muted
        preload="auto"
        playsInline
        className="absolute z-10 w-full blur-[2px]"
        disablePictureInPicture
      >
        <source
          src="https://assets.mixkit.co/videos/preview/mixkit-business-people-at-work-meeting-4809-large.mp4"
          type="video/mp4"
        />
      </video>
    </section>
  );
};
