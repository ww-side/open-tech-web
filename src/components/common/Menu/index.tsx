// Core
import { type FC, type MouseEvent, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { v4 as uuid } from 'uuid';
import { CSSTransition } from 'react-transition-group';
import cx from 'classnames';

// Components
import SectionLayout from '@/components/layouts/SectionLayout';
import { Text, Title } from '@/components/ui';

// Utils
import { book } from '@/data/book';
import 'animate.css';

interface MenuProps {
  isOpen: boolean;
  handleSetOpenMenu: () => void;
}

export const Menu: FC<MenuProps> = ({ isOpen, handleSetOpenMenu }) => {
  const pathname = usePathname();
  const router = useRouter();
  const [image, setImage] = useState<string>('/img/burger/main.png');

  const handleSetImage = (image: string) => {
    setImage(image);
  };

  const navigateStyles =
    'hover:text-light-blue transition duration-300 cursor-pointer w-max';

  return (
    <CSSTransition
      in={isOpen}
      timeout={950}
      classNames={{
        enter: 'animate__slideInRight animate__faster',
        exit: 'animate__slideOutRight animate__faster',
      }}
      unmountOnExit
    >
      <div
        className="fixed flex top-0 left-0 w-full h-full bg-white z-40 cursor-default animate__animated"
        onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()}
      >
        <SectionLayout backgroundColor="white">
          <Image
            className="max-sm:w-10/12 max-sm:mt-[-30px] cursor-pointer"
            src="/logo/open-tech-text.svg"
            alt="open-tech-text"
            width={350}
            height={80}
            onClick={() => {
              router.push('/');
              handleSetOpenMenu();
            }}
          />
          <nav className="flex max-sm:flex-col gap-36 max-md:gap-10 mt-16 max-sm:mt-10">
            <ul className="flex flex-col gap-10 font-semibold text-4xl">
              {book.map(route => (
                <li
                  key={route.id}
                  className={cx(navigateStyles, {
                    'text-light-blue': pathname === route.route,
                  })}
                  onMouseEnter={() => {
                    if (window.innerWidth >= 1280) {
                      handleSetImage(`/img/burger/${route.image}.png`);
                    }
                  }}
                  onClick={handleSetOpenMenu}
                >
                  <Link href={route.route}>{route.name}</Link>
                </li>
              ))}
            </ul>
            <section className="flex flex-col gap-11 max-sm:gap-5 max-sm:mt-10">
              <Title tag="h2">Get in touch</Title>
              <section className="flex flex-col leading-4">
                <span className="text-gray-400">Mail</span>
                <Text className="text-2xl font-medium max-sm:text-xl" tag="p">
                  <Link
                    className="hover:text-light-blue transition duration-300"
                    href="mailto:opentech.uk.io@gmail.com"
                  >
                    opentech.uk.io@gmail.com
                  </Link>
                </Text>
              </section>
              <section className="flex flex-col leading-4">
                <span className="text-gray-400">LinkedIn</span>
                <Text className="text-2xl font-medium max-sm:text-xl" tag="p">
                  <Link
                    className="hover:text-light-blue transition duration-300"
                    href="https://www.linkedin.com/company/open-tech-io/"
                  >
                    OpenTech
                  </Link>
                </Text>
              </section>
            </section>
          </nav>
        </SectionLayout>
        <Image
          key={uuid()}
          loading="eager"
          className="absolute right-0 w-2/6 h-full animate__animated animate__fadeIn animate__slow max-xl:hidden"
          src={image}
          alt="background-img"
          width={532}
          height={1024}
        />
      </div>
    </CSSTransition>
  );
};
