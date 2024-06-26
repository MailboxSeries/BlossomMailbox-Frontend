import * as Styled from './style';
import React, { useEffect } from 'react';
import Modal from '@/components/common/Modal';
import { SendLetterModalProps } from '@/interfaces/modal';
import LongButton from '@/components/common/Button/LongButton';
import useToast from '@/hooks/useToast';
import { usePostLetter } from '@/hooks/usePostLetter';
import useIsMyHome from '@/hooks/useIsMyHome';
import { useForm } from 'react-hook-form';

interface IForm {
    sender: string;
    content: string;
    image: File | null;
    previewImage?: string | null;
}

function SendLetterModal({onClose, isOpen}: SendLetterModalProps) {
    const { displayToast } = useToast();
    const { mutate }  = usePostLetter();
    const { ownerId } = useIsMyHome();
    const { register, handleSubmit, watch, setValue, formState: { isSubmitting } } = useForm<IForm>({
        defaultValues: {
            sender: '',
            content: '',
            image: null,
            previewImage: null,
        }
    });
    const previewImage = watch("previewImage");
    const image = watch("image");

    useEffect(() => {
        // image 객체가 실제로 File 객체인지 확인
        if (image && image[0] instanceof File) {
            const file = image[0];
            const objectURL = URL.createObjectURL(file);
            setValue("previewImage", objectURL);
        } else {
            setValue("previewImage", null);
        }
    }, [image, setValue]);

    /** 편지 보내기 핸들링  */ 
    const onSubmit = async (data: IForm) => {
        if(isSubmitting) {
            displayToast(`편지가 보내지고 있어요. 잠시만 기다려주세요.`);
            return;
        }
        if (!data.sender.trim() || !data.content.trim()) {
            displayToast(`이름과 편지 모두 입력해야 해요.`);
            return;
        } else {
            const imageFile = data.image ? data.image[0] : null;
            const postData = {
                body: {
                    sender: data.sender,
                    content: data.content,
                    receiverId: ownerId,
                },
                image: imageFile,
            }
            mutate(postData, {
                onSuccess: () => {
                    onClose();
                    displayToast(`편지를 보냈어요! 답장을 기다려보아요!`);
                },
                onError: () => {
                    displayToast(`편지를 보내는 데에 실패했어요. 다시 로그인해주세요.`);
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
                <Styled.Form onSubmit={handleSubmit(onSubmit)}>
                    <Styled.ImageUploadLabel htmlFor="image-upload" onClick={(event) => event.stopPropagation()}>
                        <Styled.ImageUploadLabelText>사진 올리기(선택)</Styled.ImageUploadLabelText>
                        <Styled.ImageInput
                            {...register("image")}
                            id="image-upload"
                            type="file"
                            accept="image/*"
                        />
                        {previewImage && <Styled.ImagePreview src={previewImage} />}
                    </Styled.ImageUploadLabel>
                    <Styled.NameInput
                        {...register("sender")}
                        maxLength={10}
                        type="text"
                        placeholder="이름을 적어주세요."
                    />
                    <Styled.CheckTextLength>{watch('sender').length}/10</Styled.CheckTextLength>
                    <Styled.LetterArea
                        {...register("content")}
                        placeholder="따뜻한 마음을 남겨주세요."
                        maxLength={200}
                    />
                    <Styled.CheckTextLength>{watch('content').length}/200</Styled.CheckTextLength>
                    <LongButton type="submit">
                        보내기
                    </LongButton>
                </Styled.Form>
            </Modal>
        </>
    );
}

export default React.memo(SendLetterModal);