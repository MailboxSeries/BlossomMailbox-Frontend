import styled, { keyframes } from "styled-components";
import theme from "@/theme";

interface SunRayProps {
    isActive: boolean;
}

export const SunRay = styled.div<SunRayProps>`
    position: absolute;
    top: 35px;
    right: 25px;
    height: 170px;
    width: 20px;
    opacity: 0;
    animation: ${props => props.isActive ? fadeIn : fadeOut} 1.5s forwards;
    &:before {
        content: "";
        position: absolute;
        height: 100%;
        width: 100%;
        background: linear-gradient(to bottom, ${theme.colors.pink} -100%, transparent 100%);
    }
    z-index: 1;
`;

export const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

export const fadeOut = keyframes` //안됨..
    from {
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    }
    to {
        clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0% 100%);
    }
`;

interface MenuItemProps {
    isActive: boolean;
}

export const MenuItem = styled.button<MenuItemProps>`
    margin-bottom: 10px;
    font-family: 'BareunHipi'; 
    background: transparent;
    border: none;
    font-size: 20px;
    cursor: pointer;
    opacity: 0;
    animation: ${props => props.isActive ? fadeIn : fadeOut} 1s forwards;
    color: ${theme.colors.white}; 
    white-space: nowrap;
`;

// MenuWrapper 스타일 수정
export const MenuWrapper = styled.div`
    display: flex;
    flex-direction: column; // 항목을 세로로 나열
    align-items: center; // 중앙 정렬
    position: absolute;
    top: 80px;
    right: 22px;
    z-index: 10; // z-index 조정
    font-size: 16px;
    text-align: center;
`;
