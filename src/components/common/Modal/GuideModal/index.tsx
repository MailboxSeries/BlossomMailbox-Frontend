import * as Styled from './style';
import React from 'react';
import Modal from '@/components/common/Modal';
import { GuideModalProps } from '@/interfaces/modal';

function GuideModal({onClose, isOpen}: GuideModalProps) {

    return (
        <Modal isOpen={isOpen} onClose={onClose} modalTitle={'이용안내'} modalType={'Modal'}>
            <Styled.Wrapper>
                <Styled.InnerWrapper>
                    
                </Styled.InnerWrapper>
            </Styled.Wrapper>
        </Modal>
    );
}

export default React.memo(GuideModal);