import { atom } from 'recoil';

export const myIdState = atom<string | null>({
    key: 'userInfo',
    default: 'asdfasdf', //TODO: null로 바꾸기
});