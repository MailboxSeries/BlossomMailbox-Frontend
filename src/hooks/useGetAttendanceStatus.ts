import { useSuspenseQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { getAttendanceStatus } from '@/apis/attend';
import { useLogout } from '@/hooks/useLogout';

export const useGetAttendanceStatus = () => {
    const { mutate: logout } = useLogout();

    const { data, isSuccess } = useSuspenseQuery({
        queryKey: ['attendance'],
        queryFn: async () => (await getAttendanceStatus()),
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