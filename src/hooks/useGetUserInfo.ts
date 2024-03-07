import { useSuspenseQuery } from '@tanstack/react-query';
import { getUserInfo } from '@/apis/userInfo';
import { skinState } from '@/atoms/skinState';
import { useSetRecoilState } from 'recoil';
import { useEffect } from 'react';

export const useGetUserInfo = (encodingUserID: string) => {
    const setSkin = useSetRecoilState(skinState);

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
        }
    }, [data, isSuccess, setSkin]);

    return data;
}