import {useParams} from 'react-router-dom';

export default function useIsMyHome(myId: string) {
  const {ownerId} = useParams(); // 현재 접속한 주인의 아이디
  const isMyHome = (ownerId) === myId; // 지금 위치가 나의 집인지?
  return {ownerId, myId, isMyHome};
}
