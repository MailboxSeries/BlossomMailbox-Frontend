import {BrowserRouter} from 'react-router-dom';
import Router from './Router';
import {ThemeProvider} from 'styled-components';
import theme from './theme';
import {Suspense} from 'react';
import { ErrorBoundary } from "react-error-boundary";
import useScrollToTop from '@/hooks/useScrollToTop';
import Splash from '@/components/common/Splash';
import { useRecoilValue } from 'recoil';
import { showSplashState } from '@/atoms/showSplashState';
import ToastContainer from '@/components/common/ToastContainer';

const App = () => {
  useScrollToTop();
  const showSplash = useRecoilValue(showSplashState); //TODO: 데이터 패치 성공 시 true로 바뀌어야함

  return (
    <ErrorBoundary fallback={<Splash showSplash={false}/>}>
      <Suspense fallback={<Splash showSplash={true}/>}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
              <Router />
          </BrowserRouter>
        </ThemeProvider>
        <ToastContainer />
      </Suspense> 
    </ErrorBoundary>
  );
};

export default App;
