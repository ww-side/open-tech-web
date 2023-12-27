// Components
import { CaseDetails } from '@/components/common';
import { Text } from '@/components/ui';
import SectionLayout from '@/components/layouts/SectionLayout';
import Link from 'next/link';
import { BsArrowLeft } from 'react-icons/bs';

const Case = () => {
  return (
    <>
      <SectionLayout
        className="mt-10"
        backgroundColor="white"
        isPadding={false}
      >
        <Link
          href="/portfolio"
          className="flex gap-1 items-center hover:cursor-pointer w-max hover:text-light-blue transition duration-300"
        >
          <BsArrowLeft size={20} />
          <Text className="text-lg" tag="span">
            Go back
          </Text>
        </Link>
      </SectionLayout>
      <CaseDetails />
    </>
  );
};

export default Case;
