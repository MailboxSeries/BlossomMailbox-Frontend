import { useMutation, useQueryClient } from '@tanstack/react-query';
import useToast from '@/hooks/useToast';
import { isAxiosError } from 'axios';
import { deleteSignout } from '@/apis/signout';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import useIsMyHome from '@/hooks/useIsMyHome';

export const useSignout = () => {
    //const { closeModal } = useModal();
    const queryClient = useQueryClient();
    const { displayToast } = useToast();
    const navigate = useNavigate();
    const { myId } = useIsMyHome();

    return useMutation({
        mutationFn: () => deleteSignout(),
        onSuccess: async () => {
            // 로그아웃 성공 시 처리
            await queryClient.invalidateQueries({queryKey: ['userInfo', myId]});
            displayToast('회원탈퇴되었어요.');
            Cookies.remove('accessToken', { path: '/', domain: 'blossommailbox.com' });
            Cookies.remove('refreshToken', { path: '/', domain: 'blossommailbox.com' });            
            navigate('/')
        },
        onError: (error) => {
            // 로그아웃 실패 시 처리
            if (isAxiosError(error)) {
                displayToast('세션이 만료되었어요. 다시 로그인해주세요');
                Cookies.remove('accessToken', { path: '/', domain: 'blossommailbox.com' });
                Cookies.remove('refreshToken', { path: '/', domain: 'blossommailbox.com' });            
                navigate('/')
            }
            // 기타 에러 처리
            displayToast('세션이 만료되었어요. 다시 로그인해주세요');
            Cookies.remove('accessToken', { path: '/', domain: 'blossommailbox.com' });
            Cookies.remove('refreshToken', { path: '/', domain: 'blossommailbox.com' });            
            navigate('/')
        },
    });
};