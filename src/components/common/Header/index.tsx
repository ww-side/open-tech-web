// Core
import { type FC, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Toaster } from 'react-hot-toast';
import { Fade } from 'hamburger-react';
import cx from 'classnames';

// Components
import { Menu } from '@/components/common';

export const Header: FC = () => {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [responsiveHeader, setResponsiveHeader] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setResponsiveHeader(true);
      } else {
        setResponsiveHeader(false);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
    const page = document.querySelector('html');
    if (page) page.classList.toggle('overflow-hidden');
  };

  const burgerMenuStyles =
    'z-50 cursor-pointer bg-steel-blue hover:opacity-80 transition duration-300 rounded-[50px] p-2 fixed right-0';
  const burgerMenuClasses = cx(
    burgerMenuStyles,
    'mr-[100px] max-lg:mr-[66px] max-sm:mr-[10px]'
  );

  const headerClasses = cx(
    'z-50 flex items-center justify-between mt-8',
    {
      absolute: pathname === '/',
    },
    {
      relative: pathname !== '/',
    }
  );

  const imageWidth = responsiveHeader ? 180 : 250;
  const imageHeight = responsiveHeader ? 30 : 100;
  const burgerSize = responsiveHeader ? 35 : 40;

  return (
    <header className={headerClasses}>
      <div className="absolute">
        <Toaster position="bottom-left" reverseOrder={false} />
      </div>
      <Link href="/">
        <Image
          className="ml-[100px] max-lg:ml-[50px] max-sm:ml-[10px]"
          src="/logo/open-tech-text.svg"
          alt="open-tech-full"
          priority
          width={imageWidth}
          height={imageHeight}
        />
      </Link>
      <div className={burgerMenuClasses} onClick={handleOpenMenu}>
        <Fade
          size={burgerSize}
          color="white"
          toggled={openMenu}
          toggle={setOpenMenu}
          rounded
        />
      </div>
      <Menu isOpen={openMenu} handleSetOpenMenu={handleOpenMenu} />
    </header>
  );
};
