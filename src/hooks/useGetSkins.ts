import { useSuspenseQuery } from '@tanstack/react-query';
import { getSkins } from '@/apis/skins';
import { useEffect } from 'react';
import useToast from '@/hooks/useToast';
import { useNavigate } from 'react-router-dom';

export const useGetSkins = () => {
    const { displayToast } = useToast();
    const navigate = useNavigate();
    
    const { data, isSuccess } = useSuspenseQuery({
        queryKey: ['skins'],
        queryFn: async () => (await getSkins()),
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