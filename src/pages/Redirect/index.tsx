import Splash from '@/components/Splash';
import Layout from '@/components/common/Layout';
import useIsMyHome from '@/hooks/useIsMyHome';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Redirect() {
  const { myId } = useIsMyHome();
  const navigate = useNavigate();
  useEffect(() => {
    if (myId) {
      navigate(`/home?u=${myId}`);
    }
  },[myId])

  return (
    <Layout>
      <Splash showSplash={false}/>
    </Layout>
  );
}