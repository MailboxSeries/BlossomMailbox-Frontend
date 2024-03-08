import { useMutation } from '@tanstack/react-query';
import { postLetter } from '@/apis/letter';
import { IPostLetterWithFile } from '@/interfaces/letter';

export const usePostLetter = () => {
    return useMutation({
        mutationFn: (postData: IPostLetterWithFile) => postLetter(postData),
    });
};