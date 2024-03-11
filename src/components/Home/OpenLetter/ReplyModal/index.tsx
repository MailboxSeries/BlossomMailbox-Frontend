import * as Styled from './style';
import React, { useState } from 'react';
import Modal from '@/components/common/Modal';
import { ReplyModalProps } from '@/interfaces/modal';
import useModal from '@/hooks/useModal';
import BackButton from '@/components/common/Button/BackButton';
import ReplyButton from '@/components/Home/OpenLetter/ReplyButton';
import useToast from '@/hooks/useToast';
import useInput from '@/hooks/useInput';
import { useImageUpload } from '@/hooks/useImageUpload';
import { usePostLetter } from '@/hooks/usePostLetter';
import { useQueryClient } from '@tanstack/react-query';
import { useLogout } from '@/hooks/useLogout';
import { isAxiosError } from 'axios';

function ReplyModal({onClose, isOpen, data, id}: ReplyModalProps) {
    const { displayToast } = useToast();
    const queryClient = useQueryClient();
    const { openModal: openLetterReadModal } = useModal('LetterReadModal');
    const content = useInput<HTMLTextAreaElement>(); // 편지 내용을 관리하는 상태
    const { imageFile, uploadedImage, handleFileInputChange } = useImageUpload();
    const { mutate }  = usePostLetter();
    const { mutate: logout } = useLogout();
    const [isLoading, setIsLoading] = useState(false); // 로딩 상태 관리

    const handleBackButton = () => {
        onClose();
        openLetterReadModal();
    }

    /** 편지 답장하기 핸들링 */
    const handleSendReply = () => {
        if (!content.value.trim()) {
            displayToast(`편지를 입력해야 해요.`);
            return;
        } else {
            setIsLoading(true); // 로딩 시작
            const postData = {
                body: {
                    id: id,
                    content: content.value,
                },
                imageFile: imageFile,
            }
            mutate(postData, {
                onSuccess: async () => {
                    onClose();
                    displayToast(`${data.replyLetter.nickname}님께 답장을 보냈어요!`);
                    queryClient.fetchQuery({ queryKey: ['letter', id] });
                    setIsLoading(false); // 로딩 종료
                },
                onError: (error) => {
                    if(isAxiosError(error)) {
                        logout();
                    }
                    logout(); 
                    setIsLoading(false); // 로딩 종료                   
                },
            });
        }
    }

    return (
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                modalTitle={'답장하기'}
                modalType={'Modal'}
            >
                <BackButton onClick={() => handleBackButton()}/>
                <Styled.Wrapper>
                    <ReplyButton onClick={() => handleSendReply()} disabled={isLoading}>
                        보내기
                    </ReplyButton>
                    <Styled.InnerWrapper>
                        <Styled.SenderNameText>보낸이 : {data.replyLetter.nickname}</Styled.SenderNameText>
                        {data.replyLetter.image &&
                            <Styled.ImageWrapper>
                                <Styled.LetterImage src={data.replyLetter.image} />
                            </Styled.ImageWrapper>
                        }
                        <Styled.LetterContentText>{data.replyLetter.content}</Styled.LetterContentText>
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
    );
}

export default React.memo(ReplyModal);