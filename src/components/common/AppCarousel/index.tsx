// Core
import { type FC, type ReactNode } from 'react';
import Slider, { ResponsiveObject } from 'react-slick';
import cx from 'classnames';

// Components
import { Arrow } from '@/components/ui';

// Utils
import { basicSettings } from '@/components/common/PortfolioCaseCarousel/config';

interface AppCarouselProps {
  playSpeed: number;
  children: ReactNode;
  className?: string;
  dots?: boolean;
  arrows?: boolean;
  swipe?: boolean;
  autoplay?: boolean;
  autoplaySpeed?: number;
  customSettings?: ResponsiveObject[];
}

export const AppCarousel: FC<AppCarouselProps> = ({
  children,
  playSpeed,
  dots = true,
  className,
  autoplaySpeed = 3000,
  arrows = true,
  autoplay = true,
  swipe = false,
  customSettings,
}) => {
  const sliderClasses = cx(
    'cursor-grab active:cursor-grabbing',
    {
      'mx-10 max-[920px]:mx-5 max-sm:mx-0': arrows,
      'mr-20 max-[920px]:mr-5 max-sm:mr-0': !arrows,
    },
    className
  );
  const settings = {
    dots: dots,
    arrows: arrows,
    infinite: true,
    autoplay: autoplay,
    autoplaySpeed: autoplaySpeed,
    speed: playSpeed,
    slidesToShow: 3,
    slidesToScroll: 1,
    className: sliderClasses,
    swipeToSlide: swipe,
    nextArrow: <Arrow template="right" />,
    prevArrow: <Arrow template="left" />,
    responsive: customSettings ? customSettings : basicSettings,
  };

  return <Slider {...settings}>{children}</Slider>;
};
