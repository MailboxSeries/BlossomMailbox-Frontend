import { atom } from 'recoil';

export const myIdState = atom<string>({
    key: 'userInfo',
    default: 'asdfasdf',
});