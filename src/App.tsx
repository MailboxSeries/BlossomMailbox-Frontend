import {BrowserRouter} from 'react-router-dom';
import Router from './Router';
import {ThemeProvider} from 'styled-components';
import theme from './theme';
import {Suspense} from 'react';
import { ErrorBoundary } from "react-error-boundary";
import useScrollToTop from '@/hooks/useScrollToTop';
import Splash from '@/components/common/Splash';
import ToastContainer from '@/components/common/ToastContainer';

const App = () => {
  useScrollToTop();

  return (
    <ErrorBoundary fallback={<Splash showSplash={false}/>}>
      <Suspense>
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
