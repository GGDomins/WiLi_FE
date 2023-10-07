import React, { useState, useEffect } from 'react';

import Label from '../../components/UI/InputLabel/InputLabel';
import InputBox from '../../components/UI/InputBox/InputBox';
import Button from '../../components/UI/Button/Button';
import InputGroup from '../../components/UI/InputGroup/InputGroup';
import FavSelect from '../../components/UI/FavButton/FavButton';

import {
  ButtonContainer,
  Form,
  Title,
  SubTitle,
  Container,
  InnerContainer,
  FavContainer,
} from './style';

import { ReactComponent as LeftIcon } from '../../assets/icons/left.svg';
import { ReactComponent as RightIcon } from '../../assets/icons/right.svg';

const Step1 = ({ setStep, setUserInfo, userInfo }) => {
  const formChangeHandler = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

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

  return (
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
          onChange={formChangeHandler}
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
  );
};

export default Step1;
