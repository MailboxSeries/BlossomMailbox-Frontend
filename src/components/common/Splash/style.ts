import styled, { css, keyframes } from 'styled-components';
import SplashIconImg from '@/assets/flower/flowerBtnBig.png';

interface WrapperProps {
  animateOut: boolean;
}

export const Layout = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center; // 수직 중앙 정렬 추가
  height: 100vh;
  min-height: 1020px;
  max-height: 1180px;
  @media (min-height: 1021px) {
    min-height: 1180px;

  }
  position: absolute;
`;

const slideOutRight = keyframes`
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0.5;
    transform: translateX(100%);
  }
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
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: auto; // 배경 이미지 사이즈 조정
  image-rendering: pixelated;
  background-attachment: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(10deg, #ffb9b9 0%, #ffabc8 100%);
  z-index: 100;
  overflow: hidden; /* 경계를 넘어서는 자식 요소들 숨김 처리 */

  ${({ animateOut }) =>
    animateOut &&
    css`
      animation: ${slideOutRight} 1s forwards;
  `}
`;

const flyAndSpin = keyframes`
  0% {
    transform: translateX(100%) rotate(0deg);
    opacity: 1;
  }
  100% {
    transform: translateX(-380%) rotate(var(--rotation-end)); // CSS 변수 사용
    opacity: 0.5;
  }
`;

interface SplashIconProps {
  top: string;
  left: string;
  rotation: number; // 회전 각도
}

export const SplashIcon = styled.div<SplashIconProps>`
  width: 45px;
  height: 45px;
  background-image: url(${SplashIconImg});
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  --rotation-end: ${({ rotation }) => rotation}deg; // CSS 변수로 회전 각도 설정
  animation: ${flyAndSpin} 0.5s linear infinite;
`;

