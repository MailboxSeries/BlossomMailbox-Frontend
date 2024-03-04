// components/SkinSelector.tsx
import React from 'react';
import * as Styled from './style';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

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
    skinStatus: (type: string, index: number) => string;
};

export const SkinSelector: React.FC<SkinSelectorProps> = ({
    items,
    selectedType,
    onSelect,
    skinStatus,
}) => {
    const handleClick = () => {

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
                {item.missionId && skinStatus('sex', index) === 'locked' && (
                    <Styled.LockIcon onClick={handleClick} />
                )}
                {item.missionId && skinStatus('sex', index) === 'unlocked' && (
                    <Styled.UnLockIcon onClick={handleClick} />
                )}
            </Styled.SelectClickEvent>
        ))}
        </Carousel>
    );
};
