import * as Styled from './style';
import React from 'react';
import Modal from '@/components/common/Modal';
import { LetterModalProps } from '@/interfaces/modal';
import useModal from '@/hooks/useModal';
import BackButton from '@/components/BackButton';

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
    const handleBackButton = () => {
        onClose();
        openDayLetterListModal();
    }
    //TODO: id를 파라미터로 보내서 편지 내용을 가져오기
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

        </>
    );
}

export default React.memo(LetterReadModal);