import { myIdState } from '@/atoms/userInfoState';
import {useParams} from 'react-router-dom';
import { useRecoilValue } from 'recoil';

export default function useIsMyHome() {
  const myId = useRecoilValue(myIdState);
  const {ownerId} = useParams(); // 현재 접속한 주인의 아이디
  const isMyHome = (ownerId) === myId; // 지금 위치가 나의 집인지?
  return {ownerId, myId, isMyHome};
}
