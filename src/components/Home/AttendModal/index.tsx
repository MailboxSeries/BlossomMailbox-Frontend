import Modal from '@/components/common/Modal';
import { AttendModalProps } from '@/interfaces/modal';
import * as Styled from './style';
import React from 'react';
import useModal from '@/hooks/useModal';
import useToast from '@/hooks/useToast';
import MediumButton from '@/components/MediumButton';
import CatModal from '@/components/Home/CatModal';
import { useSetRecoilState } from 'recoil';
import { getCatState } from '@/atoms/getCatState';

function AttendModal({ isOpen, onClose, createdDayCnt }: AttendModalProps) {
    const { displayToast } = useToast();
    const attendanceCompleted = false; //TODO: 임시값
    const getCat = true; //TODO: 임시값
    const { isOpenModal: isOpenCatModal, openModal: openCatModal, closeModal: closeCatModal } = useModal('CatModal');
    const setCatState = useSetRecoilState(getCatState);

    const handleAttend = () => {
        if(getCat) {
            setCatState((prevState) => ({
                ...prevState,
                getCat: true,
                catID: 3
            }));
            onClose();
        } else { 
            onClose();
            displayToast('출석하셨어요! 고양이에게 스킨을 받아가세요.');
        }
    }

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose} modalTitle="" modalType='SmallModal'>
                <Styled.Wrapper>
                    <Styled.InnerWrapper>
                    {attendanceCompleted ? (
                        <>
                            <Styled.ModalText>
                                {`이미 오늘 출석을 완료했어요! \n 내일을 기대해주세요!`}
                            </Styled.ModalText>
                            <MediumButton 
                                onClick={() => onClose()}
                                margin='40px 0 0 0'
                            >
                                확인
                            </MediumButton>
                        </>
                    ) : (
                        <>
                            <Styled.ModalText>
                                {`${createdDayCnt}일차 출석이예요! \n 출석하고 스킨 보상을 받아보세요!`}
                            </Styled.ModalText>
                            <MediumButton 
                                onClick={() => handleAttend()}
                                margin='40px 0 0 0'
                            >
                                출석하기
                            </MediumButton>
                        </>
                    )}
                    </Styled.InnerWrapper>
                </Styled.Wrapper>
            </Modal>

            {isOpenCatModal && (
                <CatModal
                    isOpen={isOpenCatModal}
                    onClose={closeCatModal}
                    catNum={1} //TODO: 임시
                />
            )}
        </>
    );
}

export default React.memo(AttendModal);