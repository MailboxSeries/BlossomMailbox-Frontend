import { useSuspenseQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { getLetter } from '@/apis/letter';
import { useLogout } from '@/hooks/useLogout';

export const useGetLetter = (letterID: number) => {
    const { mutate: logout } = useLogout();

    const { data, isSuccess } = useSuspenseQuery({
        queryKey: ['letter', letterID],
        queryFn: async () => (await getLetter(letterID)),
        staleTime: 6000,
        gcTime: 12000,
    });

    useEffect(() => {
        if (!isSuccess) {
            logout();
        }
    }, [isSuccess]);

    return data;
}