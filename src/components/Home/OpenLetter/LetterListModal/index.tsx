import * as Styled from './style';
import React from 'react';
import Modal from '@/components/common/Modal';
import DisabledFlowerBigImg from '@/assets/flower/flowerBtnDisabled.png';
import flowerBigImg from '@/assets/flower/flowerBtnBig.png';
import flowerBudButtonImg from '@/assets/flower/flowerBudButton.png';
import useToast from '@/hooks/useToast';
import { LetterListModalProps } from '@/interfaces/modal';
import useModal from '@/hooks/useModal';
import DayLetterListModal from '@/components/Home/OpenLetter/DayLetterListModal';
import { useGetLetterListStatus } from '@/hooks/useGetLetterListStatus';
import { useSetRecoilState } from 'recoil';
import { selectedDateState } from '@/atoms/selectedDateState';

function LetterListModal({onClose, isOpen, createdDayCnt}: LetterListModalProps) {
    const { displayToast } = useToast();
    const { isOpenModal: isOpenDayLetterListModal,
        openModal: openDayLetterListModal, 
        closeModal: closeDayLetterListModal } = useModal('DayLetterListModal');
    const { closeModal: closeLetterListModal } = useModal('LetterListModal');
    const { data } = useGetLetterListStatus();
    const setSelectedDate = useSetRecoilState(selectedDateState);
    
    const handleDayLetterListModalOpen = (date: number) => {
        setSelectedDate(date);
        closeLetterListModal();
        openDayLetterListModal();
    };

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose} modalTitle={'벚꽃을 기다리는 편지'} modalType={'Modal'}>
                <Styled.Wrapper>
                    <Styled.InnerWrapper>
                        <Styled.ButtonWrapper>
                            {data.map((item, index: number) => {
                                const date: number = index + 1;
                                let buttonImage = DisabledFlowerBigImg; // 기본 이미지는 비활성화 이미지로 설정

                                // 상태에 따라 버튼 이미지 변경
                                if (item.status === "active") {
                                    buttonImage = flowerBigImg;
                                } else if (item.status === "inactive") {
                                    buttonImage = flowerBudButtonImg;
                                }

                                return (
                                    <Styled.DayButton
                                        key={date}
                                        onClick={() => {
                                            if (item.status === "active") {
                                                handleDayLetterListModalOpen(date);
                                            } else if (item.status === "inactive") {
                                                displayToast(`${date}일차 벚꽃 편지는 ${date - createdDayCnt}일 뒤에 열람 가능해요.`);
                                            } else {
                                                displayToast(`이 날짜의 벚꽃 편지는 지난 날짜입니다.`);
                                            }
                                        }}
                                        image={buttonImage}
                                    >
                                        {date}
                                    </Styled.DayButton>
                                );
                            })}
                        </Styled.ButtonWrapper>
                    </Styled.InnerWrapper>
                </Styled.Wrapper>
            </Modal>
            
            {isOpenDayLetterListModal && (
                <DayLetterListModal 
                    onClose={closeDayLetterListModal} 
                    isOpen={isOpenDayLetterListModal}
                />
            )}
        </>
    );
}

export default React.memo(LetterListModal);