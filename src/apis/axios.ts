import axios from 'axios';
import useSetTokens from '@/hooks/useSetTokens';
import { useCookies } from 'react-cookie'; 

const [accessToken] = useCookies(["accessToken"]);
const [refreshToken] = useCookies(["refreshToken"]);

export const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_SERVER_URL,
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});

instance.interceptors.request.use(
  config => {
    config.headers.Authorization = `Bearer ${accessToken}`;
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
      if (refreshToken) {
        throw new Error('토큰 없음');
      }
      
        await sendRefreshToken(refreshToken);
        originalRequest.headers['Authorization'] = `Bearer ${accessToken}`;
        return instance(originalRequest);
    }

    return Promise.reject(error);
  },
);



const sendRefreshToken = async (refreshToken) => {
    const response = await instance.post('/api/v1/auth/reissue', {}, {
      headers: {
        Authorization: `Bearer ${refreshToken}`,
      },
    });
    useSetTokens(accessToken, refreshToken);
    return response;
};
