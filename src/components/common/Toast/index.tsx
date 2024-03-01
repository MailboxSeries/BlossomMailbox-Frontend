import React from 'react';
import ReactDOM from 'react-dom';
import * as Styled from './style';

interface ToastProps {
    message: string;
}

function Toast({ message }: ToastProps) {
    // Toast 컨테이너를 toast-root에 포탈을 사용하여 렌더링합니다.
    return ReactDOM.createPortal(
            <Styled.ToastContainer>{message}</Styled.ToastContainer>,
            document.getElementById('modal-root') // 이것은 모달이 렌더링 될 대상 DOM 요소입니다.
        )
}

export default Toast;
