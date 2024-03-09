import { useSuspenseQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { getLetterListStatus } from '@/apis/letter';
import { useLogout } from '@/hooks/useLogout';

export const useGetLetterListStatus = () => {
    const { mutate: logout } = useLogout();
    
    const { data, isSuccess } = useSuspenseQuery({
        queryKey: ['letterListStatus'],
        queryFn: async () => (await getLetterListStatus()),
        staleTime: 6000,
        gcTime: 12000,
    });

    // useEffect(() => {
    //     if (!isSuccess) {
    //         logout();
    //     }
    // }, [isSuccess]);

    return data;
}