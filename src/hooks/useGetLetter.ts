import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { getLetter } from '@/apis/letter';
import { useLogout } from '@/hooks/useLogout';

export const useGetLetter = (letterID: number | null) => {
    const { mutate: logout } = useLogout();

    const { data, isSuccess } = useQuery({
        queryKey: ['letter', letterID],
        queryFn: async () => (await getLetter(letterID)),
        staleTime: 6000,
        gcTime: 12000,
        enabled: letterID !== null, // letterID가 null이 아닐 때만 쿼리 실행
    });

    useEffect(() => {
        if (!isSuccess) {
            logout();
        }
    }, [isSuccess]);

    return {data};
}