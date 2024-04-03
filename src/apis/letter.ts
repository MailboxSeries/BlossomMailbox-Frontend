import { isAxiosError } from 'axios';
import { instance } from './axios';
import { IPostLetterWithFile } from '@/interfaces/letter';

export const getLetterListStatus = async () => {
    try {
        const response = await instance.get(`/api/v1/letters/list`);
        return response.data.data.cherryBlossomStatus;
    } catch(error) {
        if (isAxiosError(error)) {
            throw error;
        } else {
            throw error;
        }    
    }
};

export const getDayLetterList = async (selectedDate: number) => {
    try {
        const response = await instance.get(`/api/v1/letters?index=${selectedDate}`);
        return response.data.data;
    } catch(error) {
        if (isAxiosError(error)) {
            throw error;
        } else {
            throw error;
        }    
    }
};

export const getLetter = async (letterID: number) => {
    try {
        const response = await instance.get(`/api/v1/letters/${letterID}`);
        return response.data.data;
    } catch(error) {
        if (isAxiosError(error)) {
            throw error;
        } else {
            throw error;
        }    
    }
};

export const postLetter = async ({ body, image }: IPostLetterWithFile) => {
    const formData = new FormData();
    const jsonData = JSON.stringify(body);
    formData.append('body', new Blob([jsonData], {type: 'application/json'}));
    formData.append('image', image);

    try {
        const response = await instance.post(`/api/v1/letters`, formData, {
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
