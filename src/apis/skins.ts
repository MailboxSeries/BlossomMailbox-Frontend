import { ISkinState, ISkinUnlockChange } from '@/interfaces/skinState';
import { instance } from './axios';
import { isAxiosError } from 'axios';

export const getSkins = async () => {
    try {
        const response = await instance.get(`/api/v1/skins`);
        return response.data.data;
    } catch(error) {
        if (isAxiosError(error)) {
            throw error;
        } else {
            throw error;
        }    
    }
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

export const patchSkinUnlock = async (body: ISkinUnlockChange) => {
    try {
        const response = await instance.patch<ISkinUnlockChange>(`/api/v1/skins`, {
            type: body.type,
            index: body.index,
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