import { instance } from './axios';

export const getSkins = async () => {
    const response = await instance.get(`/api/v1/skins`);
    return response.data.data;
};