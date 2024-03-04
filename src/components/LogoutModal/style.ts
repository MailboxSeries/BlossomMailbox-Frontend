import styled from "styled-components";
import theme from "@/theme";

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
    margin-top: 90px;
    font-size: 20px;
`;

export const ModalText = styled.div`
    width: 100%;
    overflow-x: hidden;
    color: ${theme.colors.white};
    text-align: center;
`;