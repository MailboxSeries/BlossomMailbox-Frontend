import React from 'react';
import LongButton from '@/components/common/Button/LongButton';
import useToast from '@/hooks/useToast';
import CopyToClipboard from 'react-copy-to-clipboard';
import { useLocation } from 'react-router-dom';
import useIsMyHome from '@/hooks/useIsMyHome';

const BASE_URL = 'https://www.blossommailbox.com';

export default function ShareButton() {
  const { myId } = useIsMyHome();
  const link = `${BASE_URL}/home?u=${myId}`;
  const { displayToast } = useToast();

  const handleShareLink = async () => {
    displayToast('링크가 클립보드에 복사되었습니다.');
  };

  return (
      <CopyToClipboard text={link} onCopy={handleShareLink}>
        <LongButton>
          내 공원에 초대하기
        </LongButton>
      </CopyToClipboard>
  );
}