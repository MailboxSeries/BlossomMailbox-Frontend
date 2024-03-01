import { useState } from 'react';

export function useImageUpload() {
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [uploadedImage, setUploadedImage] = useState<string | ArrayBuffer | null>(null);

    /** 이미지 업로드 핸들링  */ 
    const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files ? event.target.files[0] : null;
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setUploadedImage(reader.result);
            };
            reader.readAsDataURL(file);
            setImageFile(file);
        }
    };

    return {
        imageFile,
        uploadedImage,
        handleFileInputChange,
    };
}
