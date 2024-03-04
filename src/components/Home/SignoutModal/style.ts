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
`;

export const ModalText = styled.div`
    width: 80%;
    margin-top: 30px;
    overflow-x: hidden;
    color: ${theme.colors.white};
    text-align: center;
    line-height: 1.8;
`;

export const RowContainer = styled.div`
    height: 40px; // 버튼 높이를 조정
    display: flex;
    gap: 5px;
    align-items: center;
    position: relative;
    justify-content: center;
`;

export const NameInput = styled.input`
    font-family: 'BareunHipi';
    margin-top: 15px;
    margin-bottom: 20px;
    width: 175px;
    height: 10px;
    border-radius: 20px;
    padding: 15px;
    border: 2px solid ${theme.colors.babyPink};
    color: ${theme.colors.white};
    background-color: ${theme.colors.babyPink};;
    font-size: 16px;
    &::placeholder {
        color: ${theme.colors.white};
        font-size: 16px;
    }
`;
