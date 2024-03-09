import theme from '@/theme';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 98%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InnerWrapper = styled.div`
  width: 100%;
  overflow-y: auto;
  display: flex;
  justify-content: center; // 가로 중앙 정렬
  margin-top: 45px;
  `;

export const NoLetterWrapper = styled.div`
  width: 100%;
  overflow-y: hidden;
  display: flex;
  align-items: center;//세로 중앙 정렬
  justify-content: center; // 가로 중앙 정렬
  margin-top: 45px;
  padding-top: 235px;
`;

export const Text = styled.p`
  font-size: 18px;
  color: ${theme.colors.white};
  margin: 0;
`;