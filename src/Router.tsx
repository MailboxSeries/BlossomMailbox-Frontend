import { Route, Routes} from 'react-router-dom';
import Home from '@/pages/Home';
import SignIn from '@/pages/SignIn';
import { usePostMyId } from '@/hooks/usePostMyId';
import { useEffect } from 'react';
import { useLoginStatus } from '@/hooks/useLoginStatus';

export default function Router() {
  const { mutate } = usePostMyId();
  const { isLoggedIn } = useLoginStatus();

  useEffect(() => {
    if(isLoggedIn) {
      mutate();
    }
  }, [])

  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}
