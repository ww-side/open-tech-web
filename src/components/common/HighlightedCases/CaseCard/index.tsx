// Core
import { type FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import cx from 'classnames';

// Components
import { Text, Title } from '@/components/ui';

interface CaseCardProps {
  id: string;
  imgName: string;
  title: string;
  subtitle: string;
  col: 'right' | 'left';
}

export const CaseCard: FC<CaseCardProps> = ({
  id,
  imgName,
  title,
  subtitle,
  col,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const styles = `cursor-pointer animate__animated w-[400px] max-[450px]:w-[300px] h-[300px] max-[450px]:h-[200px] relative`;
  const animation =
    col === 'right' ? 'animate__fadeInRight' : 'animate__fadeInLeft';
  const caseCardClasses = cx(styles, {
    [animation]: inView,
    'opacity-100': inView,
    'opacity-0': !inView,
  });

  return (
    <Link href={`/portfolio/${id}`}>
      <div ref={ref} className={caseCardClasses}>
        <div className="z-40 absolute inset-0 bg-steel-blue bg-opacity-0 hover:bg-opacity-30 transition duration-500 ease-in-out rounded-xl"></div>
        <Image
          className="rounded-xl"
          src={`/img/highlighted-cases/${imgName}.png`}
          fill={true}
          alt={imgName}
        />
        <Title
          className="text-white max-sm:text-sm left-4 bottom-11 absolute"
          tag="h3"
        >
          {title}
        </Title>
        <Text
          className="text-white max-sm:text-sm left-4 bottom-5 absolute"
          tag="span"
        >
          {subtitle}
        </Text>
      </div>
    </Link>
  );
};
