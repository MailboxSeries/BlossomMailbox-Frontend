import PageLayout from '@/components/PageLayout';
import * as Styled from './style';
import Splash from '@/components/Splash';

export default function Home() {

  return (
    <>
      <PageLayout>
        <Splash showSplash={false}/>
      </PageLayout>
    </>
  );
}
