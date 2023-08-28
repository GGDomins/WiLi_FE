// login config
import { NAVER_LINK, KAKAO_LINK } from '../../config/config';

// style
import {
  StyledContainer,
  Logo,
  TitleMessage,
  LoginMessage,
  ButtonContainer,
  ButtonInnerContainer,
  Naver,
  Kakao,
} from './style';

const Login = () => {
  const kakaoLoginHandler = () => {
    window.location.href = KAKAO_LINK;
  };

  const naverLoginHandler = () => {
    window.location.href = NAVER_LINK;
  };

  return (
    <StyledContainer>
      <Logo>WiLi</Logo>
      <TitleMessage>내가 갖고싶은 모든 것들을 한 곳에!</TitleMessage>
      <ButtonContainer>
        <LoginMessage>간편 로그인으로 빠르게 시작해보세요.</LoginMessage>
        <ButtonInnerContainer>
          <Kakao onClick={kakaoLoginHandler} />
          <Naver onClick={naverLoginHandler} />
        </ButtonInnerContainer>
      </ButtonContainer>
    </StyledContainer>
  );
};

export default Login;
