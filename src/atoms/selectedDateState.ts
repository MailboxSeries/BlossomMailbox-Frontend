import { atom } from 'recoil';

export const selectedDateState = atom<number>({
    key: 'selectedDateState', 
    default: 1, 
});
