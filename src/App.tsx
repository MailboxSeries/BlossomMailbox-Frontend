import {BrowserRouter} from 'react-router-dom';
import Router from './Router';
import {ThemeProvider} from 'styled-components';
import theme from './theme';
import {Suspense} from 'react';
import { ErrorBoundary } from "react-error-boundary";
import useScrollToTop from '@/hooks/useScrollToTop';

const App = () => {
  useScrollToTop();

  return (
    <ErrorBoundary fallback={<>에러 발생</>}>
      <Suspense fallback={<>로딩 중..</>}>
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
