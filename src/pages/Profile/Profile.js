import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

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
} from './style';
import { ButtonContainer } from '../SignUp/style';
import FavButton from '../../components/UI/FavButton/FavButton';
import Header from '../../components/Header/Header';

const Profile = () => {
  const DEFAULT = '#d9d9d9';
  const SUCCESS = '#4CAF50';
  const FAIL = '#f44336';

  const CLICKED = '#4c67db';
  const NOT_CLICKED = '#b0bfff';

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

  useEffect(() => {
    const fetch = async () => {
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

        const info = response.data;

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
    };

    fetch();
  }, []);

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
      <Header />
      <ProfileContainer>
        <InnerContainer>
          <Title>My Profile</Title>
          <form onSubmit={formSubmitHandler}>
            <InputContainer>
              <InputGroup width='493px'>
                <Label color='#6a6a6a'>이름</Label>
                <InputBox
                  name='name'
                  type='text'
                  value={userInfo.name}
                  onChange={formChangeHandler}
                  placeholder='윌리'
                  width='353px'
                  height='52px'
                  border='1px solid #d9d9d9'
                  borderRadius='8px'
                  backgroundColor='#d9d9d9'
                />
              </InputGroup>
              <InputGroup width='493px'>
                <Label color='#6a6a6a'>유저네임</Label>
                <InputBox
                  name='username'
                  type='text'
                  value={userInfo.username}
                  onChange={formChangeHandler}
                  placeholder='wili_2023'
                  width='353px'
                  height='52px'
                  border='1px solid #d9d9d9'
                  borderRadius='8px'
                />
              </InputGroup>
              <InputGroup width='493px'>
                <Label color='#6a6a6a'>이메일</Label>
                <InputBox
                  name='email'
                  type='text'
                  value={userInfo.email}
                  onChange={formChangeHandler}
                  placeholder='wili@gmail.com'
                  width='353px'
                  height='52px'
                  border='1px solid #d9d9d9'
                  borderRadius='8px'
                  backgroundColor='#d9d9d9'
                />
              </InputGroup>
              <InputGroup width='493px'>
                <Label color='#6a6a6a'>생년월일</Label>
                <InputBox
                  name='birthday'
                  type='date'
                  value={userInfo.birthday}
                  onChange={formChangeHandler}
                  placeholder='2021-01-01'
                  width='353px'
                  height='52px'
                  border='1px solid #d9d9d9'
                  borderRadius='8px'
                />
              </InputGroup>
            </InputContainer>
            <FavGroup>
              <Label color='#6a6a6a'>내 관심사</Label>
              <FavContainer>
                {Object.keys(fav).map((key) => {
                  return (
                    <FavButton
                      key={key}
                      onClick={favClickHandler}
                      isFav={fav[key]}
                      width='205px'
                      height='51px'
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
                저장
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
                로그아웃
              </Button>
              <Button
                type='button'
                onClick={withdrawlHandler}
                width='115px'
                height='50px'
                borderRadius='60px'
              >
                계정 삭제하기
              </Button>
            </ButtonContainer>
          </form>
        </InnerContainer>
      </ProfileContainer>
    </>
  );
};

export default Profile;
