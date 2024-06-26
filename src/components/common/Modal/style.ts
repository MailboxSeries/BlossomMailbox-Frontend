import styled, { css, keyframes } from 'styled-components';
import { ModalContentProps, ModalWrapperProps} from '@/interfaces/modal';
import theme from '@/theme';
import SmallModalImg from '@/assets/modal/modal-small.png';
import ModalImg from '@/assets/modal/modal.png';

export const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

export const ModalWrapper = styled.div<ModalWrapperProps & { modalType?: string }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  z-index: 999;
  background-color: rgba(255, 185, 185, 0.5);
  backdrop-filter: blur(5px);
`;

const getModalBackgroundImage = (
  modalType?: 'SmallModal' | 'Modal' ,
) => {
  switch (modalType) {
    case 'SmallModal':
      return SmallModalImg;
    case 'Modal':
      return ModalImg;
    default:
      return ModalImg;
  }
};

const getModalSize = (
  imageType?: 'SmallModal' | 'Modal' ,
) => {
  switch (imageType) {
    case 'SmallModal':
      return {width: '300px', height: '300px', backgroundSize: '300px 300px'};
    case 'Modal':
      return {width: '300px', height: '600px', backgroundSize: '300px 600px'};
    default:
      return {width: '300px', height: '600px', backgroundSize: '300px 600px'}; // 기본값
  }
};

// 아래에서 위로 올라가는 애니메이션 정의
// 세로 모드용 애니메이션
export const slideUpAnimationPortrait = keyframes`
  from { transform: translate(-50%, 100%); }
  to { transform: translate(-50%, -20%); }
`;

export const slideUpAnimationLandscapeRanking = keyframes`
  from { transform: translate(-50%, 100%); }
  to { transform: translate(-50%, -20%); }
`;

// 가로 모드용 애니메이션
export const slideUpAnimationLandscape = keyframes`
  from { transform: translate(-50%, 100%); }
  to { transform: translate(-50%, -3%); }
`;

export const ModalContent = styled.div<ModalContentProps>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${(props) => props.modalColor};
  background-repeat: no-repeat;
  background-position: center;
  box-sizing: border-box;
  background-image: url(${(props) => getModalBackgroundImage(props.modalType)});
  ${({modalType}) => {
    const {width, height, backgroundSize} = getModalSize(modalType);
    return css`
      width: ${width};
      height: ${height};
      background-size: ${backgroundSize};
      border-radius: 20px;
      padding: 15px;
    `;
  }}
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize}px;
  overflow: hidden;
`;


export const ModalInnerContent = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const ModalTitle = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 50%);
  color: ${theme.colors.white};
  font-size: 20px;
  overflow-y: auto;
  overflow: hidden;
  margin-top: 3px;
`;

