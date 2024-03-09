import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postLogout } from '@/apis/logout';
import { isAxiosError } from 'axios';
import useToast from '@/hooks/useToast';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import useIsMyHome from '@/hooks/useIsMyHome';

export const useLogout = () => {
    const queryClient = useQueryClient();
    const { displayToast } = useToast();
    const navigate = useNavigate();
    const { myId } = useIsMyHome();

    return useMutation({
        mutationFn: () => postLogout(),
        onSuccess: async () => {
            // 로그아웃 성공 시 처리
            await queryClient.invalidateQueries({queryKey: ['userInfo', myId]});
            displayToast('로그아웃되었어요.');
            Cookies.remove('accessToken', { path: '/', domain: 'blossommailbox.com' });
            Cookies.remove('refreshToken', { path: '/', domain: 'blossommailbox.com' });            
            navigate('/')
        },
        onError: (error) => {
            // 로그아웃 실패 시 처리
            if (isAxiosError(error)) {
                navigate('/')
                Cookies.remove('accessToken', { path: '/', domain: 'blossommailbox.com' });
                Cookies.remove('refreshToken', { path: '/', domain: 'blossommailbox.com' });            
            }
            // 기타 에러 처리
            navigate('/')
            Cookies.remove('accessToken', { path: '/', domain: 'blossommailbox.com' });
            Cookies.remove('refreshToken', { path: '/', domain: 'blossommailbox.com' });            
        },
    });
};