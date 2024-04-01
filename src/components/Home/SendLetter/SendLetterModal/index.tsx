import * as Styled from './style';
import React, { useState } from 'react';
import Modal from '@/components/common/Modal';
import { SendLetterModalProps } from '@/interfaces/modal';
import LongButton from '@/components/common/Button/LongButton';
import useToast from '@/hooks/useToast';
import { usePostLetter } from '@/hooks/usePostLetter';
import { isAxiosError } from 'axios';
import { useLogout } from '@/hooks/useLogout';
import useIsMyHome from '@/hooks/useIsMyHome';
import { useForm } from 'react-hook-form';

interface IForm {
    sender: string;
    content: string;
    imageFile: File | null;
}

function SendLetterModal({onClose, isOpen}: SendLetterModalProps) {
    const { displayToast } = useToast();
    const { mutate }  = usePostLetter();
    const { mutate: logout } = useLogout();
    const { ownerId } = useIsMyHome();
    const [isLoading, setIsLoading] = useState(false); // 로딩 상태 관리
    const { register, handleSubmit, watch, setValue} = useForm({
        defaultValues: {
            sender: '',
            content: '',
            imageFile: null,
        }
    });
    const uploadedImage = watch("imageFile");
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setValue("imageFile", file);
        }
    };

    /** 편지 보내기 핸들링  */ 
    const onSubmit = async (data) => {
        if(isLoading) {
            displayToast(`편지가 보내지고 있어요. 잠시만 기다려주세요.`);
            return;
        }
        const { sender, content, imageFile } = data;
        if (!sender.trim() || !content.trim()) {
            displayToast(`이름과 편지 모두 입력해야 해요.`);
            return;
        } else {
            setIsLoading(true); // 로딩 시작
            const postData = {
                body: {
                    sender,
                    content,
                    receiverId: ownerId,
                },
                imageFile,
            }
            mutate(postData, {
                onSuccess: () => {
                    onClose();
                    displayToast(`편지를 보냈어요! 답장을 기다려보아요!`);
                    setIsLoading(false); // 로딩 종료
                },
                onError: (error) => {
                    if (isAxiosError(error)) {
                        logout();
                        setIsLoading(false); // 로딩 종료
                    }
                    logout();
                    setIsLoading(false); // 로딩 종료
                },
            });
        }
    };

    return (
        <>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                modalTitle="편지 보내기"
                modalType="Modal"
            >
                <Styled.Wrapper as="form" onSubmit={handleSubmit(onSubmit)}>
                    <Styled.ImageUploadLabel htmlFor="image-upload" onClick={(event) => event.stopPropagation()}>
                        <Styled.ImageUploadLabelText>사진 올리기(선택)</Styled.ImageUploadLabelText>
                        <Styled.ImageInput
                            {...register("imageFile")}
                            id="image-upload"
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                        />
                        {uploadedImage && <Styled.ImagePreview src={URL.createObjectURL(uploadedImage)} />}
                    </Styled.ImageUploadLabel>
                    <Styled.NameInput
                        {...register("sender", { required: true })}
                        maxLength={10}
                        type="text"
                        placeholder="이름을 적어주세요."
                    />
                    <Styled.CheckTextLength>{watch('sender').length}/10</Styled.CheckTextLength>
                    <Styled.LetterArea
                        {...register("content", { required: true })}
                        placeholder="따뜻한 마음을 남겨주세요."
                        maxLength={200}
                    />
                    <Styled.CheckTextLength>{watch('content').length}/200</Styled.CheckTextLength>
                    <LongButton type="submit">
                        보내기
                    </LongButton>
                </Styled.Wrapper>
            </Modal>
        </>
    );
}

export default React.memo(SendLetterModal);