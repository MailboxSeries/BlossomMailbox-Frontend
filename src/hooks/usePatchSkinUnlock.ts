import { useMutation } from '@tanstack/react-query';
import { ISkinUnlockChange } from '@/interfaces/skinState';
import { patchSkinUnlock } from '@/apis/skins';

export const usePatchSkinUnlock = () => {
    return useMutation({
        mutationFn: (body: ISkinUnlockChange) => patchSkinUnlock(body),
    });
};