import React from 'react';
import LongButton from '@/components/LongButton';
import Toast from '@/components/common/Toast';
import useToast from '@/hooks/useToast';
import CopyToClipboard from 'react-copy-to-clipboard';
import { useLocation } from 'react-router-dom';

const BASE_URL = 'https://www.blossommailbox.com';

export default function ShareButton() {
  const { pathname } = useLocation();
  const link = `${BASE_URL}${pathname}`;
  const { showToast, displayToast, message } = useToast();

  const handleShareLink = async () => {
    displayToast('링크가 클립보드에 복사되었습니다.'); // Toast 메시지에 남은 일수 표시
  };

  return (
    <>
      <CopyToClipboard text={link} onCopy={handleShareLink}>
        <LongButton>
          내 공원에 초대하기
        </LongButton>
      </CopyToClipboard>
      {showToast && <Toast message={message} />}
    </>
  );
}