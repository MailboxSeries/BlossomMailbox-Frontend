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
  background-color: ${theme.colors.pink};
  margin: 10px 0 10px 0;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center; 
  justify-content: center;
  margin-bottom: 10px
`;

export const ImageUploadLabel = styled.label`
  cursor: pointer;
  width: 240px;
  height: 240px;
  border-radius: 20px;
  background-color: ${theme.colors.babyPink};
  background-size: cover;
  display: inline-block;
  position: relative;
  margin-top: 10px;
`;

export const ImageUploadLabelText = styled.div`
  font-size: 12px;
  color: ${theme.colors.white};
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 108px;
  left: 78px;
  position: absolute;
`;

export const ImageInput = styled.input`
  opacity: 0; // 투명하게 설정
  position: absolute; // 절대적 위치 설정
  width: 100%;
  height: 100%;
  cursor: pointer;
  top: 0;
  left: 0;
`;

export interface ImagePreviewProps {
  src: string; // 여기서는 string 타입만 받도록 설정
}

export const ImagePreview = styled.div<ImagePreviewProps>`
  width: 240px;
  height: 240px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 20px;
  background-image: url(${(props) => props.src});
  z-index: 2;
  position: absolute;
`;


export const NameInput = styled.input`
  font-family: 'BareunHipi';
  margin-top: 10px;
  margin-bottom: 10px;
  width: 210px;
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


export const CheckTextLength = styled.div`
  font-family: 'BareunHipi';
  margin-top: -35px;
  margin-right: 15px;;
  display: flex;
  flex-direction: column;
  align-self: flex-end;   // 이 부분을 추가
  font-size: 14px;
  font-weight: 400;
  color: ${theme.colors.white} !important;
  margin-bottom: 10px;
  z-index: 2;
`;

export const LetterArea = styled.textarea`
  font-family: 'BareunHipi';
  width: 210px;
  height: 100px;
  border: none;
  border-radius: 20px;
  color: ${theme.colors.white};
  overflow: auto;
  padding: 15px;
  padding-bottom: 30px;
  resize: none;
  background-color: ${theme.colors.babyPink};
  font-size: 16px;
  &::placeholder {
      color: ${theme.colors.white};
      font-size: 20px;
    }
  margin-top: 10px;
  margin-bottom: 10px;
`;