import styled from 'styled-components';

interface StoreWrapperProps {
  path: string;
}

export const CharacterWrapper = styled.div<StoreWrapperProps>`
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