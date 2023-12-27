// Core
import { type FC } from 'react';
import Link from 'next/link';

// Components
import { CaseCard } from '@/components/common';
import { Button } from '@/components/ui';

// Utils
import { portfolioCases } from '@/data/portfolioCases';

export const HighlightedCases: FC = () => {
  const leftCol = [
    portfolioCases.find(item => item.id === 'glia'),
    portfolioCases.find(item => item.id === 'trust-scout'),
  ];

  const rightCol = [
    portfolioCases.find(item => item.id === 'eyezy'),
    portfolioCases.find(item => item.id === 'my-home'),
  ];

  return (
    <section className="w-max mx-auto">
      <section className="flex justify-center mt-7 gap-7 max-[950px]:flex-col">
        <section className="flex flex-col gap-7">
          {leftCol.map(
            caseCard =>
              caseCard && (
                <CaseCard
                  id={caseCard.id}
                  key={caseCard.id}
                  imgName={caseCard.mainImgName}
                  title={caseCard.title}
                  subtitle={caseCard.type}
                  col="left"
                />
              )
          )}
        </section>
        <section className="flex flex-col gap-7">
          {rightCol.map(
            caseCard =>
              caseCard && (
                <CaseCard
                  id={caseCard.id}
                  key={caseCard.id}
                  imgName={caseCard.mainImgName}
                  title={caseCard.title}
                  subtitle={caseCard.type}
                  col="right"
                />
              )
          )}
        </section>
      </section>
      <section className="text-center mt-5">
        <Link href="/portfolio">
          <Button
            className="w-full font-regular tracking-wide"
            type="button"
            size="medium"
            shape="ellipse"
            color="blue"
          >
            All projects
          </Button>
        </Link>
      </section>
    </section>
  );
};
