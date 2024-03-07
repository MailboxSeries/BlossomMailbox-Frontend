import Modal from '@/components/common/Modal';
import { CatModalProps } from '@/interfaces/modal';
import * as Styled from './style';
import React from 'react';
import MediumButton from '@/components/MediumButton';
import { getCurrentAnimalImage } from '@/utils/getCurrentAnimalImage';

function CatModal({ isOpen, onClose, catID }: CatModalProps) {
    const { animalImage } = getCurrentAnimalImage(catID);

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose} modalTitle="" modalType='SmallModal'>
                <Styled.Wrapper>
                    <Styled.InnerWrapper>
                            <Styled.ModalText>
                                {`축하드려요! 특별 보상인 \n 고양이를 획득했어요!`}
                            </Styled.ModalText>
                            <Styled.CatImage imagePath={animalImage}>
                                <Styled.Sparkle />
                            </Styled.CatImage>
                            <MediumButton 
                                onClick={onClose}
                                margin='0px 0 0 0'
                            >
                                확인
                            </MediumButton>
                    </Styled.InnerWrapper>
                </Styled.Wrapper>
            </Modal>
        </>
    );
}

export default React.memo(CatModal);