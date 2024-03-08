import { useSuspenseQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import useToast from '@/hooks/useToast';
import { useNavigate } from 'react-router-dom';
import { getAttendanceStatus } from '@/apis/attend';

export const useGetAttendanceStatus = () => {
    const { displayToast } = useToast();
    const navigate = useNavigate();
    
    const { data, isSuccess } = useSuspenseQuery({
        queryKey: ['attendance'],
        queryFn: async () => (await getAttendanceStatus()),
        staleTime: 6000,
        gcTime: 12000,
    });

    useEffect(() => {
        if (!isSuccess) {
            displayToast('세션이 만료되었어요. 다시 로그인해주세요');
            navigate('/')
        }
    }, [isSuccess]);

    return data;
}