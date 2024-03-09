import * as Styled from './style';
import React, { useEffect } from 'react';
import Modal from '@/components/common/Modal';
import { LetterModalProps } from '@/interfaces/modal';
import useModal from '@/hooks/useModal';
import BackButton from '@/components/common/Button/BackButton';
import ReplyButton from '@/components/Home/OpenLetter/ReplyButton';
import ReplyModal from '@/components/Home/OpenLetter/ReplyModal';
import { useGetLetter } from '@/hooks/useGetLetter';

function LetterReadModal({onClose, isOpen, id}: LetterModalProps) {
    const { openModal: openDayLetterListModal } = useModal('DayLetterListModal');
    const { isOpenModal: isOpenReplyModal, openModal: openReplyModal, closeModal: closeReplyModal } = useModal('ReplyModal');
    const { data } = useGetLetter(id);

    const handleBackButton = () => {
        onClose();
        openDayLetterListModal();
    }

    const handleOpenReplyModal = () => {
        onClose();
        openReplyModal();
    }

    return (
        <>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                modalTitle={''}
                modalType={'Modal'}
            >
                <BackButton onClick={() => handleBackButton()}/>
                <Styled.Wrapper>
                    <ReplyButton onClick={() => handleOpenReplyModal()}>
                        답장
                    </ReplyButton>
                    <Styled.InnerWrapper>
                        {data.sendLetter && (
                            <>
                                <Styled.SenderNameText>RE:</Styled.SenderNameText>
                                <Styled.ImageWrapper>
                                    <Styled.LetterImage src={data.sendLetter.image} />
                                </Styled.ImageWrapper>
                                <Styled.LetterContentText>{data.sendLetter.content}</Styled.LetterContentText>  
                                <Styled.Line />
                            </>
                        )}
                        <Styled.SenderNameText>보낸이 : {data.replyLetter.nickname}</Styled.SenderNameText>
                        <Styled.ImageWrapper>
                            <Styled.LetterImage src={data.replyLetter.image} />
                        </Styled.ImageWrapper>
                        <Styled.LetterContentText>{data.replyLetter.content}</Styled.LetterContentText>
                    </Styled.InnerWrapper>
                </Styled.Wrapper>
            </Modal>

            {isOpenReplyModal && (
                <ReplyModal 
                    onClose={closeReplyModal}
                    isOpen={isOpenReplyModal}
                    data={data}
                    id={id}
                />
            )}
        </>
    );
}

export default React.memo(LetterReadModal);