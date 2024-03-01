import {BrowserRouter} from 'react-router-dom';
import Router from '@/Router';
import {ThemeProvider} from 'styled-components';
import theme from '@/theme';
import {Suspense} from 'react';
import { ErrorBoundary } from "react-error-boundary";
import useScrollToTop from '@/hooks/useScrollToTop';
import Splash from '@/components/Splash';
import { useRecoilValue } from 'recoil';
import { showSplashState } from '@/atoms/showSplashState';

const App = () => {
  useScrollToTop();
  const showSplash = useRecoilValue(showSplashState);

  return (
    <ErrorBoundary fallback={<>에러 발생</>}>
      <Suspense fallback={<Splash showSplash={showSplash}/>}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </ThemeProvider>
      </Suspense> 
    </ErrorBoundary>
  );
};

export default App;
