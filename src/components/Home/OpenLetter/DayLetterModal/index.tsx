import * as Styled from './style';
import React from 'react';
import Modal from '@/components/common/Modal';
import { DayLetterModalProps } from '@/interfaces/modal';
import useModal from '@/hooks/useModal';
import BackButton from '@/components/BackButton';

function DayLetterModal({onClose, isOpen, selectedDate}: DayLetterModalProps) {
    const { openModal: openLetterListModal } = useModal('LetterListModal');
    const { closeModal: closeDayLetterModal } = useModal('DayLetterModal');
    const handleBackButton = () => {
        closeDayLetterModal();
        openLetterListModal();
    }
    return (
        <>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                modalTitle={`${selectedDate}일차 벚꽃`}
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

export default React.memo(DayLetterModal);