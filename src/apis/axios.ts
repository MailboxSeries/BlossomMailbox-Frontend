import axios from 'axios';
import Cookies from 'js-cookie';
import useSetTokens from '@/hooks/useSetTokens';

console.log(Cookies.get('accessToken'));

export const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_SERVER_URL,
  headers: {
    Authorization: `Bearer ${Cookies.get('accessToken')}`,
  },
});

instance.interceptors.request.use(
  config => {
    config.headers.Authorization = `Bearer ${Cookies.get('accessToken')}`;
    return config;
  },
  error => Promise.reject(error)
);

instance.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;

    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      if (!Cookies.get('refreshToken')) {
        throw new Error('토큰 없음');
      }
      
        await sendRefreshToken(Cookies.get('refreshToken'));
        originalRequest.headers['Authorization'] = `Bearer ${Cookies.get('accessToken')}`;
        return instance(originalRequest);
    }

    return Promise.reject(error);
  },
);



const sendRefreshToken = async (refreshToken: string) => {
    const response = await instance.post('/api/v1/auth/reissue', {}, {
      headers: {
        Authorization: `Bearer ${refreshToken}`,
      },
    });
    useSetTokens(Cookies.get('accessToken'), Cookies.get('refreshToken'));
    return response;
};
