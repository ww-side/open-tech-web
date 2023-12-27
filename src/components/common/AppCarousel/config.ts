import { type ResponsiveObject } from 'react-slick';

export const responsive: ResponsiveObject[] = [
  {
    breakpoint: 3000,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      initialSlide: 1,
    },
  },
  {
    breakpoint: 920,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 1,
    },
  },
];
