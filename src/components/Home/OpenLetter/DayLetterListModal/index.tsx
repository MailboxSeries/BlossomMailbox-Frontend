import * as Styled from './style';
import React from 'react';
import Modal from '@/components/common/Modal';
import { DayLetterListModalProps } from '@/interfaces/modal';
import useModal from '@/hooks/useModal';
import BackButton from '@/components/common/Button/BackButton';
import LetterList from '@/components/Home/OpenLetter/LetterList';
import { useGetDayLetterList } from '@/hooks/useGetDayLetterList';

function DayLetterListModal({onClose, isOpen, selectedDate}: DayLetterListModalProps) {
    const { openModal: openLetterListModal } = useModal('LetterListModal');
    const { data } = useGetDayLetterList(selectedDate); //더미데이터 삭제 후 이걸로 교체 
    const handleBackButton = () => {
        onClose();
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
                        <LetterList data={data}/>
                    </Styled.InnerWrapper>
                </Styled.Wrapper>
            </Modal>
        </>
    );
}

export default React.memo(DayLetterListModal);