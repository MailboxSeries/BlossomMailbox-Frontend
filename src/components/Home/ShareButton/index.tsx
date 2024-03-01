import LongButton from '@/components/LongButton';
import CopyToClipboard from 'react-copy-to-clipboard';
import { useLocation } from 'react-router-dom';

const BASE_URL = 'https://www.blossommailbox.com';

export default function ShareButton() {
  const {pathname} = useLocation();
  const link = `${BASE_URL}${pathname}`;
  
  const handleShareLink = async (text: string, result: boolean) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: '내 공원에 초대하기',
          url: link,
        });
        console.log('공유 성공');
      } catch (error) {
        console.error('공유 취소 또는 실패', error);
      }
    } else if(result){
      alert('클립보드에 링크가 복사되었습니다.');
      return;
    }
  };

  return (
    <CopyToClipboard text={link} onCopy={handleShareLink}>
      <LongButton>
        내 공원에 초대하기
      </LongButton>
    </CopyToClipboard>
  );
}
