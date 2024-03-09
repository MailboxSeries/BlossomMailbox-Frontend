import { useMutation } from '@tanstack/react-query';
import { postMyId } from '@/apis/myId';
import { useSetRecoilState } from 'recoil';
import { myIdState } from '@/atoms/userInfoState';
import { useLocation, useNavigate } from 'react-router-dom';

export const usePostMyId = () => {
    const setMyId = useSetRecoilState(myIdState);
    const navigate = useNavigate();
    const location = useLocation();

    return useMutation({
        mutationFn: () => postMyId(),
        onSuccess: async (myId) => {
            setMyId(myId);
            // 현재 URL이 루트('/')일 경우 /home으로 리다이렉트
            if (location.pathname === '/') {
                navigate(`/home?u=${myId}`);
            }
        },
    });
};