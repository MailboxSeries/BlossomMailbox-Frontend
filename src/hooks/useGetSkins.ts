import { useSuspenseQuery } from '@tanstack/react-query';
import { getSkins } from '@/apis/skins';
import { useEffect } from 'react';
import { useLogout } from '@/hooks/useLogout';

export const useGetSkins = () => {
    const { mutate: logout } = useLogout();

    const { data, isSuccess } = useSuspenseQuery({
        queryKey: ['skins'],
        queryFn: async () => (await getSkins()),
        staleTime: 6000,
        gcTime: 12000,
    });

    useEffect(() => {
        if (!isSuccess) {
            logout();
        }
    }, [isSuccess]);

    return {data};
}