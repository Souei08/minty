// context/header.js
import axios from 'axios';
import storage from '../utils/storage';

const headers = axios.create({
  baseURL: 'https://api.escuelajs.co/api/v1/',
});

headers.interceptors.request.use(
  async (config) => {
    const token = await storage.getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default headers;
