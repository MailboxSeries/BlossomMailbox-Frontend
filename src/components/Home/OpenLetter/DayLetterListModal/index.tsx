import * as Styled from './style';
import React from 'react';
import Modal from '@/components/common/Modal';
import { DayLetterListModalProps } from '@/interfaces/modal';
import useModal from '@/hooks/useModal';
import BackButton from '@/components/BackButton';
import LetterList from '@/components/Home/OpenLetter/LetterList';

// 더미 데이터
const lettersList = {
    "letters":[
        {
            "id": 1,
            "reply": false,
            "sender": "Alice"
        },
        {
            "id": 2,
            "reply": true,
            "sender": "Bob"
        },
        {
            "id": 3,
            "reply": false,
            "sender": "Charlie"
        },
        {
            "id": 4,
            "reply": true,
            "sender": "Diana"
        },
        {
            "id": 5,
            "reply": false,
            "sender": "Eve"
        },
        {
            "id": 6,
            "reply": true,
            "sender": "Frank"
        },
        {
            "id": 7,
            "reply": false,
            "sender": "Grace"
        },
        {
            "id": 8,
            "reply": true,
            "sender": "Hannah"
        },
        {
            "id": 9,
            "reply": false,
            "sender": "Ivy"
        },
        {
            "id": 10,
            "reply": true,
            "sender": "Jack"
        }   
    ]
};

function DayLetterListModal({onClose, isOpen, selectedDate}: DayLetterListModalProps) {
    const { openModal: openLetterListModal } = useModal('LetterListModal');
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
                        <LetterList data={lettersList}/>
                    </Styled.InnerWrapper>
                </Styled.Wrapper>
            </Modal>
        </>
    );
}

export default React.memo(DayLetterListModal);