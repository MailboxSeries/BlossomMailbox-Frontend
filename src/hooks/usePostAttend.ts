import { useMutation } from '@tanstack/react-query';
import { postAttend } from '@/apis/attend';

export const usePostAttend = () => {
    return useMutation({
        mutationFn: () => postAttend(),
    });
};