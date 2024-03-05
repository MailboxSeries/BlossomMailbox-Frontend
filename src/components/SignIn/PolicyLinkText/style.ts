import { styled } from "styled-components";
import theme from "@/theme";

export const PolicyTextsWrapper = styled.div`
  //bottom: -20px;  // 화면 하단에 고정
  font-weight: 300;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 0.2;
  margin-top: 60px;
`;

export const PolicyTextsStyle = styled.p`
  margin-top: 6px;
  font-size: 9px;
  padding-bottom: 10px;
  color: ${theme.colors.white};
`;

export const PolicyStyledLink = styled.a`
  color: ${theme.colors.white};
  text-decoration: underline;  // 밑줄 추가

  &:hover {
    color: ${theme.colors.babyPink};
  }
`;