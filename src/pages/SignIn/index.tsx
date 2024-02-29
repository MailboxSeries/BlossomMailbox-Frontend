import SocialButton from '@/components/Button/SocialButton';
import PageLayout from '@/components/PageLayout';
import * as Styled from './style';
import LongButton from '@/components/Button/LongButton';
import { useState } from 'react';

export default function Home() {
  const [isGoToSignIn, setIsGoToSignIn] = useState<boolean>(false);

  const handleGoToSignIn = () => {
    setIsGoToSignIn(true);
  }
  
  return (
    <>
      <PageLayout>
        <Styled.SocialButtonWrapper>
          {!isGoToSignIn && 
            <LongButton onClick={() => handleGoToSignIn()}>
              로그인 
            </LongButton>
          }
          {isGoToSignIn && (
            <>
              <SocialButton socialType={'kakao'}/>
              <SocialButton socialType={'naver'}/>
              <SocialButton socialType={'google'}/>
            </>
          )}
        </Styled.SocialButtonWrapper>
      </PageLayout>
    </>
  );
}
