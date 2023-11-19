import { t } from 'i18next';
import React, { useState } from 'react';

import { useTranslation } from 'react-i18next';

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
        <Title>{t('NormalLogin.Title')}</Title>
        <Form onSubmit={formSubmitHandler}>
          <EmailInput
            type='text'
            onChange={formChangeHandler}
            name='email'
            placeholder={t('NormalLogin.Email')}
          />
          <PasswordInput
            type='password'
            onChange={formChangeHandler}
            name='password'
            placeholder={t('NormalLogin.Password')}
          />
          <LoginButton type='submit'>{t('NormalLogin.Login')}</LoginButton>
          <SignupButton
            type='button'
            onClick={() => navigate('/normal-signup')}
          >
            {t('NormalLogin.Signup')}
          </SignupButton>
        </Form>
      </LoginContainer>
    </StyledContainer>
  );
};

export default LoginPage;
