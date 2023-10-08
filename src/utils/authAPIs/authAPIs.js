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
  // axios.defaults.withCredentials = true;

  // const accessToken = localStorage.getItem('accessToken');

  // if (accessToken) {
  //   axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
  // } else {
  //   axios.defaults.headers.common['Authorization'] = null;
  // }

  // const response = await axios.post(
  //   `${process.env.REACT_APP_SERVER_URL}/users/auth`,
  //   {
  //     headers: {
  //       Authorization: accessToken,
  //       'Access-Control-Allow-Origin': '*',
  //       'Content-Type': 'application/json',
  //     },
  //   }
  // );

  // return response;
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
  // axios.defaults.withCredentials = true;

  // try {
  //   const response = await axios.post(
  //     `${process.env.REACT_APP_SERVER_URL}/users/refresh-token`
  //   );

  //   const accessToken = response.headers['accesstoken'];
  //   localStorage.setItem('accessToken', accessToken);

  //   console.log('true');
  //   return true;
  // } catch (error) {
  //   console.log(error);
  //   return false;
  // }
};

export const signUpReq = async (userInfo) => {
  try {
    const response = await axiosInstance(`/users/signup`, userInfo);

    const accessToken = response.headers['accesstoken'];
    localStorage.setItem('accessToken', accessToken);

    window.location.href = '/';
  } catch (error) {
    console.log(error);
  }
  // try {
  //   axios.withCredentials = true;

  //   const response = await axios.post(
  //     `${process.env.REACT_APP_SERVER_URL}/users/signup`,
  //     userInfo,
  //     {
  //       headers: {
  //         'Access-Control-Allow-Origin': '*',
  //         'Content-Type': 'application/json',
  //       },
  //     }
  //   );

  //   const accessToken = response.headers['accesstoken'];
  //   console.log(accessToken);
  //   localStorage.setItem('accessToken', accessToken);

  //   window.location.href = '/';
  // } catch (error) {
  //   console.log(error);
  // }
};
