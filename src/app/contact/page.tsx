// Core
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

// Components
import SectionLayout from '@/components/layouts/SectionLayout';
import { Title } from '@/components/ui';
import { SubmitForm } from '@/components/common';

// Utils
import { contactMetadata } from '@/constants/metadata';

export const metadata: Metadata = contactMetadata;

const Contact = () => {
  const linkStyles =
    'text-steel-blue transition duration-300 hover:text-light-blue';

  return (
    <>
      <SectionLayout backgroundColor="white">
        <Title tag="h4">Contact with us</Title>
        <Title
          className="mb-10"
          tag="h2"
        >{`Let's get contact an estimate`}</Title>
        <SubmitForm color="blue" />
      </SectionLayout>
      <SectionLayout
        className="my-7 flex max-[850px]:flex-col justify-between items-center"
        backgroundColor="white"
        isPadding={false}
      >
        <section>
          <div className="flex gap-2">
            <Title tag="h2">View our</Title>
            <Link className={linkStyles} href="/portfolio">
              <Title tag="h2">portfolio.</Title>
            </Link>
          </div>
          <div className="flex gap-2">
            <Title tag="h2">Read about our</Title>
            <Link className={linkStyles} href="/about-us">
              <Title tag="h2">approach.</Title>
            </Link>
          </div>
          <div className="flex gap-2">
            <Title tag="h2">Convinced?</Title>
            <Link className={linkStyles} href="#form">
              <Title tag="h2">Get in touch!</Title>
            </Link>
          </div>
        </section>
        <Image
          src="/img/contact/contact-icon.svg"
          alt="contact-icon"
          width={300}
          height={300}
        />
      </SectionLayout>
    </>
  );
};

export default Contact;
