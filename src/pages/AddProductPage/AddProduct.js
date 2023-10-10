import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

// UI
import Header from '../../components/Header/Header';
import Label from '../../components/UI/InputLabel/InputLabel';
import InputBox from '../../components/UI/InputBox/InputBox';
import Button from '../../components/UI/Button/Button';
import {
  ProductContainer,
  Title,
  ImageField,
  ImagePreview,
  InputContainer,
  InputInnerContainer,
  ButtonContainer,
  TextArea,
  TextAreaGroup,
  InputGroup2,
} from './style';

// APIs
import { addProductReq } from '../../utils/productAPIs/productAPIs';

const Textarea = styled.textarea``;

const AddProduct = () => {
  const navigate = useNavigate();
  const photoInput = useRef();
  const [file, setFile] = useState(null);
  const [productInfo, setProductInfo] = useState({
    brandName: '',
    productName: '',
    category: '',
    description: '',
    productPrice: '',
    link: '',
    date: new Date().toISOString().slice(0, 10),
  });

  const formChangeHandler = (event) => {
    setProductInfo({
      ...productInfo,
      [event.target.name]: event.target.value,
    });
  };

  const imageClickHandler = () => {
    photoInput.current.click();
  };

  const selectImageHandler = (event) => {
    event.preventDefault();

    setFile(event.target.files[0]);
  };

  const formSubmitHandler = async (event) => {
    event.preventDefault();

    for (let key in productInfo) {
      if (productInfo[key] === '') {
        alert('모든 항목을 입력해주세요.');
        return;
      }
    }

    const formData = new FormData();

    formData.append('file', file);
    formData.append('productInfo', JSON.stringify(productInfo));

    addProductReq(formData);
  };

  return (
    <>
      <ProductContainer>
        <Title>제품 추가하기</Title>
        <form onSubmit={formSubmitHandler}>
          <InputContainer>
            <div>
              {!file && <ImageField onClick={imageClickHandler} />}
              {file && (
                <ImagePreview
                  alt='preview'
                  src={URL.createObjectURL(file)}
                  onClick={imageClickHandler}
                />
              )}
              <input
                type='file'
                accept='image/*'
                name='product_img'
                onChange={selectImageHandler}
                ref={photoInput}
                style={{ display: 'none' }}
              />
            </div>
            <InputInnerContainer>
              <InputGroup2 width='493px'>
                <Label color='#6a6a6a'>브랜드</Label>
                <InputBox
                  name='brandName'
                  onChange={formChangeHandler}
                  type='text'
                  placeholder='나이키'
                  width='353px'
                  height='50px'
                  border='1px solid #D9D9D9'
                  borderRadius='7px'
                />
              </InputGroup2>
              <InputGroup2 width='493px'>
                <Label color='#6a6a6a'>제품명</Label>
                <InputBox
                  name='productName'
                  onChange={formChangeHandler}
                  type='text'
                  placeholder='에어포스 1 쉐도우'
                  width='353px'
                  height='50px'
                  border='1px solid #D9D9D9'
                  borderRadius='7px'
                />
              </InputGroup2>
              <InputGroup2 width='493px'>
                <Label color='#6a6a6a'>카테고리</Label>
                <select
                  name='category'
                  onChange={formChangeHandler}
                  style={{
                    width: '353px',
                    height: '50px',
                    border: '1px solid #D9D9D9',
                    borderRadius: '7px',
                  }}
                >
                  <option value=''>Select a category</option>
                  <option value='패션 / 의류'>패션 / 의류</option>
                  <option value='생활용품'>생활용품</option>
                  <option value='주방용품'>주방용품</option>
                  <option value='전자제품'>전자제품</option>
                  <option value='식품 / 식재료'>식품 / 식재료</option>
                  <option value='인테리어'>인테리어</option>
                  <option value='도서 / 음반'>도서 / 음반</option>
                  <option value='반려동물품'>반려동물품</option>
                  <option value='스포츠 / 레저'>스포츠 / 레저</option>
                  <option value='기타'>기타</option>
                </select>
              </InputGroup2>
              <TextAreaGroup>
                <Label color='#6a6a6a'>메모</Label>
                <TextArea
                  name='description'
                  onChange={formChangeHandler}
                  type='text'
                  placeholder='제품에 대한 메모를 자유롭게 남겨주세요!'
                />
              </TextAreaGroup>
              <InputGroup2 width='493px'>
                <Label color='#6a6a6a'>가격</Label>
                <InputBox
                  name='productPrice'
                  onChange={formChangeHandler}
                  type='text'
                  placeholder='₩100000'
                  width='353px'
                  height='50px'
                  border='1px solid #D9D9D9'
                  borderRadius='7px'
                />
              </InputGroup2>
              <InputGroup2 width='493px'>
                <Label color='#6a6a6a'>링크</Label>
                <InputBox
                  name='link'
                  onChange={formChangeHandler}
                  type='text'
                  placeholder='www.nike.com'
                  width='353px'
                  height='50px'
                  border='1px solid #D9D9D9'
                  borderRadius='7px'
                />
              </InputGroup2>
            </InputInnerContainer>
          </InputContainer>
          <ButtonContainer>
            <Button
              type='submit'
              width='200px'
              height='40px'
              color='#ffffff'
              backgroundColor='#4C67DB'
              borderRadius='21px'
              float='right'
            >
              제품 추가하기
            </Button>
            <Button
              width='200px'
              height='40px'
              border='1px solid #4C67DB'
              borderRadius='21px'
              onClick={() => navigate('/')}
              float='right'
            >
              취소
            </Button>
          </ButtonContainer>
        </form>
      </ProductContainer>
    </>
  );
};

export default AddProduct;
