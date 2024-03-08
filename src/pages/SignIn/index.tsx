import SocialButton from '@/components/SignIn/SocialButton';
import PageLayout from '@/components/common/Layout/PageLayout';
import * as Styled from './style';
import LongButton from '@/components/common/Button/LongButton';
import { useState } from 'react';
import StoreLayout from '@/components/common/Layout/StoreLayout';
import CharacterLayout from '@/components/common/Layout/CharacterLayout';
import AnimalButton from '@/components/Home/AnimalButton';
import PolicyLinkText from '@/components/SignIn/PolicyLinkText';

export default function Signin() {
  const [isGoToSignIn, setIsGoToSignIn] = useState<boolean>(false);

  const handleGoToSignIn = () => {
    setIsGoToSignIn(true);
  }
  
  return (
    <>
      <PageLayout createdDayCnt={20}>
        <StoreLayout />
        <CharacterLayout />
        <AnimalButton />
        <Styled.SocialButtonWrapper>
          {!isGoToSignIn && 
            <LongButton onClick={() => handleGoToSignIn()}>
              나만의 공원 만들기
            </LongButton>
          }
          {isGoToSignIn && (
            <>
              <SocialButton socialType={'kakao'}/>
              <SocialButton socialType={'naver'}/>
              <SocialButton socialType={'google'}/>
              <PolicyLinkText />
            </>
          )}
        </Styled.SocialButtonWrapper>
      </PageLayout>
    </>
  );
}
