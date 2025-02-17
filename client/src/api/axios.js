import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

axiosInstance.interceptors.request.use(
  config => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`;

    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

axiosInstance.interceptors.response.use(
  response => {
    if (response && response.data) {
      return response.data;
    }

    return response;
  },
  err => {
    if (err.response && err.response.data) {
      return err.response.data;
    }

    return Promise.reject(err);
  }
);

export default axiosInstance;
