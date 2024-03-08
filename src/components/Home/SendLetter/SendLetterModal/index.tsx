import * as Styled from './style';
import React from 'react';
import Modal from '@/components/common/Modal';
import { SendLetterModalProps } from '@/interfaces/modal';
import useInput from '@/hooks/useInput';
import LongButton from '@/components/common/Button/LongButton';
import useToast from '@/hooks/useToast';
import { useImageUpload } from '@/hooks/useImageUpload';
import { usePostLetter } from '@/hooks/usePostLetter';
import { isAxiosError } from 'axios';
import { useLogout } from '@/hooks/useLogout';
import useIsMyHome from '@/hooks/useIsMyHome';

function SendLetterModal({onClose, isOpen}: SendLetterModalProps) {
    const { displayToast } = useToast();
    const sender = useInput<HTMLInputElement>(); // 보내는 사람 이름을 관리하는 상태
    const content = useInput<HTMLTextAreaElement>(); // 편지 내용을 관리하는 상태
    const { imageFile, uploadedImage, handleFileInputChange } = useImageUpload();
    const { mutate }  = usePostLetter();
    const { mutate: logout } = useLogout();
    const { ownerId } = useIsMyHome();

    /** 편지 보내기 핸들링  */ 
    const handleSendLetter = async () => {
        if (!sender.value.trim() || !content.value.trim()) {
            displayToast(`이름과 편지 모두 입력해야 해요.`);
            return;
        } else {
            const postData = {
                body: {
                    sender: sender.value,
                    content: content.value,
                    receiverId: ownerId,
                },
                imageFile: imageFile,
            }
            mutate(postData, {
                onSuccess: async () => {
                    onClose();
                    displayToast(`편지를 보냈어요! 답장을 기다려보아요!`);
                },
                onError: (error) => {
                    if(isAxiosError(error)) {
                        logout();
                    }
                    logout();                    
                },
            });
        }
    }

    return (
        <>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                modalTitle={`편지 보내기`}
                modalType={'Modal'}
            >
                <Styled.Wrapper>
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
                    <LongButton onClick={() => handleSendLetter()}>
                        보내기
                    </LongButton>
                </Styled.Wrapper>
            </Modal>
        </>
    );
}

export default React.memo(SendLetterModal);