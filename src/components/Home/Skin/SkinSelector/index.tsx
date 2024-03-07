import React from 'react';
import * as Styled from './style';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import useToast from '@/hooks/useToast';
import { skinState } from '@/atoms/skinState';
import { useRecoilValue } from 'recoil';
import { ISkinItem, ISkinSelectorProps } from '@/interfaces/skinState';

export const SkinSelector: React.FC<ISkinSelectorProps> = ({
    type,
    items,
    selectedType,
    onSelect,
    skinStatus,
}) => {
    const { displayToast } = useToast();

    const handleItemClick = (item: ISkinItem) => {
        const status = skinStatus(type, item.index);
        // 'locked' 또는 'unlocked' 상태일 때는 클릭 이벤트 무시
        if (status === 'lock') {
            displayToast(`출석 미션을 통해 획득하실 수 있어요!`);
        } else if (status === 'unlock') {
            //TODO: 미션 완료 로직. mutate해서 item.index, type을 서버로 보내야함.
            displayToast(`미션 완료로 잠금 해제됩니다.`);
        } else {
            onSelect(item.index);
        }
    };

    return (
        <Carousel showIndicators={false} emulateTouch={true} showArrows={true} showThumbs={false} showStatus={false} centerMode centerSlidePercentage={100/3}>
        {items.map((item, index) => (
            <Styled.SelectClickEvent
    key={index}
    onClick={() => handleItemClick(item)}
    isSelected={selectedType === item.index}
>
    <Styled.ImageButton src={item.imgSrc} style={{ width: `${item.width}px`, height: `${item.height}px` }}>
        {skinStatus(type, item.index) === 'lock' && <Styled.LockIcon />}
        {skinStatus(type, item.index) === 'unlock' && <Styled.UnLockIcon />}
    </Styled.ImageButton>
</Styled.SelectClickEvent>

        ))}
        </Carousel>
    );
};
