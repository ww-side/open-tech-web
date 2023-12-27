// Core
import { type FC } from 'react';
import Image from 'next/image';

interface ReviewCardProps {
  review: string;
  author: string;
  authorPosition: string;
  imageName: string;
}

export const ReviewCard: FC<ReviewCardProps> = ({
  review,
  author,
  imageName,
  authorPosition,
}) => {
  return (
    <section className="rounded-[30px] w-[300px] max-sm:w-[270px] h-[300px] bg-gray-200 p-4 select-none flex flex-col">
      <section className="flex items-center gap-2">
        <Image
          className="rounded-full"
          src={`/img/reviews/${imageName}.png`}
          alt={imageName}
          loading="eager"
          width={70}
          height={70}
        />
        <section className="flex flex-col">
          <span className="font-semibold">{author}</span>
          <span className="font-light">{authorPosition}</span>
        </section>
      </section>
      <section className="mt-6">{review}</section>
    </section>
  );
};
