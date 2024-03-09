import { isAxiosError } from 'axios';
import { instance } from './axios';
import { IPostLetterWithFile } from '@/interfaces/letter';

export const getLetterListStatus = async () => {
    const response = await instance.get(`/api/v1/letters/list`);
    alert(response.data)
    alert(response.data.data)

    alert(response.data.data.cherryBlossomStatus);
    return response.data.data.cherryBlossomStatus;
};

export const getDayLetterList = async (selectedDate: number) => {
    const response = await instance.get(`/api/v1/letters?index=${selectedDate}`);
    return response.data.data;
};

export const getLetter = async (letterID: number) => {
    const response = await instance.get(`/api/v1/letters/${letterID}`);
    return response.data.data;
};

export const postLetter = async ({ body, imageFile }: IPostLetterWithFile) => {
    const formData = new FormData();
    const jsonData = JSON.stringify(body);
    formData.append('body', jsonData);
    formData.append('image', imageFile);

    try {
        const response = await instance.put(`/api/v1/skins`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response;
    } catch (error) {
        if (isAxiosError(error)) {
            throw error;
        } else {
            throw error;
        }
    }
};
