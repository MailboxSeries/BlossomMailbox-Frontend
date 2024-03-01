import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {RecoilRoot} from 'recoil';
import {GlobalStyle} from './style';
import {initMocks} from './mocks';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { registerSW } from 'virtual:pwa-register';

const updateSW = registerSW({
  onNeedRefresh() {
    // 새로운 콘텐츠가 사용 가능할 때 호출됨
    // 여기서 사용자에게 업데이트를 알리고, 새로고침을 유도할 수 있음
    if (confirm('새로운 버전이 사용 가능합니다. 지금 업데이트하시겠습니까?')) {
      updateSW();
    }
  },
  onOfflineReady() {
    // PWA가 오프라인에서 사용 가능해질 때 호출됨
  },
});

async function enableMocking() {
  if (!import.meta.env.VITE_APP_NODE_ENV) {
    return;
  }
  return initMocks();
}

const queryClient = new QueryClient({
  defaultOptions: {
      queries: {
          refetchOnWindowFocus: false,
          retry: 0,
      },
  },
});

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <App />
          <GlobalStyle />
        </RecoilRoot>
        <ReactQueryDevtools />
    </QueryClientProvider>,

  );
});