import Cookies from 'js-cookie';

export default function useSetTokens(accessToken: string, refreshToken: string) {
  Cookies.set('accessToken', accessToken);
  Cookies.set('refreshToken', refreshToken);
}
