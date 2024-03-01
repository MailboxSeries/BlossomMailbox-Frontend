import styled, { keyframes } from 'styled-components';
import theme from '@/theme';

const slideUpAndFade = keyframes`
    0% {
        bottom: 0; // 화면 하단에서 시작
        opacity: 0;
    }
    10% {
        bottom: 50px; // 최종 위치로 이동
        opacity: 1;
    }
    90% {
        bottom: 50px; // 위치 유지
        opacity: 1;
    }
    100% {
        bottom: 0; // 다시 화면 하단으로 사라짐
        opacity: 0;
    }
`;

export const ToastContainer = styled.div`
    position: fixed;
    bottom: 50px; // 초기 위치 지정
    left: 50%;
    transform: translateX(-50%); // 가로 중앙 정렬만 적용
    background: ${theme.colors.pink};
    color: white;
    padding: 15px 30px;
    border-radius: 5px;
    animation: ${slideUpAndFade} 2s ease forwards;
    z-index: 10000;
    text-align: center;
`;