import { useLocation } from 'react-router-dom';

const checkUrl = (paths: string[]) => {
  const location = useLocation();
  return paths.includes(location.pathname);
};

export default checkUrl;
