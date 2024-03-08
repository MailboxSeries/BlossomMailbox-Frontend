import { useSuspenseQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import useToast from '@/hooks/useToast';
import { useNavigate } from 'react-router-dom';
import { getDayLetterList } from '@/apis/letter';

export const useGetDayLetterList = (selectedDate: number) => {
    const { displayToast } = useToast();
    const navigate = useNavigate();
    
    const { data, isSuccess } = useSuspenseQuery({
        queryKey: ['dayLetterList', selectedDate],
        queryFn: async () => (await getDayLetterList(selectedDate)),
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