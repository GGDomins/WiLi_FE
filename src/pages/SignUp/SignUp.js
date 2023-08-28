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

import { ReactComponent as LeftIcon } from '../../assets/icons/left.svg';
import { ReactComponent as RightIcon } from '../../assets/icons/right.svg';

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
    const data = location.state.data;
    console.log(data);

    setUserInfo({
      ...userInfo,
      name: data.name,
      email: data.email,
      loginProvider: data.loginProvider,
      snsId: data.snsId,
    });
  }, []);

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    if (userInfo.username === '') {
      setIsUsable(null);
      return;
    }

    const autoCheckUsername = async () => {
      clearTimeout(timeoutId.current);

      timeoutId.current = setTimeout(async () => {
        const isUsernameUsable = await checkUsernameReq(userInfo.username);
        setIsUsable(isUsernameUsable);
      }, 1000);
    };

    autoCheckUsername();
  }, [userInfo.username]);

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

  const formChangeHandler = (event) => {
    setUserInfo((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
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
            <>
              <Title>프로필 설정하기</Title>
              <SubTitle>시작하기 전 프로필 정보를 확인해 주세요.</SubTitle>
              <InputGroup width='492px' marginBottom='40px'>
                <Label color='#6a6a6a' fontSize='19px' fontWeight='500'>
                  유저네임
                </Label>
                <InputBox
                  type='text'
                  name='username'
                  width='353px'
                  value={userInfo.username}
                  onChange={(event) => {
                    formChangeHandler(event);
                  }}
                  fontSize='19px'
                  border={`1px solid ${setBorderColor(isUsable)}`}
                  borderRadius='8px'
                  height='50px'
                  placeholder='wili_2023'
                />
              </InputGroup>
              <InputGroup width='492px' marginBottom='100px'>
                <Label color='#6a6a6a' fontSize='19px' fontWeight='500'>
                  생년월일
                </Label>
                <InputBox
                  type='date'
                  name='birthday'
                  width='353px'
                  value={userInfo.birthday}
                  placeholder='생년월일을 입력하세요.'
                  onChange={formChangeHandler}
                  fontSize='19px'
                  border='1px solid #d9d9d9'
                  borderRadius='8px'
                  height='50px'
                />
              </InputGroup>
              <ButtonContainer>
                <Button
                  type='button'
                  onClick={nextStepHandler}
                  width='115px'
                  height='50px'
                  borderRadius='60px'
                  backgroundColor={NOT_CLICKED}
                  float='right'
                >
                  다음 <RightIcon />
                </Button>
              </ButtonContainer>
            </>
          )}
          {step === 2 && (
            <>
              <Title>내 관심사를 선택해보세요!</Title>
              <SubTitle>최대 5개까지 선택 가능합니다.</SubTitle>
              <FavContainer>
                {favorites.map((favorite) => {
                  return (
                    <FavSelect
                      onClick={favChangeHandler}
                      width='205px'
                      height='51px'
                    >
                      {favorite}
                    </FavSelect>
                  );
                })}
              </FavContainer>
              <ButtonContainer>
                <Button
                  type='submit'
                  width='115px'
                  height='50px'
                  borderRadius='60px'
                  backgroundColor={NOT_CLICKED}
                  float='right'
                >
                  다음 <RightIcon />
                </Button>
                <Button
                  type='button'
                  onClick={() => setStep(1)}
                  width='115px'
                  height='50px'
                  borderRadius='60px'
                  backgroundColor='#fff'
                  float='right'
                >
                  <LeftIcon /> 이전
                </Button>
              </ButtonContainer>
            </>
          )}
        </Form>
      </InnerContainer>
    </Container>
  );
};

export default SignUp;
