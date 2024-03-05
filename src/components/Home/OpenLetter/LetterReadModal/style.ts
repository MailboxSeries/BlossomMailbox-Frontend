import theme from '@/theme';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 98.5%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InnerWrapper = styled.div`
  width: 230px;
  overflow-y: auto;
  display: table-column;
  justify-content: center;
  margin: 40px 0 0px 0;
  font-family: 'BareunHipi';
  color: ${theme.colors.white};
  font-size: 25px; 
`;

export const LetterImage = styled.div<{src: string}>`
  position: relative;
  width: 220px;
  height: 220px;
  background-image: ${(props) => `url(${props.src})`};
  border: 3px solid ${theme.colors.babyPink};
  border-radius: 15px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center; 
`;

export const SenderNameText = styled.div`
  font-size: 20px;
  width: 180px;
  margin: 10px 0 10px 10px;
`;

export const LetterContentText = styled.div`
  margin: 10px 0 15px 10px;
  font-size: 20px;
  width: 210px;
  white-space: pre-line;
  word-wrap: break-word;
  line-height: 1.4;
`;

export const Line = styled.div`
  height: 3px;
  width: 100%;
  background-color: ${theme.colors.babyPink};
  margin: 10px 0 10px 0;
`;