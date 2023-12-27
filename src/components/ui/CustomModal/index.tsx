// Core
import { type FC, type ReactNode, useEffect } from 'react';
import Modal from 'react-modal';
import cx from 'classnames';

// Components
import { Button } from '@/components/ui';
import { TfiClose } from 'react-icons/tfi';

// Utils
import 'animate.css';

Modal.setAppElement('.__className_e66fe9');

interface CustomModalProps {
  isOpen: boolean;
  handleClose: () => void;
  children: ReactNode;
}

export const CustomModal: FC<CustomModalProps> = ({
  isOpen,
  handleClose,
  children,
}) => {
  useEffect(() => {
    if (isOpen) {
      return document.documentElement.classList.add('overflow-hidden');
    }

    return document.documentElement.classList.remove('overflow-hidden');
  }, [isOpen]);

  const styles =
    'z-50 flex flex-col gap-7 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-black p-14 max-sm:p-10 outline-none w-[900px] max-lg:w-11/12 h-[600px] max-lg:h-max shadow-md rounded-2xl';
  const animation = ` animate__animated animate__faster ${
    isOpen ? 'animate__fadeIn' : 'animate__fadeOut'
  }`;
  const customModalClasses = cx(styles, animation);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      className={customModalClasses}
      overlayClassName={{
        base: 'fixed top-0 left-0 right-0 bottom-0',
        afterOpen: 'bg-black bg-opacity-50 z-50',
        beforeClose: '',
      }}
    >
      <span
        className="cursor-pointer absolute top-8 right-8 hover:opacity-70"
        onClick={handleClose}
      >
        <TfiClose size={30} />
      </span>
      {children}
      <Button
        className="w-[300px] max-sm:w-[200px] mx-auto"
        type="button"
        shape="ellipse"
        size="large"
        color="blue"
        onClick={handleClose}
      >
        Got it!
      </Button>
    </Modal>
  );
};
