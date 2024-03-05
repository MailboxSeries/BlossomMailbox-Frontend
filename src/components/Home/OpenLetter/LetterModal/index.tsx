import * as Styled from './style';
import React from 'react';
import Modal from '@/components/common/Modal';
import { LetterModalProps } from '@/interfaces/modal';
import useModal from '@/hooks/useModal';
import BackButton from '@/components/BackButton';

function LetterModal({onClose, isOpen, id}: LetterModalProps) {
    const { openModal: openDayLetterListModal } = useModal('DayLetterListModal');
    const handleBackButton = () => {
        onClose();
        openDayLetterListModal();
    }
    //TODO: id를 파라미터로 보내서 편지 내용을 가져오기
    return (
        <>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                modalTitle={''}
                modalType={'Modal'}
            >
                <BackButton onClick={() => handleBackButton()}/>
                <Styled.Wrapper>
                    <Styled.InnerWrapper>
                    </Styled.InnerWrapper>
                </Styled.Wrapper>
            </Modal>

        </>
    );
}

export default React.memo(LetterModal);