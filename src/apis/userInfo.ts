import { instance } from './axios';

export const getUserInfo = async (encodingUserID: string) => {
    const response = await instance.get(`/api/v1/users?u=${encodingUserID}`);
    return response.data.data;
};