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

const SignUp = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const timeoutId = useRef(null);
  const firstUpdate = useRef(true);

  const [step, setStep] = useState(1);
  const [isUsable, setIsUsable] = useState(null);

  const favorites = [
    '패션 / 의류',
    '생활용품',
    '주방용품',
    '전자제품',
    '식품 / 식재료',
    '인테리어',
    '도서 / 음반',
    '반려동물품',
    '스포츠 / 레저',
    '기타',
  ];

  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    loginProvider: '',
    snsId: '',
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

  const nextStepHandler = () => {
    if (!step1Check()) {
      alert('다시 확인해주세요');
      return;
    }

    if (isUsable !== true) {
      alert('사용 가능한 유저네임을 입력해주세요.');
      return;
    }

    setStep(2);
  };

  const checkValidDate = (dateString) => {
    console.log('checkValidDate');
    const regEx = /^\d{4}-\d{2}-\d{2}$/;
    if (!regEx.test(dateString)) {
      return false;
    }

    console.log(true);

    return true;
  };

  const checkValidUsername = (username) => {
    console.log('checkValidUsername');
    const regEx = /^[a-zA-Z0-9]+$/;
    if (!regEx.test(username) && !isUsable) {
      return false;
    }
    console.log(true);
    return true;
  };

  const step1Check = () => {
    if (
      checkValidUsername(userInfo.username) &&
      checkValidDate(userInfo.birthday)
    ) {
      return true;
    } else {
      return false;
    }
  };

  const setBorderColor = (isUsable) => {
    if (isUsable === null) {
      return DEFAULT;
    } else if (isUsable) {
      return SUCCESS;
    } else {
      return FAIL;
    }
  };

  const checkUsernameReq = async (username) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/users/check/${username}`,
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
          },
        }
      );
      console.log(response);

      if (response.data.message === '사용가능 합니다.') {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const data = location.state.data.data.member_info;
    console.log(data);

    setUserInfo({
      ...userInfo,
      name: data.name,
      email: data.email,
      loginProvider: data.loginProvider,
      snsId: data.snsId,
    });
  }, []);

  const favChangeHandler = (event) => {
    const target = event.target;
    const newFavValue = !fav[target.innerText];

    setFav((prev) => {
      return {
        ...prev,
        [target.innerText]: newFavValue,
      };
    });

    target.style.backgroundColor = newFavValue ? CLICKED : NOT_CLICKED;
    target.style.color = newFavValue ? 'white' : 'black';
  };

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

export default SignUp;
