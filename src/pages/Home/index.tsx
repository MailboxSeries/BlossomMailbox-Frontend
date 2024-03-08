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
import CatModal from '@/components/Home/CatModal';
import { useRecoilValue } from 'recoil';
import { getCatState } from '@/atoms/getCatState';
import { useEffect } from 'react';

export default function Home() {
  const createdDayCnt = 3; // TODO: 서버로 부터 받은 값으로 변경. 이건 임시 값
  const nickname = 'asdfasdf'; //TODO: 서버로 부터 받은 값으로 변경. 이건 임시 값
  const { myId, isMyHome } = useIsMyHome();
  //const { data } =  useGetUserInfo(myId); // TODO: 여기서 서버로 부터 받은 값으로 변경
  const navigate = useNavigate();
  const { isOpenModal: isOpenLetterListModal, openModal: openLetterListModal, closeModal: closeLetterListModal } = useModal('LetterListModal');
  const { isOpenModal: isOpenSendLetterModal, openModal: openSendLetterModal, closeModal: closeSendLetterModal } = useModal('SendLetterModal');
  const { isOpenModal: isOpenSkinModal, openModal: openSkinModal, closeModal: closeSkinModal } = useModal('SkinModal');
  const { isOpenModal: isOpenCatModal, openModal: openCatModal, closeModal: closeCatModal } = useModal('CatModal');
  const { displayToast } = useToast();
  const catState = useRecoilValue(getCatState);
  
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
  
  useEffect(() => {
    if (catState.getCat) {
      openCatModal();
    }
  }, [catState.getCat]);

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
      {isOpenSendLetterModal && (
        <SendLetterModal
          onClose={closeSendLetterModal}
          isOpen={isOpenSendLetterModal}
        />
      )}
      {isOpenSkinModal && (
        <SkinModal
          onClose={closeSkinModal}
          isOpen={isOpenSkinModal}
        />
      )}
      {(isOpenCatModal && catState.getCat) && (
        <CatModal
          isOpen={isOpenCatModal}
          onClose={closeCatModal}
          catID={catState.catID}
        />
      )}
    </>
  );
}
