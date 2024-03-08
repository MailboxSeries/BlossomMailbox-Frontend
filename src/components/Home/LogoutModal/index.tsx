import Modal from '@/components/common/Modal';
import { LogoutModalProps } from '@/interfaces/modal';
import * as Styled from './style';
import BackButton from '@/components/BackButton';
import MediumButton from '../../MediumButton';
import { useLogout } from '@/hooks/useLogout';
import SignoutButton from '@/components/Home/SignoutButton';
import React from 'react';
import useModal from '@/hooks/useModal';
import SignoutModal from '@/components/Home/SignoutModal';

function LogoutModal({ isOpen, onClose }: LogoutModalProps) {
    const { isOpenModal: isOpenSignoutModal, openModal: openSignoutModal, closeModal: closeSignoutModal } = useModal('SignoutModal');
    const { closeModal: closeLogoutModal } = useModal('LogoutModal');
    const { mutate: logout } = useLogout();

    const handleLogout = () => {
        logout();
    }

    const handleSignouSummitModalOpen = () => {
        closeLogoutModal();
        openSignoutModal();
    }

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose} modalTitle="" modalType='SmallModal'>
                <BackButton margin="15px 0 0 15px" onClick={closeLogoutModal} />
                <Styled.Wrapper>
                    <Styled.InnerWrapper>
                        <Styled.ModalText>
                            로그아웃 하시겠어요?
                        </Styled.ModalText>
                        <MediumButton 
                            top={"60px"} 
                            position='relative'
                            onClick={() => handleLogout()}
                        >
                            로그아웃
                        </MediumButton>
                        <SignoutButton onClick={() => handleSignouSummitModalOpen()}/>
                    </Styled.InnerWrapper>
                </Styled.Wrapper>
            </Modal>

            {isOpenSignoutModal && 
                <SignoutModal 
                onClose={closeSignoutModal}
                isOpen={isOpenSignoutModal}
                />
            }
        </>
    );
}

export default React.memo(LogoutModal);