'use client';
// Core
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

// Components
import { BsArrowUpRight } from 'react-icons/bs';
import SectionLayout from '@/components/layouts/SectionLayout';
import { Button, Text, Title } from '@/components/ui';
import { PortfolioCaseCarousel } from '@/components/common';

// Utils
import { portfolioCases } from '@/data/portfolioCases';

export const CaseDetails = () => {
  const pathname = usePathname();
  const id = pathname.split('/').pop();
  const selectedCase = portfolioCases.find(caseItem => caseItem.id === id);

  return (
    <section>
      {selectedCase ? (
        <>
          <SectionLayout
            className="flex max-xl:flex-col-reverse max-xl:gap-5 justify-between"
            backgroundColor="white"
          >
            <div className="w-[600px] max-md:w-full">
              <section className="flex justify-between items-center mb-2">
                <Title className="mb-2" tag="h2">
                  {selectedCase.title}
                </Title>
                <section className="flex justify-between items-center">
                  <a
                    className="flex items-center gap-2"
                    href={selectedCase.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Text tag="p">view project</Text>
                    <span className="rounded-full bg-steel-blue w-max p-2 flex items-center justify-center hover:opacity-70 transition duration-1000 hover:rotate-[360deg]">
                      <BsArrowUpRight size={20} color="white" />
                    </span>
                  </a>
                </section>
              </section>
              <hr />
              <Text className="text-lg max-sm:text-base leading-8 mt-7" tag="p">
                {selectedCase.description}
              </Text>
              <section className="flex overflow-auto scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-300 scrollbar-track-gray-100 gap-10 my-10 px-5">
                {selectedCase.technologies.map(item => (
                  <div
                    className="flex flex-col justify-between items-center select-none pointer-events-none gap-2"
                    key={item.id}
                  >
                    <Image
                      src={`/icons/${item.icon}.svg`}
                      alt={item.icon}
                      width={50}
                      height={50}
                    />
                    <Text className="text-sm text-center w-max mb-2" tag="p">
                      {item.title}
                    </Text>
                  </div>
                ))}
              </section>
            </div>
            <div>
              <Image
                src={`/img/portfolio/${selectedCase.mainImgName}.png`}
                alt="img"
                width={420}
                height={300}
              />
            </div>
          </SectionLayout>
          <SectionLayout
            className="py-5 text-white flex max-sm:flex-col items-center max-sm:items-start gap-5 max-sm:gap-2"
            backgroundColor="blue"
            isPadding={false}
          >
            <Text className="text-2xl font-medium max-sm:text-lg" tag="p">
              Loved this project? Let’s develop your idea!
            </Text>
            <Link href="/contact">
              <Button
                className="max-sm:text-base"
                type="button"
                shape="square"
                size="medium"
                color="transparent"
              >
                Contact with us
              </Button>
            </Link>
          </SectionLayout>
          <SectionLayout
            className="my-8 max-sm:my-4"
            backgroundColor="white"
            isPadding={false}
          >
            <PortfolioCaseCarousel selectedCase={selectedCase} />
          </SectionLayout>
        </>
      ) : (
        <SectionLayout backgroundColor="white">
          <h1>Selected case not found</h1>
        </SectionLayout>
      )}
    </section>
  );
};
