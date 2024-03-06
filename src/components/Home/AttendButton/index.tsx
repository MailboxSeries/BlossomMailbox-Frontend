import Button from '@/components/common/Button';
import { AttendButtonProps } from '@/interfaces/button';
import AttendButtonImg from '@/assets/button/eventBtn.png';
import useModal from '@/hooks/useModal';
import useIsMyHome from '@/hooks/useIsMyHome';
import * as Styled from './style';

export default function AttendButton(props: AttendButtonProps) {
  const { isOpenModal: isOpenAttendModal, openModal: openAttendModal, closeModal: closeAttendModal } = useModal('AttendModal');
  const { isMyHome } = useIsMyHome();

  const handleAttendModalOpen = () => {
    openAttendModal();
  }

  return (
    <>
      {isMyHome && (
        <>
          <Button 
          width={55} 
          height={55} 
          margin={"0px 0 0 0"} 
          background={AttendButtonImg}
          fontSize={20}
          onClick={() => handleAttendModalOpen()}
          position='absolute'
          top={"12px"}
          right={"80px"}
          {...props}
        >
          {props.children}
        </Button>
        <Styled.GlowContainer />
      </>
      )}
    </>
  );
}
