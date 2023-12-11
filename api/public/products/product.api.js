import axios from 'axios';
import storage from '../../../utils/storage';

const instance = axios.create({
  baseURL: 'http://localhost:5000',
});

const setTokenInHeaders = async () => {
  const token = await storage.getToken();

  if (token) {
    instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    console.error('Token not available');
  }
};

setTokenInHeaders();
