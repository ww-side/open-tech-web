// Core
import { type FC, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import cx from 'classnames';

// Components
import { Button, Chip, Text, Title } from '@/components/ui';

// Definitions
import { type TechnologyType } from '@/types/technology';

interface PortfolioCardProps {
  id: string;
  imgName: string;
  technologies: TechnologyType[];
  title: string;
  description: string;
}

export const PortfolioCard: FC<PortfolioCardProps> = ({
  id,
  imgName,
  technologies,
  title,
  description,
}) => {
  const [viewCaseDetails, setViewCaseDetails] = useState<boolean>(false);
  const router = useRouter();

  const handleChangeViewCaseDetails = () => {
    setViewCaseDetails(!viewCaseDetails);
  };

  const styles =
    'flex flex-col items-center justify-center transition duration-500 px-6 pt-6 rounded-xl';
  const portfolioCardClasses = cx(styles, {
    'bg-zinc-800': viewCaseDetails,
  });
  const imageClasses = cx('mx-auto', { 'opacity-50': viewCaseDetails });

  return (
    <div className="bg-gray-100 w-[370px] rounded-xl flex flex-col gap-4 shadow-md">
      <section
        className={portfolioCardClasses}
        onMouseEnter={handleChangeViewCaseDetails}
        onMouseLeave={handleChangeViewCaseDetails}
        onClick={() => router.push(`/portfolio/${id}`)}
      >
        <Image
          className={imageClasses}
          src={`/img/portfolio/${imgName}.png`}
          alt={imgName}
          width={400}
          height={250}
        />
        {viewCaseDetails && (
          <section className="absolute text-center">
            <Button
              type="button"
              size="medium"
              shape="square"
              color="transparent"
            >
              View details
            </Button>
          </section>
        )}
      </section>
      <section className="flex flex-wrap gap-3 px-6">
        {technologies.map(technology => (
          <Chip key={technology.id} icon={technology.icon}>
            {technology.title}
          </Chip>
        ))}
      </section>
      <Title className="text-steel-blue font-semibold px-6" tag="h3">
        {title}
      </Title>
      <Text className="px-6 mb-10" tag="p">
        {description}
      </Text>
    </div>
  );
};
