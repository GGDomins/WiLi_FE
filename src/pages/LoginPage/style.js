import styled from 'styled-components';

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
  height: 350px;

  @media ${device.wideLaptop} {
    width: 500px;
    height: 350px;
  }

  @media ${device.tablet} {
    width: 400px;
    height: 200px;
  }

  @media ${device.mobile} {
    width: 325px;
    height: 220px;
  }
`;
