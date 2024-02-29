import * as Styled from './style';
import SocialButton from '@/components/Button/SocialButton';

export default function UnloginMypage() {

  return (
    <>
      <Styled.UnloginText>
        로그인 후 이용해주세요. ☕️
      </Styled.UnloginText>
      <Styled.Line />
      <Styled.SocialButtonWrapper>
        <SocialButton socialType={'kakao'}/>
        <SocialButton socialType={'naver'}/>
        <SocialButton socialType={'google'}/>
      </Styled.SocialButtonWrapper>
    </>
  )
}
