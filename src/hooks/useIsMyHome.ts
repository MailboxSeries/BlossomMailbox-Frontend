import { myIdState } from '@/atoms/userInfoState';
import {useLocation, useParams} from 'react-router-dom';
import { useRecoilValue } from 'recoil';

export default function useIsMyHome() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const ownerId = query.get('u'); // 'u'는 URL에서 ownerId 값을 담고 있는 질의 매개변수의 이름입니다.
  const myId = useRecoilValue(myIdState);
  const isMyHome = (ownerId) === myId; // 지금 위치가 나의 집인지?
  
  return {ownerId, myId, isMyHome};
}
