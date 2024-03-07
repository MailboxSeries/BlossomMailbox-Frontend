import { useMutation } from '@tanstack/react-query';
import { ISkinState } from '@/interfaces/skinState';
import { putSkins } from '@/apis/skins';

export const usePutSkins = () => {
    return useMutation({
        mutationFn: (body: ISkinState) => putSkins(body),
    });
};