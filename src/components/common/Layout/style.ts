import styled from 'styled-components';

export const Layout = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center; // 수직 중앙 정렬 추가
  height: 100vh;
  min-height: 1020px;
  max-height: 1180px;
  @media (min-height: 1021px) {
    min-height: 1180px;

  }
  position: absolute;
`;