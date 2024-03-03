import styled from "styled-components";
import SpeechBubbleGif from '@/assets/speechBubble/speechBubble.gif'

export const SpeechBubble = styled.div`
    position: absolute;
    background: url(${SpeechBubbleGif});
    width: 80px;
    height: 60px;
    z-index: 2;
    border: transparent;
    top: 300px;
    left: 0px;
`;

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 100%;
`;