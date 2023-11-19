import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { useTranslation } from 'react-i18next';
import { logoutReq } from '../../utils/authAPIs/authAPIs';

// components
import Button from '../../components/UI/Button/Button';
import InputBox from '../../components/UI/InputBox/InputBox';
import InputGroup from '../../components/UI/InputGroup/InputGroup';
import Label from '../../components/UI/InputLabel/InputLabel';

import {
  ProfileContainer,
  Title,
  FavContainer,
  InputContainer,
  InnerContainer,
  FavGroup,
  ButtonContainer,
} from './style';

import FavButton from '../../components/UI/FavButton/FavButton';
import Header from '../../components/Header/Header';

const Profile = () => {
  const { t } = useTranslation();

  const id = localStorage.getItem('snsId');
  const navigate = useNavigate();

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

  const favClickHandler = (event) => {
    const target = event.target;
    const newFavValue = !fav[target.innerText];

    setFav((prev) => {
      return {
        ...prev,
        [target.innerText]: newFavValue,
      };
    });
  };

  // fetch user data from server then set that data as value of input
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    loginProvider: '',
    username: '',
    birthday: '',
  });

  const userProfileReqHandler = useCallback(async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/users/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
          },
        }
      );

      console.log(response);

      const info = response.data.data;

      info.favorites.split(',').forEach((fav) => {
        setFav((prev) => ({ ...prev, [fav]: true }));
      });

      setUserInfo({
        name: info.name,
        email: info.email,
        loginProvider: info.loginProvider,
        username: info.username,
        birthday: info.birthday,
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    userProfileReqHandler();
  }, [userProfileReqHandler]);

  const logoutHandler = () => {
    const isLoggedOut = logoutReq();
    if (isLoggedOut) {
      navigate('/login');
    } else {
      console.log('logout failed');
    }
  };

  const withdrawlHandler = async () => {
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_SERVER_URL}/users/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
          },
        }
      );

      console.log(response);
      console.log('withdrawl successful');

      localStorage.removeItem('accessToken');
      localStorage.removeItem('snsId');

      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  const formChangeHandler = (event) => {
    const { name, value } = event.target;
    setUserInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const formSubmitHandler = async (event) => {
    event.preventDefault();

    const updatedFavorites = Object.keys(fav)
      .filter((key) => fav[key])
      .join(',');

    try {
      const response = await axios.patch(
        `${process.env.REACT_APP_SERVER_URL}/users/${id}`,
        {
          ...userInfo,
          favorites: updatedFavorites,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
          },
        }
      );

      console.log(response);

      alert('프로필이 수정되었습니다.');
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <ProfileContainer>
        <InnerContainer>
          <Title>My Profile</Title>
          <form onSubmit={formSubmitHandler}>
            <InputContainer>
              <InputGroup width='493px'>
                <Label color='#6a6a6a'>{t('Profile.Name')}</Label>
                <InputBox
                  name='name'
                  type='text'
                  value={userInfo.name}
                  onChange={formChangeHandler}
                  width='353px'
                  height='52px'
                  border='1px solid #d9d9d9'
                  borderRadius='8px'
                  backgroundColor='#d9d9d9'
                />
              </InputGroup>
              <InputGroup width='493px'>
                <Label color='#6a6a6a'>{t('ProductInfo.Username')}</Label>
                <InputBox
                  name='username'
                  type='text'
                  value={userInfo.username}
                  onChange={formChangeHandler}
                  width='353px'
                  height='52px'
                  border='1px solid #d9d9d9'
                  borderRadius='8px'
                />
              </InputGroup>
              <InputGroup width='493px'>
                <Label color='#6a6a6a'>{t('ProductInfo.Email')}</Label>
                <InputBox
                  name='email'
                  type='text'
                  value={userInfo.email}
                  onChange={formChangeHandler}
                  width='353px'
                  height='52px'
                  border='1px solid #d9d9d9'
                  borderRadius='8px'
                  backgroundColor='#d9d9d9'
                />
              </InputGroup>
              <InputGroup width='493px'>
                <Label color='#6a6a6a'>{t('ProductInfo.Birthday')}</Label>
                <InputBox
                  name='birthday'
                  type='date'
                  value={userInfo.birthday}
                  onChange={formChangeHandler}
                  width='353px'
                  height='52px'
                  border='1px solid #d9d9d9'
                  borderRadius='8px'
                />
              </InputGroup>
            </InputContainer>
            <FavGroup>
              <Label color='#6a6a6a'>{t('ProductInfo.Category')}</Label>
              <FavContainer>
                {Object.keys(fav).map((key) => {
                  return (
                    <FavButton
                      key={key}
                      onClick={favClickHandler}
                      isFav={fav[key]}
                      width='130px'
                      height='40px'
                    >
                      {key}
                    </FavButton>
                  );
                })}
              </FavContainer>
            </FavGroup>
            <ButtonContainer>
              <Button
                type='submit'
                width='115px'
                height='50px'
                borderRadius='60px'
                backgroundColor='#b0bfff'
                float='right'
              >
                {t('ProductInfo.Save')}
              </Button>
              <Button
                type='button'
                onClick={logoutHandler}
                width='115px'
                height='50px'
                borderRadius='60px'
                backgroundColor='#fff'
                float='right'
              >
                {t('ProductInfo.Logout')}
              </Button>
              <Button
                type='button'
                onClick={withdrawlHandler}
                width='115px'
                height='50px'
                borderRadius='60px'
              >
                {t('ProductInfo.Withdrawl')}
              </Button>
            </ButtonContainer>
          </form>
        </InnerContainer>
      </ProfileContainer>
    </>
  );
};

export default Profile;
