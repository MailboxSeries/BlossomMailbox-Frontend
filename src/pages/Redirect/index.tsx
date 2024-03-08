import Splash from '@/components/Splash';
import Layout from '@/components/common/Layout';

export default function Home() {

  return (
    <Layout>
      <Splash showSplash={false}/>
    </Layout>
  );
}