import { useState } from 'react';

export default function useToast(duration = 3000) {
    const [showToast, setShowToast] = useState<boolean>(false);
    const [message, setMessage] = useState<string>(''); // 메시지 상태 추가

    // Toast를 표시하는 함수 수정
    const displayToast = (msg: string) => {
        setMessage(msg); // 메시지 설정
        setShowToast(true);
        setTimeout(() => {
            setShowToast(false);
        }, duration); // duration 후 Toast 사라짐
    };

    return { showToast, displayToast, message }; // message도 반환
};
