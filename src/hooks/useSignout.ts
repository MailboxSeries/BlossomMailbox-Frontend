import { useMutation, useQueryClient } from '@tanstack/react-query';
import useToast from '@/hooks/useToast';
import { isAxiosError } from 'axios';
import { deleteSignout } from '@/apis/signout';
import { useNavigate } from 'react-router-dom';

export const useSignout = () => {
    //const { closeModal } = useModal();
    const queryClient = useQueryClient();
    const { displayToast } = useToast();
    const navigate = useNavigate();

    return useMutation({
        mutationFn: () => deleteSignout(),
        onSuccess: async () => {
            // 로그아웃 성공 시 처리
            await queryClient.invalidateQueries({queryKey: ['userInfo']});
            displayToast('회원탈퇴되었어요.');
            navigate('/')
        },
        onError: (error) => {
            // 로그아웃 실패 시 처리
            if (isAxiosError(error)) {
                displayToast('세션이 만료되었어요. 다시 로그인해주세요');
                navigate('/')
            }
            // 기타 에러 처리
            displayToast('세션이 만료되었어요. 다시 로그인해주세요');
            navigate('/')
        },
    });
};