import { useMutation } from '@tanstack/react-query';
import { postMyId } from '@/apis/myId';
import { isAxiosError } from 'axios';
import { useSetRecoilState } from 'recoil';
import { myIdState } from '@/atoms/userInfoState';
import Cookies from 'js-cookie';
import { useEffect } from 'react';
import { useLogout } from './useLogout';

export const usePostMyId = () => {
    const setMyId = useSetRecoilState(myIdState);
    const { mutate: logout } = useLogout();

    useEffect(() => { // 엑세스 토큰이 없을 시 return
        const accessToken = Cookies.get('accessToken');
        if (!accessToken) {
            return;
        }
    },[])

    return useMutation({
        mutationFn: () => postMyId(),
        onSuccess: async (myId) => {
            setMyId(myId);
        },
        onError: (error) => {
            // 로그아웃 실패 시 처리
            if (isAxiosError(error)) {
                logout();
            }
            // 기타 에러 처리
            logout();
        },
    });
};