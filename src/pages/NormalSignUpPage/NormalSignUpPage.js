import React, { useEffect, useState, useRef } from 'react';

import { useNavigate, useLocation } from 'react-router-dom';

import axios from 'axios';

// apis
import { signUpReq, checkUsernameReq } from '../../utils/authAPIs/authAPIs';

import Label from '../../components/UI/InputLabel/InputLabel';
import InputBox from '../../components/UI/InputBox/InputBox';
import Button from '../../components/UI/Button/Button';
import InputGroup from '../../components/UI/InputGroup/InputGroup';
import FavSelect from '../../components/UI/FavButton/FavButton';

import Step1 from './Step1';
import Step2 from './Step2';

import {
  DEFAULT,
  SUCCESS,
  FAIL,
  CLICKED,
  NOT_CLICKED,
} from '../../styles/colors/colors';

import {
  ButtonContainer,
  Form,
  Title,
  SubTitle,
  Container,
  InnerContainer,
  FavContainer,
} from './style';

const NormalSignUpPage = () => {
  const [step, setStep] = useState(1);

  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    password: '',
    username: '',
    birthday: '',
    favorites: '',
  });

  const [fav, setFav] = useState({
    '패션 / 의류': false,
    생활용품: false,
    주방용품: false,
    전자제품: false,
    '식품 / 식재료': false,
    인테리어: false,
    '도서 / 음반': false,
    반려동물품: false,
    '스포츠 / 레저': false,
    기타: false,
  });

  const formSubmitHandler = async (event) => {
    event.preventDefault();

    const updatedFavorites = Object.keys(fav)
      .filter((key) => fav[key])
      .join(',');

    const data = {
      ...userInfo,
      favorites: updatedFavorites,
    };

    signUpReq(data);
  };

  return (
    <Container>
      <InnerContainer>
        <Form onSubmit={formSubmitHandler}>
          {step === 1 && (
            <Step1
              setStep={setStep}
              setUserInfo={setUserInfo}
              userInfo={userInfo}
            />
          )}
          {step === 2 && <Step2 setStep={setStep} setFav={setFav} fav={fav} />}
        </Form>
      </InnerContainer>
    </Container>
  );
};

export default NormalSignUpPage;
