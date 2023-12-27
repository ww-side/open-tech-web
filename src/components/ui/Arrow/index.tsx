'use client';
// Core
import { type FC } from 'react';

// Components
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

// Definitions
import { CustomArrowProps } from 'react-slick';

// Utils
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface ArrowProps extends CustomArrowProps {
  template: 'right' | 'left';
}

export const Arrow: FC<ArrowProps> = ({
  template,
  currentSlide,
  slideCount,
  ...props
}) => {
  return (
    <>
      {template === 'right' ? (
        <AiOutlineArrowRight {...props} color="white" size={40} />
      ) : (
        <AiOutlineArrowLeft {...props} color="white" size={40} />
      )}
    </>
  );
};
