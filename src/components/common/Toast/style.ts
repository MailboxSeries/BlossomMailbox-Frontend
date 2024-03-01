import styled, { keyframes } from 'styled-components';
import theme from '@/theme';

const slideUpAndFade = keyframes`
    0% {
        transform: translateY(100%);
        opacity: 0;
    }
    10% {
        transform: translateY(0);
        opacity: 1;
    }
    90% {
        transform: translateY(0);
        opacity: 1;
    }
    100% {
        transform: translateY(100%);
        opacity: 0;
    }
`;

export const ToastContainer = styled.div`
    position: fixed;
    bottom: 50px;
    transform: translateX(-50%);
    background: ${theme.colors.pink};
    color: white;
    padding: 15px 30px;
    border-radius: 5px;
    animation: ${slideUpAndFade} 2s ease forwards;
    z-index: 100;
`;