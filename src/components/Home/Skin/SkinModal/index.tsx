import React, { useState, useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { skinState } from '@/atoms/skinState';
import Modal from '@/components/common/Modal';
import { SkinSelector } from '../SkinSelector';
import { skins } from '@/assets/character'; // 스킨 데이터 경로 확인
import { SkinModalProps } from '@/interfaces/modal';
import * as Styled from './style';
import ShortButton from '@/components/ShortButton';
import { sex } from '@/assets/character';

function SkinModal({ isOpen, onClose }: SkinModalProps) {
    const [skin, setSkin] = useRecoilState(skinState);
    const [selectedSex, setSelectedSex] = useState('man');

    const onSelectSkin = useCallback((skinType, selectedSkin) => {
        setSkin({ ...skin, [skinType]: selectedSkin });
    }, [skin, setSkin]);

    const skinStatus = useCallback((type, index) => {
      // 잠금 상태 확인 로직
        return 'unlocked';
    }, []);

    return (
        <Modal isOpen={isOpen} onClose={onClose} modalTitle="스킨 선택">
            <Styled.Wrapper>
                <Styled.RowContainer>
                    <ShortButton onClick={() => setSelectedSex('man')}>남</ShortButton>
                    <ShortButton onClick={() => setSelectedSex('woman')}>여</ShortButton>
                </Styled.RowContainer>
                <Styled.InnerWrapper>
                    {skins[selectedSex].map(({ type, items }) => (
                    <SkinSelector
                        key={type}
                        items={items}
                        selectedType={skin[type.toLowerCase()]}
                        onSelect={(selectedSkin) => onSelectSkin(`${type.toLowerCase()}`, selectedSkin)}
                        skinStatus={skinStatus}
                    />
                    ))}
                </Styled.InnerWrapper>
            </Styled.Wrapper>
            
        </Modal>
    );
}

export default SkinModal;
