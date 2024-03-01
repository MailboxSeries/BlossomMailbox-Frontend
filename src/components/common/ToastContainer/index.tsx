import React from 'react';
import { useRecoilValue } from 'recoil';
import { toastState } from '@/atoms/toastState';
import Toast from '@/components/common/Toast';

export default function ToastContainer() {
    const toasts = useRecoilValue(toastState);

    return (
        <>
        {toasts.map((toast) => (
            <Toast key={toast.id} message={toast.message} />
        ))}
        </>
    );
};