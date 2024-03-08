import { useSuspenseQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import useToast from '@/hooks/useToast';
import { getAttendanceStatus } from '@/apis/attend';
import { useLogout } from '@/hooks/useLogout';

export const useGetAttendanceStatus = () => {
    const { displayToast } = useToast();
    
    const { data, isSuccess } = useSuspenseQuery({
        queryKey: ['attendance'],
        queryFn: async () => (await getAttendanceStatus()),
        staleTime: 6000,
        gcTime: 12000,
    });

    useEffect(() => {
        if (!isSuccess) {
            displayToast('세션이 만료되었어요. 다시 로그인해주세요');
            useLogout();
        }
    }, [isSuccess]);

    return data;
}