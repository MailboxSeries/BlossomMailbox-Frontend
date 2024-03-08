import { useMutation } from '@tanstack/react-query';
import { postMyId } from '@/apis/myId';
import { isAxiosError } from 'axios';
import { useSetRecoilState } from 'recoil';
import { myIdState } from '@/atoms/userInfoState';
import useToast from '@/hooks/useToast';
import { useNavigate } from 'react-router-dom';

export const usePostMyId = () => {
    const setMyId = useSetRecoilState(myIdState);
    const { displayToast } = useToast();
    const navigate = useNavigate();

    return useMutation({
        mutationFn: () => postMyId(),
        onSuccess: async (myId) => {
            setMyId(myId);
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