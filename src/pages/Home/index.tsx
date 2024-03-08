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

const data = { //TODO: 임시 값
  nickname: 'asdfasdf',
  sex: "man",
  top: 1,
  hair: 1,
  face: 1,
  bottom: 1,
  animal: 1,
  rightStore: 1,
  leftStore: 1,
  createdDayCnt: 1,
};

export default function Home() {
  const { myId, isMyHome } = useIsMyHome();
  const isSuccess = true; //TODO: 임시값
  //const { data, isSuccess } =  useGetUserInfo(myId); // TODO: 주석 해제 후 더미데이터 삭제
  const navigate = useNavigate();
  const { isOpenModal: isOpenLetterListModal, openModal: openLetterListModal, closeModal: closeLetterListModal } = useModal('LetterListModal');
  const { isOpenModal: isOpenSendLetterModal, openModal: openSendLetterModal, closeModal: closeSendLetterModal } = useModal('SendLetterModal');
  const { isOpenModal: isOpenSkinModal, openModal: openSkinModal, closeModal: closeSkinModal } = useModal('SkinModal');
  const { isOpenModal: isOpenCatModal, openModal: openCatModal, closeModal: closeCatModal } = useModal('CatModal');
  const { displayToast } = useToast();
  const catState = useRecoilValue(getCatState);
  const [showSplash, setShowSplash] = useState(true);
  useHideSplash(isSuccess, setShowSplash);

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
              <ShortButton onClick={() => displayToast(`${20-data.createdDayCnt}일 뒤에 벚꽃이 만개해요!`)}>
                D-{20-data.createdDayCnt}
              </ShortButton>
            </Styled.RowContainer>
            <ShareButton />
          </>
        ) : (
          <>
            <LongButton onClick={() => openSendLetterModal()}>
              편지 보내기
            </LongButton>
            <LongButton onClick={() => navigate(`/home?u=${myId}`)}>
              내 공원으로 가기
            </LongButton>
          </>
        )}
        </Styled.ButtonWrapper>
      </PageLayout>

      <LetterListModal 
        onClose={closeLetterListModal} 
        isOpen={isOpenLetterListModal}
        createdDayCnt={data.createdDayCnt}
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