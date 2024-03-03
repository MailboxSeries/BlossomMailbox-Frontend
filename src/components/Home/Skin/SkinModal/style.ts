import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const InnerWrapper = styled.div`
    width: 100%;
    overflow-y: auto;
    display: column;
    justify-content: center; // 가로 중앙 정렬
    align-items: center; // 세로 중앙 정렬
`;

export const RowContainer = styled.div`
    margin-top: 50px;
    height: 40px; // 버튼 높이를 조정
    display: flex;
    align-items: center;
`;