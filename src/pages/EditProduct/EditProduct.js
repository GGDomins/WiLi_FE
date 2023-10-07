import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// components
import Header from '../../components/Header/Header';

// UI
import Label from '../../components/UI/InputLabel/InputLabel';
import InputBox from '../../components/UI/InputBox/InputBox';
import Button from '../../components/UI/Button/Button';
import InputGroup from '../../components/UI/InputGroup/InputGroup';

// style
import {
  EditProductContainer,
  Title,
  ImagePreview,
  InputContainer,
  InputInnerContainer,
  ButtonContainer,
  TextArea,
  TextAreaGroup,
  Category,
} from './style';

// APIs
import {
  editProductReq,
  productInfoReq,
} from '../../utils/productAPIs/productAPIs';

const EditProduct = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const [productInfo, setProductInfo] = useState({
    image: '',
    brandName: '',
    productName: '',
    category: '',
    description: '',
    productPrice: '',
    link: '',
  });

  useEffect(() => {
    const req = async () => {
      const response = await productInfoReq(id);

      const info = JSON.parse(response.data.data.post);

      setProductInfo({
        image: 'data:image/png;base64,' + response.data.data.image,
        brandName: info.brandName,
        productName: info.productName,
        category: info.category,
        description: info.description,
        productPrice: info.productPrice,
        link: info.link,
      });

      console.log(productInfo);
    };

    req();
  }, []);

  const formChangeHandler = (event) => {
    setProductInfo({
      ...productInfo,
      [event.target.name]: event.target.value,
    });
  };

  const formSubmitHandler = async (event) => {
    event.preventDefault();

    editProductReq(productInfo, id);
  };

  return (
    <>
      <Header />
      <EditProductContainer>
        <Title>제품 수정하기</Title>
        <form onSubmit={formSubmitHandler}>
          <InputContainer>
            <div>
              {productInfo.image && <ImagePreview src={productInfo.image} />}
            </div>
            <InputInnerContainer>
              <InputGroup width='493px'>
                <Label>브랜드</Label>
                <InputBox
                  name='brandName'
                  value={productInfo.brandName}
                  onChange={formChangeHandler}
                  type='text'
                  placeholder='나이키'
                  width='353px'
                  height='50px'
                  border='1px solid #D9D9D9'
                  borderRadius='7px'
                />
              </InputGroup>
              <InputGroup width='493px'>
                <Label>제품명</Label>
                <InputBox
                  name='productName'
                  value={productInfo.productName}
                  onChange={formChangeHandler}
                  type='text'
                  placeholder='에어포스 1 쉐도우'
                  width='353px'
                  height='50px'
                  border='1px solid #D9D9D9'
                  borderRadius='7px'
                />
              </InputGroup>
              <InputGroup width='493px'>
                <Label>카테고리</Label>
                <Category
                  name='category'
                  value={productInfo.category}
                  onChange={formChangeHandler}
                >
                  <option value=''></option>
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
                </Category>
              </InputGroup>
              <TextAreaGroup>
                <Label color='#6a6a6a'>메모</Label>
                <TextArea
                  name='description'
                  value={productInfo.description}
                  onChange={formChangeHandler}
                  type='text'
                  placeholder='제품에 대한 메모를 자유롭게 남겨주세요!'
                />
              </TextAreaGroup>
              <InputGroup width='493px'>
                <Label>가격</Label>
                <InputBox
                  name='productPrice'
                  value={productInfo.productPrice}
                  onChange={formChangeHandler}
                  type='text'
                  placeholder='₩100000'
                  width='353px'
                  height='50px'
                  border='1px solid #D9D9D9'
                  borderRadius='7px'
                />
              </InputGroup>
              <InputGroup width='493px'>
                <Label>링크</Label>
                <InputBox
                  name='link'
                  value={productInfo.link}
                  onChange={formChangeHandler}
                  type='text'
                  placeholder='www.nike.com'
                  width='353px'
                  height='50px'
                  border='1px solid #D9D9D9'
                  borderRadius='7px'
                />
              </InputGroup>
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
      </EditProductContainer>
    </>
  );
};

export default EditProduct;
