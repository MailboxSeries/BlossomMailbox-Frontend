import styled, { keyframes } from "styled-components";
import theme from "@/theme";

export const glowAnimation = keyframes`
    0% {
        box-shadow: 0 0 5px 5px ${theme.colors.babyPink}, 0 0 10px 5px ${theme.colors.babyPink};
    }
    50% {
        box-shadow: 0 0 10px 10px ${theme.colors.babyPink}, 0 0 15px 10px ${theme.colors.babyPink};
    }
    100% {
        box-shadow: 0 0 5px 5px ${theme.colors.babyPink}, 0 0 10px 5px ${theme.colors.babyPink};
    }
`;

export const GlowContainer = styled.div`
    animation: ${glowAnimation} 1s infinite ease-in-out;
    display: inline-block;
    position: absolute;
    top: 17px;
    right: 17px;
    width: 45px;
    height: 45px;
    z-index: 2;
    border-radius: 50%;
    overflow: hidden;
    background-color: ${theme.colors.babyPink};
`;

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
        background: linear-gradient(to bottom, ${theme.colors.babyPink} -100%, transparent 100%);
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

export const fadeOut = keyframes`
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
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

export const MenuWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 80px;
    right: 18px;
    z-index: 10;
    font-size: 16px;
    text-align: center;
`;
