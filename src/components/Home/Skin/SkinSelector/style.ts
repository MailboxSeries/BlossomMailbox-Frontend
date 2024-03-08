import styled from 'styled-components';
import CheckImg from '@/assets/check/check_1.png';
import LockIconImg from '@/assets/lock/lock_30x30.png'
import UnLockIconImg from '@/assets/lock/unlock_30x30.png'

interface ImageButtonProps {
    src: string;
};

export const ImageButton = styled.button<ImageButtonProps>`
    cursor: pointer;
    background-image: url(${props => props.src});
    border: transparent;
    background-size: cover;
    background-color: transparent;
    z-index: 0;
`;

export const SelectClickEvent = styled.div<{ isSelected?: boolean }>`
    position: relative; 
    margin-bottom: 15px;
    &::after {
        content: ${props => props.isSelected ? `url(${CheckImg})` : 'none'};
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 20;  // 높은 z-index를 주어 상단에 나타나게 합니다.
    }
`;

export const LockIcon = styled.div`
    position: absolute;
    width: 40px;
    height: 40px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); // 중앙 정렬
    background-size: cover;
    background-image: url(${LockIconImg});
    background-repeat: no-repeat;
    background-color: transparent;
    border: none;
    cursor: pointer;
`;

export const UnLockIcon = styled.button`
    position: absolute;
    width: 40px;
    height: 40px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); // 중앙 정렬
    background-size: cover;
    background-image: url(${UnLockIconImg});
    background-repeat: no-repeat;
    background-color: transparent;
    border: none;
    cursor: pointer;
`;