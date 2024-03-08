import { useSuspenseQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { getDayLetterList } from '@/apis/letter';
import { useLogout } from '@/hooks/useLogout';

export const useGetDayLetterList = (selectedDate: number) => {
    const { mutate: logout } = useLogout();

    const { data, isSuccess } = useSuspenseQuery({
        queryKey: ['dayLetterList', selectedDate],
        queryFn: async () => (await getDayLetterList(selectedDate)),
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