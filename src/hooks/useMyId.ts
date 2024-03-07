import { useMutation } from '@tanstack/react-query';
import { isAxiosError } from 'axios';
import useToast from '@/hooks/useToast';
import { useNavigate } from 'react-router-dom';
import { postMyId } from '@/apis/myId';

export const useMyId = () => {
    const { displayToast } = useToast();
    const navigate = useNavigate();

    return useMutation({
        mutationFn: () => postMyId(),
        onSuccess: (myId) => {
            return myId;
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