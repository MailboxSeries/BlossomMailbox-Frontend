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
    width: 240px;
    height: 340px;
    overflow-y: auto;
    display: column;
    justify-content: center; // 가로 중앙 정렬
    align-items: center; // 세로 중앙 정렬
    overflow-x: hidden;
`;

export const RowContainer = styled.div`
    margin-top: 50px;
    height: 120px; // 버튼 높이를 조정
    display: flex;
    align-items: center;
    gap: 20px;
`;

export const SkinTitle = styled.div`
    font-size: 16px;
    color: ${theme.colors.white};
    text-align: center;
    width: 100%;
    display: flex;
    margin-top: 4px;
    margin-bottom: 10px;
`; 