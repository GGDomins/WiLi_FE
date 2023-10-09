import { useNavigate } from 'react-router-dom';

import { HeaderContainer } from './style';

import logo from '../../assets/logo/Wili_logo.png';
import SearchBar from './SearchBar';
import Toggle from './Toggle';
import { Logo } from './style';

const Header = () => {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <Logo
        onClick={() => {
          navigate('/');
        }}
      >
        <LogoImg src={logo} alt='logo' />
      </Logo>
      <SearchBar />
      <Toggle />
    </HeaderContainer>
  );
};

export default Header;
