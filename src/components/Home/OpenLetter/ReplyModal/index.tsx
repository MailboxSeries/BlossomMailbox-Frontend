import * as Styled from './style';
import React from 'react';
import Modal from '@/components/common/Modal';
import { ReplyModalProps } from '@/interfaces/modal';
import useModal from '@/hooks/useModal';
import BackButton from '@/components/BackButton';
import ReplyButton from '@/components/Home/OpenLetter/ReplyButton';
import useToast from '@/hooks/useToast';
import useInput from '@/hooks/useInput';
import { useImageUpload } from '@/hooks/useImageUpload';

function ReplyModal({onClose, isOpen, data}: ReplyModalProps) {
    const { displayToast } = useToast();
    const { openModal: openLetterReadModal } = useModal('LetterReadModal');
    const sender = useInput<HTMLInputElement>(); // 보내는 사람 이름을 관리하는 상태
    const content = useInput<HTMLTextAreaElement>(); // 편지 내용을 관리하는 상태
    const { uploadedImage, handleFileInputChange } = useImageUpload();

    const handleBackButton = () => {
        onClose();
        openLetterReadModal();
    }

    const handleSendReply = () => {
        if (!sender.value.trim() || !content.value.trim()) {
            displayToast(`이름과 편지 모두 입력해야 해요.`);
            return;
        } else {
            //TODO: mutate
            onClose();
            displayToast(`${data.sender}님께 답장을 보냈어요!`);
        }
    }
    return (
        <>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                modalTitle={'답장하기'}
                modalType={'Modal'}
            >
                <BackButton onClick={() => handleBackButton()}/>
                <Styled.Wrapper>
                    <ReplyButton onClick={() => handleSendReply()}>
                        보내기
                    </ReplyButton>
                    <Styled.InnerWrapper>
                        <Styled.SenderNameText>보낸이 : {data.sender}</Styled.SenderNameText>
                        <Styled.ImageWrapper>
                            <Styled.LetterImage src={data.image} />
                        </Styled.ImageWrapper>
                        <Styled.LetterContentText>{data.content}</Styled.LetterContentText>
                        <Styled.Line />
                        <Styled.Form>
                            <Styled.ImageUploadLabel
                                htmlFor="image-upload"
                                onClick={(event) => event.stopPropagation()}
                            > 
                            <Styled.ImageUploadLabelText>
                                사진 올리기(선택)
                            </Styled.ImageUploadLabelText>
                                <Styled.ImageInput
                                    id="image-upload"
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFileInputChange}
                                />
                                {uploadedImage && <Styled.ImagePreview src={uploadedImage as string} />}
                            </Styled.ImageUploadLabel>
                            <Styled.NameInput
                                maxLength={10}
                                type="text"
                                name="guestName" // 상태와 일치하는 name 속성
                                placeholder="이름을 적어주세요."
                                value={sender.value}
                                onChange={sender.handleChange}
                            />
                            <Styled.CheckTextLength>{sender.value.length}/10</Styled.CheckTextLength>
                            <Styled.LetterArea
                                placeholder="따뜻한 마음을 남겨주세요."
                                maxLength={200}
                                value={content.value}
                                onChange={content.handleChange}
                            />
                            <Styled.CheckTextLength>{content.value.length}/200</Styled.CheckTextLength>
                        </Styled.Form>
                    </Styled.InnerWrapper>
                </Styled.Wrapper>
            </Modal>

        </>
    );
}

export default React.memo(ReplyModal);