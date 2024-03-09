import { useSuspenseQuery } from '@tanstack/react-query';
import { getUserInfo } from '@/apis/userInfo';
import { skinState } from '@/atoms/skinState';
import { useSetRecoilState } from 'recoil';
import { useEffect } from 'react';
import { useLogout } from '@/hooks/useLogout';

export const useGetUserInfo = (encodingUserID: string) => {
    const setSkin = useSetRecoilState(skinState);
    const { mutate: logout } = useLogout();

    const { data, isSuccess } = useSuspenseQuery({
        queryKey: ['userInfo'],
        queryFn: async () => (await getUserInfo(encodingUserID)),
        staleTime: 6000,
        gcTime: 12000,
    });

    useEffect(() => {
        if (isSuccess) {
            const { sex, top, bottom, face, hair, animal, rightStore, leftStore } = data;
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
            logout();
        }
    }, [isSuccess]);

    return {data, isSuccess};
}