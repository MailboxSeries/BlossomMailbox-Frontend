import styled from 'styled-components';
import theme from '@/theme';

interface WrapperProps {
  path: string;
}

export const SkyWrapper = styled.div<WrapperProps>`
    position: absolute;
    z-index: 0;
    max-height: 1180px;
    min-height: 1020px;
    @media (min-height: 1021px) {
    min-height: 1180px;
    }
    max-width: 820px; // 최대 너비 설정
    width: 100%;
    margin: 0;
    padding: 0;
    background-image: url(${props => props.path});
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: auto; // 배경 이미지 사이즈 조정
    image-rendering: pixelated;
    background-attachment: scroll;
    display: flex;
  flex-direction: column;
  align-items: center;
`;


export const Wrapper = styled.div<WrapperProps>`
    position: absolute;
    z-index: 0;
    max-height: 1180px;
    min-height: 1020px;
    @media (min-height: 1021px) {
    min-height: 1180px;
    }
    max-width: 820px; // 최대 너비 설정
    width: 100%;
    margin: 0;
    padding: 0;
    background-image: url(${props => props.path});
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: auto; // 배경 이미지 사이즈 조정
    image-rendering: pixelated;
    background-attachment: scroll;
    display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LogoText = styled.div`
  height: 30px;
  font-size: 40px;
  font-family: 'BareunHipi';
  margin-bottom: 30px;
`;

export const SubLogoText = styled.div`
  height: 40px;
  font-size: 16px;
  margin-bottom: -20px;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${theme.colors.white};
  margin-top: 100px;
  @media (min-height: 1021px) {
    margin-top: 250px;
  }
  position: relative;
`;
