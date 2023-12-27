// Core
import { useState } from 'react';

export const useModalOpen = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleOpenModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return { isModalOpen, handleOpenModal };
};
