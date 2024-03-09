import axios from 'axios';
import Cookies from 'js-cookie';
import useSetTokens from '@/hooks/useSetTokens';

const getAccessTokenFromCookies = () => Cookies.get('accessToken');
const getRefreshTokenFromCookies = () => Cookies.get('refreshToken');

export const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_SERVER_URL,
  headers: {
    authorization: `Bearer ${getAccessTokenFromCookies()}`,
  },
});

instance.interceptors.request.use((config) => {
    const accessToken = Cookies.get('accessToken'); // 요청을 보낼 때마다 쿠키에서 액세스 토큰을 가져옵니다.
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`; // 액세스 토큰이 있으면 헤더에 추가합니다.
    }
    return config;
  }, (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;

    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = Cookies.get('refreshToken');
      if (!refreshToken) {
        throw new Error('토큰 없음');
      }
      
        await sendRefreshToken(refreshToken);
        originalRequest.headers['Authorization'] = `Bearer ${refreshToken}`;
        return instance(originalRequest);
    }

    return Promise.reject(error);
  },
);

const sendRefreshToken = async (refreshToken) => {
    const response = await instance.post('/api/v1/auth/reissue', {}, {
      headers: {
        authorization: `Bearer ${refreshToken}`,
      },
    });
    useSetTokens(getAccessTokenFromCookies(), getRefreshTokenFromCookies());
    return response;
};
