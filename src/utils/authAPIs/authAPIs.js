import axios from 'axios';
import axiosInstance from '../axiosInterceptor/axiosInterceptor';

export const kakaoLoginReq = async (code) => {
  const response = await axiosInstance.post(`/kakao/callback?code=${code}`);

  return response;
};

export const naverLoginReq = async (code, state) => {
  const response = await axiosInstance.post(
    `/naver/callback?code=${code}&state=${state}`
  );

  return response;
};

export const logoutReq = async () => {
  try {
    const response = await axiosInstance.post(`/users/logout`);
    localStorage.removeItem('accessToken');
    console.log('logout successful');

    return true;
  } catch (error) {
    return false;
  }
};

export const authReq = async () => {
  const response = await axiosInstance.post(`/users/auth`);
  return response;
};

export const refreshReq = async () => {
  try {
    const response = await axios.post(`/users/refresh-token`);

    const accessToken = response.headers['accesstoken'];
    localStorage.setItem('accessToken', accessToken);

    return true;
  } catch (error) {
    return false;
  }
};

export const signUpReq = async (userInfo) => {
  try {
    const response = await axiosInstance.post(`/users/signup`, userInfo);

    console.log('success');

    const accessToken = response.headers['accesstoken'];
    localStorage.setItem('accessToken', accessToken);

    window.location.href = '/';
  } catch (error) {
    console.log(error);
  }
};

export const normalSignUpReq = async (userInfo) => {
  try {
    const response = await axiosInstance.post(`/users/normal-signup`, userInfo);

    console.log('success');

    const accessToken = response.headers['accesstoken'];
    localStorage.setItem('accessToken', accessToken);

    window.location.href = '/';
  } catch (error) {
    console.log(error);
  }
};
