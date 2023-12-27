// Core
import { type FC, type ReactNode } from 'react';
import cx from 'classnames';

interface SectionLayoutProps {
  children: ReactNode;
  backgroundColor: 'blue' | 'white';
  id?: string;
  className?: string;
  isPadding?: boolean;
}

const SectionLayout: FC<SectionLayoutProps> = ({
  backgroundColor,
  children,
  id,
  className,
  isPadding = true,
}) => {
  const sectionClasses = cx(
    'px-[100px]',
    'max-lg:px-[50px]',
    'max-sm:px-[15px]',
    isPadding && 'pt-16',
    backgroundColor === 'white' ? 'bg-white' : 'bg-steel-blue',
    className
  );

  return (
    <section id={id} className={sectionClasses}>
      {children}
    </section>
  );
};

export default SectionLayout;
