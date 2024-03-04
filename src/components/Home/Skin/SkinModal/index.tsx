import React, { useState, useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { skinState } from '@/atoms/skinState';
import Modal from '@/components/common/Modal';
import { SkinSelector } from '../SkinSelector'
import { skins } from '@/assets/skin'; // 스킨 데이터 경로 확인
import { SkinModalProps } from '@/interfaces/modal';
import * as Styled from './style';
import SexButton from '@/components/Home/Skin/SexButton';
import LongButton from '@/components/LongButton';
import BackButton from '@/components/BackButton';

function SkinModal({ isOpen, onClose }: SkinModalProps) {
    const [skin, setSkin] = useRecoilState(skinState);

    const onSelectSkin = useCallback((skinType, selectedSkin) => {
        setSkin({ ...skin, [skinType]: selectedSkin });
        console.log('selectedSkin',selectedSkin)
    }, [skin, setSkin]);

    const skinStatus = useCallback((type, index) => {
      // 잠금 상태 확인 로직
        return 'locked';
    }, []);

    console.log('skin',skin)

    const handleSelectComplete = () => {
        //TODO: mutate해서 서버에 스킨 정보 업데이트. skin값 보내면 됨.
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose} modalTitle="스킨 선택">
            <BackButton onClick={onClose} />
            <Styled.Wrapper>
                <Styled.RowContainer>
                    <SexButton selectedSex="man" onClick={() => setSkin(prevState => ({ ...prevState, sex: "man" }))} />
                    <SexButton selectedSex="woman" onClick={() => setSkin(prevState => ({ ...prevState, sex: "woman" }))}/>
                </Styled.RowContainer>
                <Styled.InnerWrapper>
                    {skins[skin.sex].map(({ type, items, title }) => (
                    <React.Fragment key={type}>
                    <Styled.SkinTitle>{title}</Styled.SkinTitle>
                    <SkinSelector
                        items={items}
                        selectedType={skin[type]}
                        onSelect={(selectedSkin) => onSelectSkin(`${type}`, selectedSkin)}
                        skinStatus={skinStatus}
                    />
                    </React.Fragment>
                    ))}
                </Styled.InnerWrapper>
                <LongButton onClick={() => handleSelectComplete()}>
                    선택 완료!
                </LongButton>
            </Styled.Wrapper>
            
        </Modal>
    );
}

export default SkinModal;
