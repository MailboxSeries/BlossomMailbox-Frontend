import * as Styled from './style';
import React from 'react';
import Modal from '@/components/common/Modal';
import { LetterModalProps } from '@/interfaces/modal';
import useModal from '@/hooks/useModal';
import BackButton from '@/components/BackButton';
import ReplyButton from '@/components/Home/OpenLetter/ReplyButton';
import ReplyModal from '@/components/Home/OpenLetter/ReplyModal';

const data = {
    reply: true,
    myContent: "Hi Alice, how are you? adsfasdfasdfsdafasdfasdfas",
    myImage: "myImage1.jpg",
    sender: "Alice",
    content: "I'm good, thanks for asking! asdfdasfasdfasdf",
    image: "image1.jpg"
}

function LetterReadModal({onClose, isOpen, id}: LetterModalProps) {
    const { openModal: openDayLetterListModal } = useModal('DayLetterListModal');
    const { isOpenModal: isOpenReplyModal, openModal: openReplyModal, closeModal: closeReplyModal } = useModal('ReplyModal');

    const handleBackButton = () => {
        onClose();
        openDayLetterListModal();
    }
    //TODO: id를 파라미터로 보내서 편지 내용을 가져오기

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
                {data.reply && (
                    <ReplyButton onClick={() => handleOpenReplyModal()}>
                        답장
                    </ReplyButton>
                )}
                    <Styled.InnerWrapper>
                        {data.reply && (
                            <>
                                <Styled.SenderNameText>RE:</Styled.SenderNameText>
                                <Styled.ImageWrapper>
                                    <Styled.LetterImage src={data.myImage} />
                                </Styled.ImageWrapper>
                                <Styled.LetterContentText>{data.myContent}</Styled.LetterContentText>  
                                <Styled.Line />
                            </>
                        )}
                        <Styled.SenderNameText>보낸이 : {data.sender}</Styled.SenderNameText>
                        <Styled.ImageWrapper>
                            <Styled.LetterImage src={data.image} />
                        </Styled.ImageWrapper>
                        <Styled.LetterContentText>{data.content}</Styled.LetterContentText>
                    </Styled.InnerWrapper>
                </Styled.Wrapper>
            </Modal>

            {isOpenReplyModal && (
                <ReplyModal 
                    onClose={closeReplyModal}
                    isOpen={isOpenReplyModal}
                    data={data}
                />
            )}
        </>
    );
}

export default React.memo(LetterReadModal);