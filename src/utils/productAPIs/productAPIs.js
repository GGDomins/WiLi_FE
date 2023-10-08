import axios from 'axios';
import axiosInstance from '../axiosInterceptor/axiosInterceptor';

export const productReq = async () => {
  try {
    const response = await axiosInstance.get(`/users/products`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const randomProductReq = async () => {
  try {
    const response = await axiosInstance.get(`/random-feed`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const searchProductReq = async (query) => {
  try {
    const response = await axiosInstance.get(`/search?query=${query}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const addProductReq = async (formData) => {
  try {
    console.log('uploading to database..');

    const response = await axiosInstance.post(`/products/add`, formData);
    console.log('upload successful');

    window.location.href = '/';
  } catch (error) {
    console.log(error);
  }
};

export const editProductReq = async (productInfo, id) => {
  try {
    const response = await axiosInstance.patch(`/products/${id}`, productInfo);

    alert('수정이 완료되었습니다.');
    window.location.href = '/';
  } catch (error) {
    console.log(error);
  }
};

export const productInfoReq = async (id) => {
  try {
    const response = await axiosInstance.get(`/products/${id}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const deleteProductReq = async (id) => {
  try {
    const response = await axiosInstance.delete(`/products/${id}`);
    console.log(response);

    alert('삭제가 완료되었습니다.');
    window.location.reload();
  } catch (error) {
    console.log(error);
  }
};
