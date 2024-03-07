import styled from "styled-components";
import theme from "@/theme";
import SparkleGif from "@/assets/sparkle/sparkleEffect.gif";

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const InnerWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 20px;
`;

export const ModalText = styled.div`
    width: 80%;
    margin-top: 15px;
    overflow-x: hidden;
    color: ${theme.colors.white};
    text-align: center;
    line-height: 1.5;
    white-space: pre-line;
`;

export const Sparkle = styled.div`
    position: absolute;
    width: 100px;
    height: 100px;
    z-index: 1;
    background-image: url(${SparkleGif});
    background-size: 100px 100px;
    left: -18px;
    bottom: -10px;
`;

interface CatImageProps {
    imagePath: string;
}  

export const CatImage = styled.div<CatImageProps>`   
    background-image: url(${props => props.imagePath});
    background-size: 70px 70px;
    width: 70px;
    height: 70px;
    margin: 17.5px 0 17.5px 0;
    position: relative;
`;