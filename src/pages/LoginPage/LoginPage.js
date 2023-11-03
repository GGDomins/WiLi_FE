import React, { useState } from 'react';

import { normalLoginReq } from '../../utils/authAPIs/authAPIs';
import { StyledContainer, LoginContainer } from './style';

const LoginPage = () => {
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
        <h1>로그인</h1>
        <form onSubmit={formSubmitHandler}>
          <input
            type='text'
            onChange={formChangeHandler}
            name='email'
            placeholder='이메일'
          />
          <input
            type='password'
            onChange={formChangeHandler}
            name='password'
            placeholder='비밀번호'
          />
          <button type='submit'>로그인</button>
          <button type='button' onClick={() => navigate('/normal-signup')}>
            회원가입하기
          </button>
        </form>
      </LoginContainer>
    </StyledContainer>
  );
};

export default LoginPage;
