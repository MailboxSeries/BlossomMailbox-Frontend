import { useSuspenseQuery } from '@tanstack/react-query';
import { getUserInfo } from '@/apis/userInfo';
import { skinState } from '@/atoms/skinState';
import { useSetRecoilState } from 'recoil';
import { useEffect } from 'react';
import useToast from '@/hooks/useToast';
import { useNavigate } from 'react-router-dom';

export const useGetUserInfo = (encodingUserID: string) => {
    const setSkin = useSetRecoilState(skinState);
    const { displayToast } = useToast();
    const navigate = useNavigate();
    
    const { data, isSuccess } = useSuspenseQuery({
        queryKey: ['userInfo', encodingUserID],
        queryFn: async () => (await getUserInfo(encodingUserID)),
        staleTime: 6000,
        gcTime: 12000,
    });

    useEffect(() => {
        if (isSuccess) {
            const { sex, top, bottom, face, hair, animal, rightStore, leftStore } = data.data;
            setSkin({
                sex,
                top,
                bottom,
                face,
                hair,
                animal,
                rightStore,
                leftStore,
            });
        } else {
            displayToast('세션이 만료되었어요. 다시 로그인해주세요');
            navigate('/')
        }
    }, [isSuccess]);

    return data;
}