import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { normalLoginReq } from '../../utils/authAPIs/authAPIs';
import {
  StyledContainer,
  LoginContainer,
  Form,
  Title,
  EmailInput,
  PasswordInput,
  LoginButton,
  SignupButton,
} from './style';

const LoginPage = () => {
  const navigate = useNavigate();

  const [loginCred, setLoginCred] = useState({
    email: '',
    password: '',
  });

  const formChangeHandler = (event) => {
    const { name, value } = event.target;

    setLoginCred((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    normalLoginReq(loginCred);
  };

  return (
    <StyledContainer>
      <LoginContainer>
        <Title>로그인</Title>
        <Form onSubmit={formSubmitHandler}>
          <EmailInput
            type='text'
            onChange={formChangeHandler}
            name='email'
            placeholder='이메일'
          />
          <PasswordInput
            type='password'
            onChange={formChangeHandler}
            name='password'
            placeholder='비밀번호'
          />
          <LoginButton type='submit'>로그인</LoginButton>
          <SignupButton
            type='button'
            onClick={() => navigate('/normal-signup')}
          >
            회원가입하기
          </SignupButton>
        </Form>
      </LoginContainer>
    </StyledContainer>
  );
};

export default LoginPage;
