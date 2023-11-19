import styled from 'styled-components';
import { device } from '../../styles/screen/screen';

import backgroundImage from '../../assets/etc/background-desktop.png';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 26px;
  width: 612px;
  height: 800px;

  @media ${device.wideLaptop} {
    width: 500px;
    height: 600px;
  }

  @media ${device.tablet} {
    width: 400px;
    height: 500px;
  }

  @media ${device.mobile} {
    width: 325px;
    height: 220px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 20px;
`;

export const EmailInput = styled.input`
  font-size: 18px;
  width: 400px;
  height: 50px;
  border: 1px solid #bdbdbd;
  border-radius: 10px;
  padding: 0 10px;
`;

export const PasswordInput = styled.input`
  font-size: 18px;
  width: 400px;
  height: 50px;
  border: 1px solid #bdbdbd;
  border-radius: 10px;
  margin-top: 20px;
  padding: 0 10px;
`;

export const LoginButton = styled.button`
  width: 400px;
  height: 50px;
  border: none;
  border-radius: 10px;
  background-color: #4c67db;
  color: #000;
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  cursor: pointer;
`;

export const SignupButton = styled.button`
  width: 400px;
  height: 50px;
  border: none;
  border-radius: 10px;
  background-color: #d3d3d3;
  color: #000;
  font-size: 18px;
  font-weight: 200;
  margin-top: 20px;
  cursor: pointer;
`;
