import styled from 'styled-components';

import backgroundImage from '../../assets/etc/background-desktop.png';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const InnerContainer = styled.div`
  background-color: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 26px;
  width: 600px;
  height: 868px;
`;

export const FavContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 39px;
  margin-bottom: 100px;
`;

export const Title = styled.h1`
  font-size: 29px;
  font-weight: 700;
  margin: 104px 0 20px 0;
  color: #4c67db;
`;

export const SubTitle = styled.h2`
  font-size: 19px;
  font-weight: 500;
  color: #6a6a6a;
  margin-bottom: 100px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  display: block;
  width: 100%;
  padding: 0 54px;
`;
