import axios from 'axios';

const headers = axios.create({
  baseURL: 'http://localhost:5000',
});

export default headers;
