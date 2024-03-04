import Modal from '@/components/common/Modal';
import { LogoutModalProps } from '@/interfaces/modal';
import * as Styled from './style';
import BackButton from '@/components/BackButton';
import MediumButton from '../MediumButton';
import { useLogout } from '@/hooks/useLogout';

function LogoutModal({ isOpen, onClose }: LogoutModalProps) {
    const logout = useLogout();

    const handleLogout = () => {
        //logout;
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose} modalTitle="" modalType='SmallModal'>
            <BackButton margin="15px 0 0 15px" onClick={onClose} />
            <Styled.Wrapper>
                <Styled.InnerWrapper>
                    <Styled.ModalText>
                        로그아웃 하시겠어요?
                    </Styled.ModalText>
                    <MediumButton 
                        top={"210px"} 
                        position='absolute'
                        onClick={() => handleLogout()}
                    >
                        로그아웃
                    </MediumButton>
                </Styled.InnerWrapper>
            </Styled.Wrapper>
        </Modal>
    );
}

export default LogoutModal;
