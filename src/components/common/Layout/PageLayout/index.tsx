import React from 'react';
import * as Style from './style';
import { useLocation } from 'react-router-dom';
import getCurrentSkyImage from '@/utils/getCurrentSkyImage';
import Layout from '@/components/common/Layout';
import FlowerFalling from '../../FlowerFalling';
import MenuButton from '@/components/common/Button/MenuButton';
import getCurrentBackgroundImage from '@/utils/getCurrentBackgroundImage';
import AttendButton from '@/components/Home/AttendButton';
import useModal from '@/hooks/useModal';
import AttendModal from '@/components/Home/AttendModal';

interface Props {
  children: React.ReactNode;
  nickname?: string;
  createdDayCnt: number;
}

export default function PageLayout({ children, nickname, createdDayCnt }: Props) {
  const { pathname } = useLocation();
  const { isOpenModal: isOpenAttendModal, openModal: openAttendModal, closeModal: closeAttendModal } = useModal('AttendModal');

  let titleText: string;
  if (pathname === '/redirect') {
    titleText = ''; // 경로가 /redirect일 경우 빈값
  } else {
    titleText = nickname ? `${nickname}의 벚꽃 공원` : "벚꽃 우편함"; // nickname이 존재하면 사용, 그렇지 않으면 기본값
  }
  const skyImagePath = getCurrentSkyImage(); // 현재 시간에 따른 이미지 경로 가져오기
  const backgroundImagePath = getCurrentBackgroundImage(createdDayCnt); // 현재 시간에 따른 이미지 경로 가져오기

  const subLogoText1 = pathname === '/redirect' ? '' : "봄을 기다리며,";
  const subLogoText2 = pathname === '/redirect' ? '' : "벚꽃이 흩날리는 당신만의 공원을 꾸며보아요.";

  const handleAttendModalOpen = () => {
    openAttendModal();
  }
  return (
    <>
      <Layout>
        <Style.SkyWrapper path={skyImagePath}>
          <Style.Wrapper  path={backgroundImagePath}>
          <MenuButton />
          <AttendButton onClick={() => handleAttendModalOpen()}/>
          <FlowerFalling />
            <Style.TextWrapper>
              <Style.SubLogoText>{subLogoText1}</Style.SubLogoText>
              <Style.LogoText>{titleText}</Style.LogoText>
              <Style.SubLogoText>{subLogoText2}</Style.SubLogoText>
            </Style.TextWrapper>
            {children}
          </Style.Wrapper>
        </Style.SkyWrapper>
      </Layout>

      {isOpenAttendModal && (
        <AttendModal
          isOpen={isOpenAttendModal}
          onClose={closeAttendModal}
          createdDayCnt={createdDayCnt}
        />
      )}
    </>
  );
}