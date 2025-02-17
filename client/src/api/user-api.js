import axiosInstance from './axios';

export const getAllUsersApi = async () => {
  try {
    const response = await axiosInstance.get('/users');

    return response;
  } catch (err) {
    return err.response.data;
  }
};
