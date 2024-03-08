import { useEffect } from 'react';

export default function useHideSplash (isSuccess, setShowSplash) {
    useEffect(() => {
        if (isSuccess) {
        const timer = setTimeout(() => {
            setShowSplash(false);
        }, 1000);

        return () => clearTimeout(timer); // 컴포넌트가 언마운트 되거나 isSuccess가 변경될 때 타이머를 제거
        }
    }, [isSuccess, setShowSplash]); // isSuccess와 setShowSplash가 변경될 때 useEffect 훅이 실행
};