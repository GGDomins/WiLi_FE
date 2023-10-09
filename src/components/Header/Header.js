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
      <div
        onClick={() => {
          navigate('/');
        }}
        style={{ cursor: 'pointer' }}
      >
        <Logo src={logo} alt='logo' />
      </div>
      <SearchBar />
      <Toggle />
    </HeaderContainer>
  );
};

export default Header;
