import { useMutation } from '@tanstack/react-query';
import { postMyId } from '@/apis/myId';
import { isAxiosError } from 'axios';
import { useSetRecoilState } from 'recoil';
import { myIdState } from '@/atoms/userInfoState';
import Cookies from 'js-cookie';
import { useEffect } from 'react';
import { useLogout } from './useLogout';
import { useLocation, useNavigate } from 'react-router-dom';

export const usePostMyId = () => {
    const setMyId = useSetRecoilState(myIdState);
    const { mutate: logout } = useLogout();
    const navigate = useNavigate();
    const location = useLocation();
    const accessToken = Cookies.get('accessToken');

    return useMutation({
        mutationFn: () => postMyId(),
        onSuccess: async (myId) => {
            setMyId(myId);
            // 현재 URL이 루트('/')일 경우 /home으로 리다이렉트
            if (location.pathname === '/') {
                navigate(`/home?u=${myId}`);
            }
        },
        onError: (error) => {
            // 로그아웃 실패 시 처리
            if (isAxiosError(error)) {
                if (location.pathname !== '/') {
                    logout();
                }
            }
            if (location.pathname !== '/') {
                logout();
            }
        },
    });
};