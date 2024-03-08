import { instance } from './axios';

export const getAttendanceStatus = async () => {
    const response = await instance.get(`/api/v1/attendances`);
    return response.data.data;
};