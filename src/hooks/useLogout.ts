import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postLogout } from '@/apis/logout';
import { isAxiosError } from 'axios';
import useToast from '@/hooks/useToast';

export const useLogout = () => {
    const queryClient = useQueryClient();
    const { displayToast } = useToast();

    return useMutation({
        mutationFn: () => postLogout(),
        onSuccess: async () => {
            // 로그아웃 성공 시 처리
            await queryClient.invalidateQueries({queryKey: ['userInfo']});
            displayToast('로그아웃되었어요.');

            // 기타 성공 시 처리
            console.log('로그아웃되었습니다.')
        },
        onError: (error) => {
            // 로그아웃 실패 시 처리
            if (isAxiosError(error)) {
                displayToast('세션이 만료되었어요. 다시 로그인해주세요');

            }
            // 기타 에러 처리
            displayToast('세션이 만료되었어요. 다시 로그인해주세요');
        },
    });
};