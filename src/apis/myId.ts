import {isAxiosError} from 'axios';
import {instance} from './axios';

export const postMyId = async () => {
    try {
        const response = await instance.post(`/api/v1/users`, {});
        return response.data.myId; // 응답에서 myId만 반환합니다.
    } catch (error) {
        if (isAxiosError(error)) {
        throw error;
        } else {
        throw error;
        }
    }
};
