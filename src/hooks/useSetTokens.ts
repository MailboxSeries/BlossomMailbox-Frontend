import {Cookies} from 'react-cookie';

const cookies = new Cookies();

export default function useSetTokens(accessToken, refreshToken) {
  cookies.set('accessToken', accessToken);
  cookies.set('refreshToken', refreshToken);
}
