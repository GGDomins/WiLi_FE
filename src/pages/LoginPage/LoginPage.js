import { useTranslation } from 'react-i18next';

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

const LoginPage = () => {
  const { t } = useTranslation;

  const kakaoLoginHandler = () => {
    window.location.href = KAKAO_LINK;
  };

  const naverLoginHandler = () => {
    window.location.href = NAVER_LINK;
  };

  return (
    <StyledContainer>
      <Logo>WiLi</Logo>
      <TitleMessage>{t('Login.TitleMessage')}</TitleMessage>
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

export default LoginPage;
