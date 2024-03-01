import * as Styled from './style';
import React from 'react';
import Modal from '@/components/common/Modal';
import useToast from '@/hooks/useToast';
import Toast from '@/components/common/Toast';
import { DayLetterModalProps } from '@/interfaces/modal';
import useModal from '@/hooks/useModal';

function DayLetterModal({onClose, isOpen, selectedDate}: DayLetterModalProps) {
    const { isOpenModal: isOpenLetterListModal, 
        openModal: openLetterListModal, 
        closeModal: closeLetterListModal } = useModal('LetterListModal');
    const { isOpenModal: isOpenDayLetterModal,
        openModal: openDayLetterModal, 
        closeModal: closeDayLetterModal } = useModal('DayLetterModal');

    return (
        <>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                modalTitle={`${selectedDate}일차 벚꽃`}
                modalType={'Modal'}
            >
                <Styled.Wrapper>
                    <Styled.InnerWrapper>
                    
                    </Styled.InnerWrapper>
                </Styled.Wrapper>
            </Modal>

        </>
    );
}

export default React.memo(DayLetterModal);