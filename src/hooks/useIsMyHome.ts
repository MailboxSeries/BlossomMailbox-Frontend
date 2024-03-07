import { myIdState } from '@/atoms/userInfoState';
import {useParams} from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { useMyId } from '@/hooks/useMyId';

export default function useIsMyHome() {
  const myId = useRecoilValue(myIdState);
  const {ownerId} = useParams(); 
  const isMyHome = (ownerId) === myId; // 지금 위치가 나의 집인지?
  return {ownerId, myId, isMyHome};
}
