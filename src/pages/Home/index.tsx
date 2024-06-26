import AnimalButton from '@/components/Home/AnimalButton';
import CharacterLayout from '@/components/common/Layout/CharacterLayout';
import PageLayout from '@/components/common/Layout/PageLayout';
import StoreLayout from '@/components/common/Layout/StoreLayout';
import * as Styled from './style';
import MediumButton from '@/components/common/Button/MediumButton';
import ShortButton from '@/components/common/Button/ShortButton';
import ShareButton from '@/components/Home/ShareButton';
import useModal from '@/hooks/useModal';
import LetterListModal from '@/components/Home/OpenLetter/LetterListModal';
import useIsMyHome from '@/hooks/useIsMyHome';
import LongButton from '@/components/common/Button/LongButton';
import { useNavigate } from 'react-router-dom';
import SendLetterModal from '@/components/Home/SendLetter/SendLetterModal';
import SkinModal from '@/components/Home/Skin/SkinModal';
import useToast from '@/hooks/useToast';
import CatModal from '@/components/Home/CatModal';
import { useRecoilValue } from 'recoil';
import { getCatState } from '@/atoms/getCatState';
import { useEffect, useState } from 'react';
import { useGetUserInfo } from '@/hooks/useGetUserInfo';
import Splash from '@/components/common/Splash';
import useHideSplash from '@/hooks/useHideSplash';
import getDDayAndMessage from '@/utils/getDDayAndMessage';

//TODO: Splash컴포넌트 빼고 framer motion으로 바꾸기
export default function Home() {
  const { myId, isMyHome, ownerId } = useIsMyHome();
  const { data, isSuccess } =  useGetUserInfo(ownerId);
  const navigate = useNavigate();
  const { isOpenModal: isOpenLetterListModal, openModal: openLetterListModal, closeModal: closeLetterListModal } = useModal('LetterListModal');
  const { isOpenModal: isOpenSendLetterModal, openModal: openSendLetterModal, closeModal: closeSendLetterModal } = useModal('SendLetterModal');
  const { isOpenModal: isOpenSkinModal, openModal: openSkinModal, closeModal: closeSkinModal } = useModal('SkinModal');
  const { isOpenModal: isOpenCatModal, openModal: openCatModal, closeModal: closeCatModal } = useModal('CatModal');
  const { displayToast } = useToast();
  const catState = useRecoilValue(getCatState);
  const [showSplash, setShowSplash] = useState(true);
  useHideSplash(isSuccess, setShowSplash);
  const { dDay, message } = getDDayAndMessage(data.createdDayCnt);

  const handleOpenSkinModal = () => {
    if (isMyHome) {
      openSkinModal();
    }
  };

  const handleGoMyHome = () => {
    if(myId) {
      navigate(`/home?u=${myId}`);
    } else {
      navigate('/');
      displayToast('로그인해야 내 공원으로 갈 수 있어요!');
    }
  }

  const handleOpenSendLetterModal = () => {
    if(!myId) {
      navigate('/');
      displayToast('로그인을 하셔야 편지를 쓰실 수 있어요!');
      localStorage.setItem('redirect', ownerId);
    } else {
      openSendLetterModal();
    }
  }
  useEffect(() => {
    const redirectOwnerId = localStorage.getItem('redirect');
    if (redirectOwnerId) {
      navigate(`/home?u=${redirectOwnerId}`);
      localStorage.removeItem('redirect');
    }
  },[]);

  useEffect(() => {
    if (catState.getCat) {
      openCatModal();
    }
  }, [catState.getCat]);

  return (
    <>
      <PageLayout nickname={data.nickname} createdDayCnt={data.createdDayCnt}>
      {showSplash && <Splash showSplash={isSuccess}/> }
        <StoreLayout rightStore={data.rightStore} leftStore={data.leftStore}/>
        <CharacterLayout sex={data.sex} hair={data.hair} face={data.face} top={data.top} bottom={data.bottom}/>
        <AnimalButton onClick={() => handleOpenSkinModal()} animal={data.animal}/>
        <Styled.ButtonWrapper>
        {isMyHome ? (
          <>
            <Styled.RowContainer>
              <MediumButton onClick={() => openLetterListModal()}>
                편지 보기
              </MediumButton>
              <ShortButton onClick={() => displayToast(message)}>
                {dDay}
              </ShortButton>
            </Styled.RowContainer>
            <ShareButton />
          </>
        ) : (
          <>
            <LongButton onClick={() => handleOpenSendLetterModal()}>
              편지 보내기
            </LongButton>
            <LongButton onClick={() => handleGoMyHome()}>
              내 공원으로 가기
            </LongButton>
          </>
        )}
        </Styled.ButtonWrapper>
      </PageLayout>

      {isMyHome && (
        <LetterListModal 
          onClose={closeLetterListModal} 
          isOpen={isOpenLetterListModal}
          createdDayCnt={data.createdDayCnt}
        />
      )}
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