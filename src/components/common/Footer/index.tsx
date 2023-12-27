// Core
import { type FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Components
import { Button, Icon, Text, Title } from '@/components/ui';
import { AiFillLinkedin } from 'react-icons/ai';

export const Footer: FC = () => {
  return (
    <footer className="mt-auto flex max-lg:flex-col-reverse max-sm:gap-10 justify-between bg-zinc-800 text-white px-[100px] max-lg:px-[50px] max-sm:px-[20px] py-10">
      <section className="w-[400px] max-sm:w-full">
        <Title className="max-sm:mt-5" tag="h2">
          GET IN TOUCH
        </Title>
        <Text className="text-5xl max-sm:text-4xl font-semibold mt-5" tag="p">
          {"DON'T BE SHY, LET'S TALK."}
        </Text>
        <p className="font-light my-5">
          Do you have a question or a world-changing project? Let’s shape the
          future together.
        </p>
        <section className="flex gap-5">
          <Link href="/contact">
            <Button
              className="max-sm:text-base"
              type="button"
              size="large"
              shape="ellipse"
              color="transparent"
            >
              Contact with us
            </Button>
          </Link>
          <Link href="/portfolio">
            <Button
              className="max-sm:text-base"
              type="button"
              size="large"
              shape="ellipse"
              color="transparent"
            >
              All projects
            </Button>
          </Link>
        </section>
      </section>
      <section>
        <Image
          src="/logo/open-tech-full.svg"
          alt="open-tect-text"
          width={250}
          height={70}
        />
        <section className="flex flex-col gap-3 mt-7">
          <span className="text-lg flex gap-2 items-end">
            <AiFillLinkedin size={25} color="white" />
            <Link
              className="hover:text-light-blue transition duration-300"
              href="https://www.linkedin.com/company/open-tech-io/"
            >
              OpenTech
            </Link>
          </span>
          <span className="text-lg flex gap-2 items-end">
            <Icon icon="BiMailSend" size={25} color="white" />
            <Link
              className="hover:text-light-blue transition duration-300"
              href="mailto:opentech.uk.io@gmail.com"
            >
              opentech.uk.io@gmail.com
            </Link>
          </span>
        </section>
      </section>
    </footer>
  );
};
