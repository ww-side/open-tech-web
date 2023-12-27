// Core
import { type FC } from 'react';
import Image from 'next/image';

// Components
import { AppCarousel } from '@/components/common';

// Definitions
import { type PortfolioType } from '@/types/portfolio';

// Utils
import { responsive } from '@/components/common/AppCarousel/config';

interface PortfolioCaseCarouselProps {
  selectedCase: PortfolioType;
}

export const PortfolioCaseCarousel: FC<PortfolioCaseCarouselProps> = ({
  selectedCase,
}) => {
  return (
    <AppCarousel dots={true} playSpeed={500} customSettings={responsive}>
      {selectedCase.images.map(img => (
        <Image
          key={img}
          className="pointer-events-none select-none px-5 max-sm:px-0"
          src={`/img/portfolio/${selectedCase.mainImgName}/${img}.png`}
          loading="eager"
          alt="img"
          width={1891}
          height={915}
        />
      ))}
    </AppCarousel>
  );
};
