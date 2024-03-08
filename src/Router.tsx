import { Route, Routes} from 'react-router-dom';
import Home from '@/pages/Home';
import SignIn from '@/pages/SignIn';
import Redirect from '@/pages/Redirect';
import { usePostMyId } from '@/hooks/usePostMyId';
import { useEffect } from 'react';

export default function Router() {
  // const { mutate } = usePostMyId();

  // useEffect(() => {
  //   mutate();
  // }, [])  //TODO: 배포 시 주석 해제
  
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/redirect" element={<Redirect />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}
