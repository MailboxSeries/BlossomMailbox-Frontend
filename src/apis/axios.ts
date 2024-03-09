import axios from 'axios';
import Cookies from 'js-cookie';

const accessToken = Cookies.get('accessToken');

export const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_SERVER_URL,
  headers: {
    Authorization: `Bearer ${accessToken}`,
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

// 응답 인터셉터
instance.interceptors.response.use(
  response => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = Cookies.get('refreshToken');
      if (refreshToken) {
        const tokenResponse = await sendRefreshToken(refreshToken);
        if (tokenResponse.status === 200) {
          const accessToken = Cookies.get('accessToken');
          originalRequest.headers['Authorization'] = `Bearer ${accessToken}`;
          return instance(originalRequest); // 재발급 받은 토큰으로 요청 재시도
        }
      }
    }
    return Promise.reject(error);
  }
);

const sendRefreshToken = async (refreshToken) => {
    const response = await axios.post(`${import.meta.env.VITE_APP_SERVER_URL}/api/v1/auth/reissue`, {}, {
      headers: {
        Authorization: `Bearer ${refreshToken}`,
      },
    });

    Cookies.set('accessToken', accessToken, { path: '/', domain: 'blossommailbox.com' });
    Cookies.set('refreshToken', refreshToken, { path: '/', domain: 'blossommailbox.com' });
    
    return response;
};
