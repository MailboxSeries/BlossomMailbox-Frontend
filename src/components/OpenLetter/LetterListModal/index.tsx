import * as Styled from './style';
import React, { useState } from 'react';
import Modal from '@/components/common/Modal';
import DisabledFlowerBigImg from '@/assets/flower/flowerBtnDisabled.png';
import flowerBigImg from '@/assets/flower/flowerBtnBig.png';
import useToast from '@/hooks/useToast';
import Toast from '@/components/common/Toast';
import { LetterListModalProps } from '@/interfaces/modal';
import useModal from '@/hooks/useModal';
import DayLetterModal from '@/components/OpenLetter/DayLetterModal';

function LetterListModal({onClose, isOpen, nowDate}: LetterListModalProps) {
    const { showToast, displayToast, message } = useToast();
    const { closeModal: closeLetterListModal } = useModal('LetterListModal');
    const { isOpenModal: isOpenDayLetterModal,
        openModal: openDayLetterModal, 
        closeModal: closeDayLetterModal } = useModal('DayLetterModal');
    const [selectedDate, setSelectedDate] = useState<number>(1);

    const handleLetterReadModalOpen = (date: number) => {
        setSelectedDate(date); // 버튼을 클릭하면 선택된 날짜를 설정합니다.
        openDayLetterModal();
        closeLetterListModal();
    };

    return (
        <>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                modalTitle={'벚꽃을 기다리는 편지'}
                modalType={'Modal'}
            >
                <Styled.Wrapper>
                    <Styled.InnerWrapper>
                        <Styled.ButtonWrapper>
                            {Array.from({ length: 35 }).map((_, index) => {
                                const date = index + 1;
                                let isButtonActive = false;
                                if (nowDate !== null && date < nowDate) {
                                    isButtonActive = true;
                                } else if (nowDate !== null && date === nowDate) {
                                    isButtonActive = true;
                                } 

                                return (
                                    <Styled.DayButton
                                        key={index}
                                        onClick={() => {
                                            if (isButtonActive) {
                                                handleLetterReadModalOpen(date);
                                            } else {
                                                setSelectedDate(date); // 사용자가 클릭한 날짜 업데이트
                                                const daysLeft = date - nowDate; // 열람까지 남은 일수 계산
                                                displayToast(`${daysLeft}일 뒤에 열람 가능해요.`);
                                            }
                                        }}
                                        image={
                                        (!isButtonActive ? DisabledFlowerBigImg : flowerBigImg) }
                                    >
                                    {date}
                                    </Styled.DayButton>
                                );
                            })}
                        </Styled.ButtonWrapper>
                    </Styled.InnerWrapper>
                </Styled.Wrapper>
            </Modal>

            {showToast && <Toast message={message} />}

            <DayLetterModal 
                onClose={closeDayLetterModal} 
                isOpen={isOpenDayLetterModal}
                selectedDate={selectedDate}
            />
        </>
    );
}

export default React.memo(LetterListModal);