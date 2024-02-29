import {createGlobalStyle} from 'styled-components';
import NanumBarunpenB from './static/font/NanumBarunpenB.woff2';
import BareunHipi from './static/font/BareunHipi.woff2';

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'NanumBarunpenB';
        src: url(${NanumBarunpenB}) format('woff2');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'BareunHipi';
        src: url(${BareunHipi}) format('woff2');
        font-weight: normal;
        font-style: normal;
    }

  html {
    font-size: 16px;
    overflow-x: hidden;
  }

  body, html {
    font-family: 'NanumBarunpenB';
    font-weight: 400;
    margin: 0;
    font-size: 16px;
    background-color: #fefee7;
  }

  #content {
    position: relative;
    height: 100%;
    overflow: auto;
    z-index: 1;
  }
`;
