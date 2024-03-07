import {isAxiosError} from 'axios';
import {instance} from './axios';

export const postLogout = async () => {
  try {
    const response = await instance.post(`/api/v1/auth/resume`, {});
    return response;
  } catch (error) {
    if (isAxiosError(error)) {
      throw error;
    } else {
      throw error;
    }
  }
};
