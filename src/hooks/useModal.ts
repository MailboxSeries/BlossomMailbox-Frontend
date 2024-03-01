// hooks/useModal.ts
import { useRecoilState } from 'recoil';
import { modalState } from '@/atoms/modalState';

const useModal = (modalId: string) => {
  const [isOpenModal, setIsOpen] = useRecoilState(modalState(modalId));

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return { isOpenModal, openModal, closeModal };
};

export default useModal;
