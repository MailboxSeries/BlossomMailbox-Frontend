import * as Styled from './style';
import React, { useCallback, useState } from 'react';
import Modal from '@/components/common/Modal';
import { useRecoilValue } from 'recoil';
import DisabledFlowerLeafBigImg from '@/assets/flower/flowerBtnDisabled.png';
import flowerLeafBigImg from '@/assets/flower/flowerBtnBig.png';

type Props = {
  closeModal: () => void;
  isOpen: boolean;
};

function LetterListModal({closeModal, isOpen}: Props) {
    const nowDate = 3; //TODO: 서버로 부터 받은 값으로 변경. 이건 임시 값 
    const [selectedDate, setSelectedDate] = useState<number>(1);
    const [LetterReadModalOpen, setLetterReadModalOpen] = useState<boolean>(false);
    const closeLetterReadModal = useCallback(
        () => setLetterReadModalOpen(false),
        [setLetterReadModalOpen],
    );

    const handleLetterReadModalOpen = (selectedDate: number) => {
        setSelectedDate(selectedDate); // 버튼을 클릭하면 선택된 날짜를 설정합니다.
        setLetterReadModalOpen(true);
    };

    return (
        <>
        <Modal
        isOpen={isOpen}
        onClose={closeModal}
        modalTitle={'벚꽃을 기다리는 편지'}
        modalType={'Modal'}
        >
        <Styled.Wrapper>
            <Styled.InnerWrapper>
                <Styled.ButtonWrapper>
                    {Array.from({ length: 25 }).map((_, index) => {
                    
                        const date = index + 1;
                        let isButtonActive = false;
                        if (nowDate !== null && date < nowDate) {
                            isButtonActive = true;
                        } else if (nowDate !== null && date === nowDate) {
                            isButtonActive = true;
                        } 

                        return (
                            <Styled.OrnamentButton
                            key={index}
                            onClick={() => {
                                if (isButtonActive) {
                                    handleLetterReadModalOpen(date);
                                } else {
                                    alert(`${date - nowDate}일 뒤에 열람 가능해요.`)
                                }
                            }}
                            OrnamentImage={
                            (!isButtonActive ? DisabledFlowerLeafBigImg : flowerLeafBigImg ) }
                            >
                            {date}
                            </Styled.OrnamentButton>
                        );
                    })}
                </Styled.ButtonWrapper>
            </Styled.InnerWrapper>
        </Styled.Wrapper>
        </Modal>

         {/* 편지 리스트 모달 */}
        </>
    );
}
export default React.memo(LetterListModal);
