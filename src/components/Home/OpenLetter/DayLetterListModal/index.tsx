import * as Styled from './style';
import React from 'react';
import Modal from '@/components/common/Modal';
import { DayLetterListModalProps } from '@/interfaces/modal';
import useModal from '@/hooks/useModal';
import BackButton from '@/components/common/Button/BackButton';
import LetterList from '@/components/Home/OpenLetter/LetterList';
import { useGetDayLetterList } from '@/hooks/useGetDayLetterList';
import { useRecoilValue } from 'recoil';
import { selectedDateState } from '@/atoms/selectedDateState';

function DayLetterListModal({onClose, isOpen}: DayLetterListModalProps) {
    const { openModal: openLetterListModal } = useModal('LetterListModal');
    const selectedDate = useRecoilValue(selectedDateState);
    const { data } = useGetDayLetterList(selectedDate);
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
                {data.letters.length === 0 ? (
                    <Styled.NoLetterWrapper>
                        <Styled.Text>
                            받은 편지가 없어요.
                        </Styled.Text>
                    </Styled.NoLetterWrapper>
                ) : (
                    <Styled.InnerWrapper>
                        <LetterList data={data}/>
                    </Styled.InnerWrapper>
                )}
                </Styled.Wrapper>
            </Modal>
        </>
    );
}

export default React.memo(DayLetterListModal);