import {isAxiosError} from 'axios';
import {instance} from './axios';

export const deleteSignout = async () => {
  try {
    const response = await instance.delete(`/api/v1/auth/sign-out`);
    return response;
  } catch (error) {
    if (isAxiosError(error)) {
      throw error;
    } else {
      throw error;
    }
  }
};
