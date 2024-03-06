import AnimalButton from '@/components/Home/AnimalButton';
import CharacterLayout from '@/components/CharacterLayout';
import PageLayout from '@/components/PageLayout';
import StoreLayout from '@/components/StoreLayout';
import * as Styled from './style';
import MediumButton from '@/components/MediumButton';
import ShortButton from '@/components/ShortButton';
import ShareButton from '@/components/Home/ShareButton';
import useModal from '@/hooks/useModal';
import LetterListModal from '@/components/Home/OpenLetter/LetterListModal';
import useIsMyHome from '@/hooks/useIsMyHome';
import LongButton from '@/components/LongButton';
import { useNavigate } from 'react-router-dom';
import SendLetterModal from '@/components/Home/SendLetter/SendLetterModal';
import SkinModal from '@/components/Home/Skin/SkinModal';
import useToast from '@/hooks/useToast';

export default function Home() {
  const createdDayCnt = 3; // TODO: 서버로 부터 받은 값으로 변경. 이건 임시 값
  const nickname = 'asdfasdf'; //TODO: 서버로 부터 받은 값으로 변경. 이건 임시 값
  const navigate = useNavigate();
  const { isOpenModal: isOpenLetterListModal, openModal: openLetterListModal, closeModal: closeLetterListModal } = useModal('LetterListModal');
  const { isOpenModal: isOpenSendLetterModal, openModal: openSendLetterModal, closeModal: closeSendLetterModal } = useModal('SendLetterModal');
  const { isOpenModal: isOpenSkinModal, openModal: openSkinModal, closeModal: closeSkinModal } = useModal('SkinModal');
  const { myId, isMyHome } = useIsMyHome();
  const { displayToast } = useToast();

  const handleopenLetterListModal = () => {
    openLetterListModal();
  };

  const handleOpenSendLetterModal = () => {
    openSendLetterModal();
  };

  const handleOpenSkinModal = () => {
    if (isMyHome) {
      openSkinModal();
    }
  };

  return (
    <>
      <PageLayout nickname={nickname} createdDayCnt={createdDayCnt}>
        <StoreLayout /> {/* TODO: rightStore, leftStore 서버로 부터 받은 값 넘겨야함 */}
        <CharacterLayout /> {/* TODO: sex, hair, face, top, bottom 서버로 부터 받은 값 넘겨야함 */}
        <AnimalButton onClick={() => handleOpenSkinModal()} /> {/* TODO: animal 서버로 부터 받은 값 넘겨야함 */}
        <Styled.ButtonWrapper>
        {isMyHome ? (
          <>
            <Styled.RowContainer>
              <MediumButton onClick={() => handleopenLetterListModal()}>
                편지 보기
              </MediumButton>
              <ShortButton onClick={() => displayToast(`${20-createdDayCnt}일 뒤에 벚꽃이 만개해요!`)}>
                D-{20-createdDayCnt} {/* TODO: 서버로 부터 받은 값으로 변경. 이건 임시 값 */}
              </ShortButton>
            </Styled.RowContainer>
            <ShareButton />
          </>
        ) : (
          <>
            <LongButton onClick={() => handleOpenSendLetterModal()}>
              편지 보내기
            </LongButton>
            <LongButton onClick={() => navigate(`/home/${myId}`)}>
              내 공원으로 가기
            </LongButton>
          </>
        )}
        </Styled.ButtonWrapper>
      </PageLayout>

      <LetterListModal 
        onClose={closeLetterListModal} 
        isOpen={isOpenLetterListModal}
        createdDayCnt={createdDayCnt}
      />
      <SendLetterModal
        onClose={closeSendLetterModal}
        isOpen={isOpenSendLetterModal}
      />
      <SkinModal
        onClose={closeSkinModal}
        isOpen={isOpenSkinModal}
      />
    </>
  );
}
