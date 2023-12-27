// Core
import { type FC } from 'react';
import { v4 as uuid } from 'uuid';

// Components
import { AppCarousel, ReviewCard } from '@/components/common';

// Utils
import { reviews } from '@/data/reviews';

export const ReviewsCarousel: FC = () => {
  return (
    <AppCarousel playSpeed={500} autoplaySpeed={5000}>
      {reviews.map(review => (
        <ReviewCard
          key={uuid()}
          review={review.review}
          author={review.author}
          imageName={review.image}
          authorPosition={review.authorPosition}
        />
      ))}
    </AppCarousel>
  );
};
