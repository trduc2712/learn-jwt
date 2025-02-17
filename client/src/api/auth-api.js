import axiosInstance from './axios';

export const signupApi = async userData => {
  try {
    const newUserData = { roleId: 3, ...userData };

    const response = await axiosInstance.post('/auth/signup', newUserData);

    return response;
  } catch (err) {
    return err.response.data;
  }
};

export const loginApi = async ({ email, password }) => {
  try {
    const response = await axiosInstance.post('/auth/login', {
      email,
      password,
    });

    if (response && response.accessToken) {
      localStorage.setItem('accessToken', response.accessToken);
    }

    return response;
  } catch (err) {
    return err.response.data;
  }
};
