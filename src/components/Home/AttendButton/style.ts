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
    right: 84px;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    overflow: hidden;
    background-color: ${theme.colors.babyPink};
`;
