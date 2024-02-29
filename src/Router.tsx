import { Route, Routes} from 'react-router-dom';
import Home from './pages/Home';

export default function Router() {
  return (
    <Routes>
      <Route path="/home/:userId" element={<Home />} />
    </Routes>
  );
}
