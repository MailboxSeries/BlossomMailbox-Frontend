import * as Styled from './style';
import React, { useState } from 'react';
import Modal from '@/components/common/Modal';
import DisabledFlowerBigImg from '@/assets/flower/flowerBtnDisabled.png';
import flowerBigImg from '@/assets/flower/flowerBtnBig.png';
//import flowerBudBtnImg from '@/assets/flower/flowerBudBtn.png'; // TODO: 준비되면 이걸로 교체
import flowerBudBtnImg from '@/assets/flower/flowerBtnDisabled.png';
import useToast from '@/hooks/useToast';
import { LetterListModalProps } from '@/interfaces/modal';
import useModal from '@/hooks/useModal';
import DayLetterListModal from '@/components/Home/OpenLetter/DayLetterListModal';

const data = [
    {status: "disable"},
    {status: "disable"},
    {status: "disable"},
    {status: "disable"},
    {status: "disable"},
    {status: "disable"},
    {status: "disable"},
    {status: "disable"},
    {status: "disable"},
    {status: "disable"},
    {status: "active"},
    {status: "inactive"},
    {status: "inactive"},
    {status: "inactive"},
    {status: "inactive"},
    {status: "inactive"},
    {status: "inactive"},
    {status: "inactive"},
    {status: "inactive"},
    {status: "inactive"},
    {status: "inactive"},
    {status: "inactive"},
    {status: "inactive"},
    {status: "inactive"},
    {status: "inactive"},
    {status: "inactive"},
    {status: "inactive"},
    {status: "inactive"},
    {status: "inactive"},
    {status: "inactive"},
    {status: "inactive"},
    {status: "inactive"},
    {status: "inactive"},
    {status: "inactive"},
    {status: "inactive"}
]


function LetterListModal({onClose, isOpen, createdDayCnt}: LetterListModalProps) {
    const { displayToast } = useToast();
    const { isOpenModal: isOpenDayLetterListModal,
        openModal: openDayLetterListModal, 
        closeModal: closeDayLetterListModal } = useModal('DayLetterListModal');
        const { closeModal: closeLetterListModal } = useModal('LetterListModal');

    const [selectedDate, setSelectedDate] = useState<number>(1);
    const handleDayLetterListModalOpen = (date: number) => {
        setSelectedDate(date); // 버튼을 클릭하면 선택된 날짜를 설정
        closeLetterListModal();
        openDayLetterListModal();
    };


    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose} modalTitle={'벚꽃을 기다리는 편지'} modalType={'Modal'}>
                <Styled.Wrapper>
                    <Styled.InnerWrapper>
                        <Styled.ButtonWrapper>
                            {data.map((item, index) => {
                                const date = index + 1;
                                let buttonImage = DisabledFlowerBigImg; // 기본 이미지는 비활성화 이미지로 설정

                                // 상태에 따라 버튼 이미지 변경
                                if (item.status === "active") {
                                    buttonImage = flowerBigImg;
                                } else if (item.status === "inactive") {
                                    buttonImage = flowerBudBtnImg;
                                }

                                return (
                                    <Styled.DayButton
                                        key={date}
                                        onClick={() => {
                                            if (item.status === "active") {
                                                handleDayLetterListModalOpen(date);
                                            } else if (item.status === "inactive") {
                                                displayToast(`${date}일차 벚꽃 편지는 ${createdDayCnt}일 뒤에 열람 가능해요.`);
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

                <DayLetterListModal 
                    onClose={closeDayLetterListModal} 
                    isOpen={isOpenDayLetterListModal}
                    selectedDate={selectedDate}
                />
        </>
    );
}

export default React.memo(LetterListModal);