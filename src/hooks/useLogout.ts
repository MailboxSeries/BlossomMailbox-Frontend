import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postLogout } from '@/apis/logout';
import { isAxiosError } from 'axios';
import useToast from '@/hooks/useToast';
import { useNavigate } from 'react-router-dom';
import {Cookies} from 'react-cookie';

export const useLogout = () => {
    const queryClient = useQueryClient();
    const { displayToast } = useToast();
    const navigate = useNavigate();
    const cookies = new Cookies();

    return useMutation({
        mutationFn: () => postLogout(),
        onSuccess: async () => {
            // 로그아웃 성공 시 처리
            await queryClient.invalidateQueries({queryKey: ['userInfo']});
            displayToast('로그아웃되었어요.');
            cookies.remove('accessToken');
            cookies.remove('refreshToken');
            navigate('/')
        },
        onError: (error) => {
            // 로그아웃 실패 시 처리
            if (isAxiosError(error)) {
                displayToast('세션이 만료되었어요. 다시 로그인해주세요');
                navigate('/')
                cookies.remove('accessToken');
                cookies.remove('refreshToken');
            }
            // 기타 에러 처리
            displayToast('세션이 만료되었어요. 다시 로그인해주세요');
            navigate('/')
            cookies.remove('accessToken');
            cookies.remove('refreshToken');
        },
    });
};