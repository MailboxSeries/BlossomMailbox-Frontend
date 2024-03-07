import { ISkinState } from '@/interfaces/skinState';
import { instance } from './axios';
import { isAxiosError } from 'axios';

export const getSkins = async () => {
    const response = await instance.get(`/api/v1/skins`);
    return response.data.data;
};

export const putSkins = async (body: ISkinState) => {
    try {
        const response = await instance.put<ISkinState>(`/api/v1/skins`, {
            sex: body.sex,
            top: body.top,
            bottom: body.bottom,
            face: body.face,
            hair: body.hair,
            animal: body.animal,
            rightStore: body.rightStore,
            leftStore: body.leftStore,
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