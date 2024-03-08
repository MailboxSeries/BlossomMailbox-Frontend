import Modal from '@/components/common/Modal';
import { AttendModalProps } from '@/interfaces/modal';
import * as Styled from './style';
import React from 'react';
import useModal from '@/hooks/useModal';
import useToast from '@/hooks/useToast';
import MediumButton from '@/components/common/Button/MediumButton';
import CatModal from '@/components/Home/CatModal';
import { useRecoilState } from 'recoil';
import { getCatState } from '@/atoms/getCatState';
import { useGetAttendanceStatus } from '@/hooks/useGetAttendanceStatus';
import { useQueryClient } from '@tanstack/react-query';
import { usePostAttend } from '@/hooks/usePostAttend';
import { useNavigate } from 'react-router-dom';
import { isAxiosError } from 'axios';
import { useLogout } from '@/hooks/useLogout';

function AttendModal({ isOpen, onClose, createdDayCnt }: AttendModalProps) {
    const { displayToast } = useToast();
    //const { data } = useGetAttendanceStatus(); //TODO: 더미데이터 삭제 후 이걸로 교체
    const queryClient = useQueryClient();
    const { mutate }  = usePostAttend();
    const data = { attendanceCompleted: false, getCat: true }; //TODO: 임시값
    const { isOpenModal: isOpenCatModal, openModal: openCatModal, closeModal: closeCatModal } = useModal('CatModal');
    const [catState, setCatState] = useRecoilState(getCatState);
    const { mutate: logout } = useLogout();
    
    const handleAttend = () => {
        mutate(null, {
            onSuccess: async (data) => {
                await queryClient.invalidateQueries({queryKey: ['attendance']});
                if(data.getCat) {
                    setCatState((prevState) => ({
                        ...prevState,
                        getCat: data.getCat,
                        catID: data.catID
                    }));
                    onClose();
                } else { 
                    onClose();
                    displayToast('출석하셨어요! 고양이에게 스킨을 받아가세요.');
                }
            },
                onError: (error) => {
                    if(isAxiosError(error)) {
                        logout();
                        onClose();
                    }
                    logout();
                    onClose();

                },
        });
    }

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose} modalTitle="" modalType='SmallModal'>
                <Styled.Wrapper>
                    <Styled.InnerWrapper>
                    {data.attendanceCompleted ? (
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
                    catID={catState.catID}
                />
            )}
        </>
    );
}

export default React.memo(AttendModal);