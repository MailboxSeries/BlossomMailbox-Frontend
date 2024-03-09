import { isAxiosError } from 'axios';
import { instance } from './axios';

export const getUserInfo = async (encodingUserID: string) => {
    try {
        const response = await instance.get(`/api/v1/users?u=${encodingUserID}`);
        return response.data.data;
    } catch(error) {
        if (isAxiosError(error)) {
            throw error;
        } else {
            throw error;
        }    
    }
};