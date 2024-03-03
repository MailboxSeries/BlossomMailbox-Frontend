import { ISkinState } from '@/interfaces/skinState';
import { atom } from 'recoil';

export const skinState = atom<ISkinState>({
    key: 'skinState',
    default: {
        sex: "woman",
        top: 1,
        bottom: 1,
        face: 1,
        hair: 1,
        animal: "cat1",
        rightStore: "churros1",
        leftStore: "balloon1",
    },
});
