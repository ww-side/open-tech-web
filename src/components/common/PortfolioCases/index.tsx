// Core
import { type ChangeEvent, type FC, useState } from 'react';

// Components
import SectionLayout from '@/components/layouts/SectionLayout';
import { PortfolioCard } from '@/components/common';
import { RadioButton } from '@/components/ui';

// Utils
import { portfolioCases } from '@/data/portfolioCases';
import { portfolioCategories } from '@/data/portfolioCategories';

// Definitions
import { type TechnologyType } from '@/types/technology';

export const PortfolioCases: FC = () => {
  const [category, setCategory] = useState<string>('All works');

  const handleCategoryChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCategory(e.target.value);
  };

  const truncateText = (text: string) => {
    const words = text.split(' ');
    return words.slice(0, 15).join(' ') + '...';
  };

  const truncateTechnologies = (technologies: TechnologyType[]) => {
    return technologies.slice(0, 5);
  };

  return (
    <SectionLayout backgroundColor="white" isPadding={false} className="pt-5">
      <section className="flex gap-16 flex-wrap max-sm:justify-center mt-7 mb-16">
        {portfolioCases.map(portfolioCase => (
          <PortfolioCard
            id={portfolioCase.id}
            key={portfolioCase.id}
            imgName={portfolioCase.mainImgName}
            technologies={truncateTechnologies(portfolioCase.technologies)}
            title={portfolioCase.title}
            description={truncateText(portfolioCase.description)}
          />
        ))}
      </section>
    </SectionLayout>
  );
};
