import * as Styled from './style';
import React, { useState } from 'react';
import Modal from '@/components/common/Modal';
import { SendLetterModalProps } from '@/interfaces/modal';
import useInput from '@/hooks/useInput';
import LongButton from '@/components/LongButton';
import useToast from '@/hooks/useToast';

function SendLetterModal({onClose, isOpen}: SendLetterModalProps) {
    const { displayToast } = useToast();
    const sender = useInput<HTMLInputElement>(); // 보내는 사람 이름을 관리하는 상태
    const content = useInput<HTMLTextAreaElement>(); // 편지 내용을 관리하는 상태
    const [imageFile, setImageFile] = useState<File | null>(null); // 업로드할 이미지 파일을 관리하는 상태
    const [uploadedImage, setUploadedImage] = useState<string | ArrayBuffer>(null); // 업로드 된 이미지 url 관리하는 상태

    /** 이미지 업로드 핸들링  */ 
    const handleFileInputChange = (event) => {
        const file = event.target.files[0];
        if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
            // 이미지 객체를 생성하여 크기 확인
            const img = new Image();
            img.onload = () => {
            setUploadedImage(reader.result as string); // 타입 단언을 사용하여 string으로 설정
            };
            img.src = reader.result as string; // 여기도 타입 단언을 사용하여 string으로 설정
        };
        reader.readAsDataURL(file);
        setImageFile(file); // 나중에 업로드할 이미지 파일을 상태에 저장
        }
    };
    console.log('render')

    /** 편지 보내기 핸들링  */ 
    const handleSendLetter = async () => {
        if (!content.value.trim()) {
            displayToast(`이름과 편지 모두 입력해야 해요.`);
            return;
        } else {
            //TODO: mutate
        }
    };

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
                        {`사진 올리기(선택)`}
                        </Styled.ImageUploadLabelText>

                            <Styled.ImageInput
                                id="image-upload"
                                type="file"
                                accept="image/*"
                                onChange={handleFileInputChange}
                            />
                            {uploadedImage ? (
                            <Styled.ImagePreview src={uploadedImage as string} />
                            ) : (
                                <></>
                            )}
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