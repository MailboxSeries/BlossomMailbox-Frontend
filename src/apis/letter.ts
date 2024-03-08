import { instance } from './axios';

export const getLetterListStatus = async () => {
    const response = await instance.get(`/api/v1/letters`);
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