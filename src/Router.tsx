import { Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Redirect from './pages/Redirect';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/redirect" element={<Redirect />} />
      <Route path="/home/:ownerId" element={<Home />} />
    </Routes>
  );
}
