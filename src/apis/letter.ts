import { instance } from './axios';

export const getLetterListStatus = async () => {
    const response = await instance.get(`/api/v1/letters`);
    return response.data.data.cherryBlossomStatus;
};