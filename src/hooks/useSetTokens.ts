import Cookies from 'js-cookie';

export default function useSetTokens(accessToken: string, refreshToken: string) {
  Cookies.set('accessToken', accessToken, { path: '/', domain: 'blossommailbox.com' });
  Cookies.set('refreshToken', refreshToken, { path: '/', domain: 'blossommailbox.com' });
}
