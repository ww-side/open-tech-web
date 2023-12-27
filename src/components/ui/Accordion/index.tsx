// Core
import { type FC, useState } from 'react';
import { Collapse } from 'react-collapse';

// Components
import { Icon, Title } from '@/components/ui';

// Definitions
import { type AccordionType } from '@/types/accordion';

interface AccordionProps {
  items: AccordionType[];
}

export const Accordion: FC<AccordionProps> = ({ items }) => {
  const [idAccordion, setIdAccordion] = useState<string | null>(null);
  const [hoverAccordion, setHoverAccordion] = useState<string | null>(null);

  const toggleAccordion = (index: string) => {
    setIdAccordion(prevIndex => (prevIndex === index ? null : index));
  };

  const setColorAccordion = (id: string) => {
    if (id === idAccordion || id === hoverAccordion) {
      return '#465b85';
    }

    return 'black';
  };

  return (
    <section className="mt-5 mb-20 max-sm:mb-10">
      {items.map(item => (
        <div
          key={item.id}
          className="w-10/12 max-lg:w-full my-3 border-b border-b-gray-200"
          onMouseEnter={() => setHoverAccordion(item.id)}
          onMouseLeave={() => setHoverAccordion(null)}
        >
          <div
            className="flex hover:text-steel-blue py-4 cursor-pointer justify-between items-center transition duration-300 ease-in-out"
            onClick={() => toggleAccordion(item.id)}
          >
            <Title
              tag="h3"
              className={`w-11/12 ${
                idAccordion === item.id ? 'text-steel-blue' : ''
              }`}
            >
              {item.title}
            </Title>
            <Icon
              icon={idAccordion === item.id ? 'BiMinus' : 'BiPlus'}
              size={33}
              color={setColorAccordion(item.id)}
            />
          </div>
          <Collapse isOpened={item.id === idAccordion}>
            <p className="w-10/12 max-lg:w-11/12 bg-white text-lg max-lg:text-base font-light pb-5">
              {item.content}
            </p>
          </Collapse>
        </div>
      ))}
    </section>
  );
};
