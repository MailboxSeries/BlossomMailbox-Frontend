import { useState } from 'react';

const useToast = (duration = 3000) => {
    const [showToast, setShowToast] = useState<boolean>(false);

    // Toast를 표시하는 함수
    const displayToast = () => {
        setShowToast(true);
        setTimeout(() => {
        setShowToast(false);
        }, duration); // duration 후 Toast 사라짐
    };

    return { showToast, displayToast };
};

export default useToast;
