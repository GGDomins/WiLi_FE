import axios from 'axios';
import { BASE_URL } from '../../config/config';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

axiosInstance.interceptors.request.use((req) => {
  const accessToken = localStorage.getItem('accessToken');
  if (accessToken) {
    req.headers.authorization = `Bearer ${accessToken}`;
  } else {
    req.headers.authorization = null;
  }

  if (req.data instanceof FormData) {
    req.headers['Content-Type'] = 'multipart/form-data';
  } else {
    req.headers['Content-Type'] = 'application/json';
  }

  req.withCredentials = true;
  req.headers['Access-Control-Allow-Origin'] = '*';

  return req;
});

export default axiosInstance;
