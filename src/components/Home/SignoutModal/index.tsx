import Modal from '@/components/common/Modal';
import { SignoutModalProps } from '@/interfaces/modal';
import * as Styled from './style';
import { useSignout } from '@/hooks/useSignout';
import ShortButton from '@/components/ShortButton';
import React from 'react';
import useModal from '@/hooks/useModal';
import useInput from '@/hooks/useInput';
import useToast from '@/hooks/useToast';
import { useLogout } from '@/hooks/useLogout';

function SignoutModal({ isOpen, onClose }: SignoutModalProps) {
    const { closeModal: closeSignoutModal } = useModal('SignoutModal');
    const { mutate: signout } = useSignout();
    const { mutate: logout } = useLogout();
    const input = useInput<HTMLInputElement>(); // 보내는 사람 이름을 관리하는 상태
    const { displayToast } = useToast();

    const handleSignOut = () => {
        logout();
        if(input.value == 'BloSsomMailBox'){
            signout();
        } else {
            displayToast('잘못 입력하셨어요! 다시 입력해주세요.');
            closeSignoutModal();
        }
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose} modalTitle="" modalType='SmallModal'>
            <Styled.Wrapper>
                <Styled.InnerWrapper>
                    <Styled.ModalText>
                        지금까지의 모든 데이터가 삭제됩니다. 탈퇴하시겠어요?
                    </Styled.ModalText>
                    <Styled.NameInput
                        maxLength={100}
                        type="text"
                        name="guestName" // 상태와 일치하는 name 속성
                        placeholder="'BloSsomMailBox'을 입력해주세요."
                        value={input.value}
                        onChange={input.handleChange}
                    />
                    <Styled.RowContainer>
                        <ShortButton 
                            position='relative'
                            onClick={() => handleSignOut()}
                        >
                            확인
                        </ShortButton>
                        <ShortButton 
                            position='relative'
                            onClick={() => closeSignoutModal()}
                        >
                            취소
                        </ShortButton>
                    </Styled.RowContainer>
                </Styled.InnerWrapper>
            </Styled.Wrapper>
        </Modal>
    );
}

export default React.memo(SignoutModal);