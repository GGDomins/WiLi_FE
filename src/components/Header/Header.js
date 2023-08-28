import { useNavigate } from 'react-router-dom';

import { HeaderContainer } from './style';

import logo from '../../assets/logo/Wili_logo.png';
import SearchBar from './SearchBar';
import Toggle from './Toggle';

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
        <img src={logo} alt='logo' width='100px' height='auto' />
      </div>
      <SearchBar />
      <Toggle />
    </HeaderContainer>
  );
};

export default Header;
