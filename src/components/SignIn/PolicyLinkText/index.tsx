import * as Styled from './style';

export default function PolicyLinkText() {
  return (
    //TODO: 벚꽃우편함 껄로 새로 변경해야 함
    <Styled.PolicyTextsWrapper>
      <Styled.PolicyTextsStyle>
        계속 진행하면 <Styled.PolicyStyledLink target="_blank" href="https://lyrical-recess-827.notion.site/d34c90a6e7ce4de8a8ced223ab79c29f">
            서비스 이용약관
        </Styled.PolicyStyledLink>
            에 동의하고
      </Styled.PolicyTextsStyle>
      <Styled.PolicyTextsStyle>
        <Styled.PolicyStyledLink target="_blank" href="https://lyrical-recess-827.notion.site/2d10ee07b524413da047b940410fbe69">
            개인정보 처리방침
        </Styled.PolicyStyledLink>
            을 읽었음을 인정하는 것으로 간주됩니다.
      </Styled.PolicyTextsStyle>
    </Styled.PolicyTextsWrapper>
  )
}
