import { useState, useEffect } from 'react';
import {Cookies} from 'react-cookie';
//import { deleteSignout } from '@/apis/signout';
//import { useMutation } from '@tanstack/react-query';

export const useLoginStatus = () => {
    const cookies = new Cookies();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const accessToken = cookies.get('accessToken');
        /**액세스 토큰과 리프레시 토큰이 모두 존재하는지 확인하여 로그인 상태 설정 */ 
        if (accessToken) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, []);

    cookies.remove('accessToken');
    cookies.remove('refreshToken');
    setIsLoggedIn(false);

    return { isLoggedIn };
}