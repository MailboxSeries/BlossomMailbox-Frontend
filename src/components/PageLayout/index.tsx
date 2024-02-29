import React from 'react';
import * as Style from './style';
import { useParams } from 'react-router-dom';
import getCurrentSkyImage from '@/utils/getCurrentSkyImage';

interface Props {
  children: React.ReactNode;
}

export default function PageLayout({ children }: Props) {
  const { ownerId } = useParams<{ ownerId?: string }>(); // useParams 사용
  // ownerId가 있을 경우 nickname을 사용, 없으면 기본 텍스트
  const titleText = ownerId ? `${ownerId}의 벚꽃 공원` : "벚꽃 우편함";
  const skyImagePath = getCurrentSkyImage(); // 현재 시간에 따른 이미지 경로 가져오기

  return (
    <>
      <Style.Layout>
        <Style.SkyWrapper path={skyImagePath}>
          <Style.Wrapper>
            <Style.TextWrapper>
              <Style.SubLogoText>봄을 기다리며,</Style.SubLogoText>
              <Style.LogoText>{titleText}</Style.LogoText>
              <Style.SubLogoText>벚꽃이 흩날리는 당신만의 공원을 꾸며보아요.</Style.SubLogoText>
            </Style.TextWrapper>
            {children}
            </Style.Wrapper>
          </Style.SkyWrapper>
      </Style.Layout>
    </>
  );
}