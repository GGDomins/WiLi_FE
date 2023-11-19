import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

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
  Normal,
} from './style';

const LandingPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const kakaoLoginHandler = () => {
    window.location.href = KAKAO_LINK;
  };

  const naverLoginHandler = () => {
    window.location.href = NAVER_LINK;
  };

  const normalLoginHandler = () => {
    navigate('/login');
  };

  return (
    <StyledContainer>
      <Logo>WiLi</Logo>
      <TitleMessage>{t('Login.TitleMessage')}</TitleMessage>
      <ButtonContainer>
        <LoginMessage>{t('Login.LoginMessage')}</LoginMessage>
        <ButtonInnerContainer>
          <Kakao onClick={kakaoLoginHandler} />
          <Naver onClick={naverLoginHandler} />
          <Normal onClick={normalLoginHandler}>{t('Login.NormalLogin')}</Normal>
        </ButtonInnerContainer>
      </ButtonContainer>
    </StyledContainer>
  );
};

export default LandingPage;
