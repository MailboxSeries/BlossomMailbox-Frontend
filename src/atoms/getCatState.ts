import { atom } from 'recoil';

interface ICatState {
    getCat: boolean;
    catID: number;
}

export const getCatState = atom<ICatState>({
    key: 'catState', 
    default: { getCat: false, catID: 2 },
});