import * as Styled from './style';
import React, { useEffect } from 'react';
import Modal from '@/components/common/Modal';
import { ReplyModalProps } from '@/interfaces/modal';
import useModal from '@/hooks/useModal';
import BackButton from '@/components/common/Button/BackButton';
import ReplyButton from '@/components/Home/OpenLetter/ReplyButton';
import useToast from '@/hooks/useToast';
import useInput from '@/hooks/useInput';
import { usePostLetter } from '@/hooks/usePostLetter';
import { useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';

interface IForm {
    sender: string;
    content: string;
    image: File | null;
    previewImage?: string | null;
}

function ReplyModal({onClose, isOpen, data, id}: ReplyModalProps) {
    const { displayToast } = useToast();
    const queryClient = useQueryClient();
    const { openModal: openLetterReadModal } = useModal('LetterReadModal');
    const content = useInput<HTMLTextAreaElement>(); // 편지 내용을 관리하는 상태
    const { mutate }  = usePostLetter();
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

    const handleBackButton = () => {
        onClose();
        openLetterReadModal();
    }

    /** 편지 답장하기 핸들링 */
    const onSubmit = async (sendData: IForm) => {
        if(isSubmitting) {
            displayToast(`편지가 보내지고 있어요. 잠시만 기다려주세요.`);
            return;
        }
        if (!sendData.content.trim()) {
            displayToast(`편지를 입력해야 해요.`);
            return;
        } else {
            const imageFile = sendData.image ? sendData.image[0] : null;
            const postData = {
                body: {
                    id: id,
                    content: content.value,
                },
                image: imageFile,
            }
            mutate(postData, {
                onSuccess: async () => {
                    onClose();
                    displayToast(`${data.replyLetter.nickname}님께 답장을 보냈어요!`);
                    queryClient.fetchQuery({ queryKey: ['letter', id] });
                },
                onError: () => {
                    displayToast(`답장을 보내는 데에 실패했어요. 로그아웃 후 다시 로그인해보세요.`);
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
                <Styled.Form onSubmit={handleSubmit(onSubmit)}>
                    <ReplyButton type="submit">
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
                        <Styled.FormDiv>
                            <Styled.ImageUploadLabel
                                htmlFor="image-upload"
                                onClick={(event) => event.stopPropagation()}
                            > 
                            <Styled.ImageUploadLabelText>
                                사진 올리기(선택)
                            </Styled.ImageUploadLabelText>
                                <Styled.ImageInput
                                    {...register("image")}
                                    id="image-upload"
                                    type="file"
                                    accept="image/*"
                                />
                                {previewImage && <Styled.ImagePreview src={previewImage} />}
                            </Styled.ImageUploadLabel>
                            <Styled.LetterArea
                                {...register("content")}
                                placeholder="따뜻한 마음을 남겨주세요."
                                maxLength={200}
                            />
                            <Styled.CheckTextLength>{watch('content').length}/200</Styled.CheckTextLength>
                        </Styled.FormDiv>
                    </Styled.InnerWrapper>
                </Styled.Form>
            </Modal>
    );
}

export default React.memo(ReplyModal);