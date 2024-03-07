import { useMutation } from '@tanstack/react-query';
import { ISkinState } from '@/interfaces/skinState';
import { postSkins } from '@/apis/skins';

export const usePostSkins = () => {
    return useMutation({
        mutationFn: (body: ISkinState) => postSkins(body),
    });
};