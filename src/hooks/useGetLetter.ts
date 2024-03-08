import { useSuspenseQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import useToast from '@/hooks/useToast';
import { getLetter } from '@/apis/letter';
import { useLogout } from '@/hooks/useLogout';

export const useGetLetter = (letterID: number) => {
    const { displayToast } = useToast();
    
    const { data, isSuccess } = useSuspenseQuery({
        queryKey: ['letter', letterID],
        queryFn: async () => (await getLetter(letterID)),
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