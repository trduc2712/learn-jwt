import axios from 'axios';

export const signupApi = async userData => {
  try {
    const newUserData = { roleId: 3, ...userData };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/auth/signup`,
      newUserData
    );

    return response.data;
  } catch (err) {
    return err.response.data;
  }
};

export const loginApi = async ({ email, password }) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/auth/login`,
      { email, password }
    );

    if (response.data && response.data.accessToken) {
      localStorage.setItem('accessToken', response.data.accessToken);
    }

    return response.data;
  } catch (err) {
    return err.response.data;
  }
};
