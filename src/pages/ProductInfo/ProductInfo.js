import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import axios from 'axios';

import {
  Container,
  Image,
  InfoContainer,
  BrandName,
  ProductName,
  Description,
  Price,
  Category,
  ButtonContainer,
  ProductLink,
} from './style';

import IconButton from '../../components/UI/IconButton/IconButton';
import Button from '../../components/UI/Button/Button';

import close from '../../assets/icons/close.svg';
import {
  deleteProductReq,
  productInfoReq,
} from '../../utils/productAPIs/productAPIs';

const ProductInfo = ({ id, onClose }) => {
  const navigate = useNavigate();

  const editProductHandler = () => {
    navigate(`/edit/${id}`);
  };

  const closeModalHandler = () => {
    onClose();
  };

  const redirectHandler = () => {
    if (
      productInfo.link.slice(0, 4) !== 'http' &&
      productInfo.link.slice(0, 5) !== 'https'
    ) {
      window.open(`http://${productInfo.link}`, '_blank');
    } else {
      window.open(`${productInfo.link}`, '_blank');
    }
  };

  const deleteProductHandler = async (id) => {
    deleteProductReq(id);
  };

  const [productInfo, setProductInfo] = useState({
    isMyPost: '',
    brandName: '',
    productName: '',
    category: '',
    description: '',
    productPrice: '',
    link: '',
  });

  useEffect(() => {
    console.log('requesting product info...');

    const req = async () => {
      const response = await productInfoReq(id);

      const info = JSON.parse(response.data.post);
      const isMyPost = response.headers['ismypost'];

      setProductInfo({
        isMyPost: isMyPost,
        image: 'data:image/png;base64,' + response.data.image,
        brandName: info.brandName,
        productName: info.productName,
        category: info.category,
        description: info.description,
        productPrice: info.productPrice,
        link: info.link,
      });
    };

    req();
  }, []);

  return (
    <Container>
      <Image src={productInfo.image} />
      <InfoContainer>
        <ButtonContainer>
          <IconButton
            onClick={closeModalHandler}
            icon={close}
            float='right'
            backgroundColor='none'
          />
        </ButtonContainer>
        <BrandName>{productInfo.brandName}</BrandName>
        <ProductName>{productInfo.productName}</ProductName>
        <Category>{productInfo.category}</Category>
        <Description>{productInfo.description}</Description>
        <ProductLink onClick={redirectHandler}>구매 링크로 가기</ProductLink>
        <Price>{productInfo.productPrice}</Price>
        {productInfo.isMyPost === 'true' && (
          <ButtonContainer>
            <Button
              onClick={() => deleteProductHandler(id)}
              width='200px'
              height='40px'
              border='1px solid #4C67DB'
              borderRadius='21px'
              float='right'
            >
              삭제하기
            </Button>
            <Button
              onClick={() => editProductHandler(id)}
              width='200px'
              height='40px'
              color='#ffffff'
              backgroundColor='#4C67DB'
              borderRadius='21px'
              float='right'
            >
              수정하기
            </Button>
          </ButtonContainer>
        )}
      </InfoContainer>
    </Container>
  );
};

export default ProductInfo;