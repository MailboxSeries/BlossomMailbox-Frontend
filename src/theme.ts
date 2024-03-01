import {DefaultTheme} from 'styled-components';
import 'styled-components';

declare module 'styled-components' {
  export type DefaultThemeColorKey =
    | 'white'
    | 'black'
    | 'textMain'
    | 'gray'
    | 'pink'
    ;

  export interface DefaultTheme {
    colors: {
      [key in DefaultThemeColorKey]: string;
    };
  }
}

const colors = {
  white: '#ffffff',
  black: '#000000',
  textMain: '#FEFFE7',
  gray: '#8B8B8B',
  pink: '#ffb9b9'
};
const theme: DefaultTheme = {
  colors,
};
export default theme;
