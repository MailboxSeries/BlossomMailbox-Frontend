import { atomFamily } from 'recoil';

export const modalState = atomFamily<boolean, string>({
    key: 'modalState',
    default: false, // 기본값은 모달이 닫혀있음을 의미
});