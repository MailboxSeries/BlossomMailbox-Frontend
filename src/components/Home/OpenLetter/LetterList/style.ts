import styled from 'styled-components';

export const Container = styled.div`
`;

export const Wrapper = styled.div`
  &:not(:last-child) {
    margin-bottom: 10px;
  }
  display: flex;
  flex-direction: column;
  width: 100%;
`;
