import { instance } from './axios';
import { isAxiosError } from 'axios';

export const getAttendanceStatus = async () => {
    try {
        const response = await instance.get(`/api/v1/attendances`);
        return response.data.data;
    } catch (error) {
        if (isAxiosError(error)) {
            throw error;
        } else {
            throw error;
        }
    }
};

export const postAttend = async () => {
    try {
        const response = await instance.post(`/api/v1/attendances`, {
            attendanceCompleted: true
        });
        return response.data.data;
    } catch (error) {
        if (isAxiosError(error)) {
            throw error;
        } else {
            throw error;
        }
    }
};
