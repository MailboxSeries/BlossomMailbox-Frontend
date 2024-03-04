// components/SkinSelector.tsx
import React from 'react';
import * as Styled from './style';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import useToast from '@/hooks/useToast';
import { skinState } from '@/atoms/skinState';
import { useRecoilValue } from 'recoil';

// Skin 항목의 타입을 업데이트하여 missionId를 포함시킵니다.
export interface SkinItem {
    imgSrc: string;
    index: number;
    missionId?: string; // missionId는 선택적 속성으로, 잠금 해제가 필요한 항목에만 존재합니다.
    width: number;
    height: number;
    name: string | number;
};

export interface SkinSelectorProps {
    items: Array<SkinItem>;
    selectedType: number | string;
    onSelect: (name: string | number) => void;
    skinStatus: (type: string | number, index: number) => string;
};

export const SkinSelector: React.FC<SkinSelectorProps> = ({
    items,
    selectedType,
    onSelect,
    skinStatus,
}) => {
    const { displayToast } = useToast();
    const skin = useRecoilValue(skinState);

    const handleLockedClick = () => {
        displayToast(`출석 미션을 통해 획득하실 수 있어요!`);
    }

    const handleUnLockedClick = () => {
        //TODO: 미션 완료 mutate. skin을 patch로 보내면 됨.
    }

    return (
        <Carousel showIndicators={false} emulateTouch={true} showArrows={true} showThumbs={false} showStatus={false} centerMode centerSlidePercentage={100/3}>
        {items.map((item, index) => (
            <Styled.SelectClickEvent
            key={index}
            onClick={() => onSelect(item.name)}
            isSelected={selectedType === item.name}
            >
                <Styled.ImageButton src={item.imgSrc} style={{ width: `${item.width}px`, height: `${item.height}px` }} />
                {skinStatus(selectedType, index) === 'locked' && (
                    <Styled.LockIcon onClick={handleLockedClick} />
                )}
                {skinStatus(selectedType, index) === 'unlocked' && (
                    <Styled.UnLockIcon onClick={handleUnLockedClick} />
                )}
            </Styled.SelectClickEvent>
        ))}
        </Carousel>
    );
};
