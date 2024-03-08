import { atom } from 'recoil';

export const myIdState = atom<string | null>({
    key: 'userInfo',
    default: "blossom",
});