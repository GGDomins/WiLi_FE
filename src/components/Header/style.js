import styled from 'styled-components';

export const SearchContainer = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8px 0 50px;
  width: 1078px;
  height: 81px;
  color: #ffffff;
  border: none;
  border-radius: 999px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  // for screens smaller than a standard MacBook viewport (1440px)
  @media (max-width: 1800px) {
    width: 800px; // 80% of 1440px
    height: 63px;
    padding: 0 8px 0 25px;
  }

  // for screens significantly smaller (like an iPad viewport)
  @media (max-width: 1024px) {
    width: 600px; // 75% of 1024px
  }

  // for mobile screens
  @media (max-width: 768px) {
    width: 400px; // 100% of 768px
  }
`;

// can replace with ../UI/Button component
export const SearchButton = styled.button`
  width: 179px;
  height: 63px;
  border: none;
  border-radius: 999px;
  font-size: 19px;
  color: #ffffff;
  background-color: #4c67db;
  cursor: pointer;

  @media (max-width: 1800px) {
    width: 130px;
    height: 50px;
    font-size: 16px;
  }
`;

export const SearchInput = styled.input`
  width: 760px;
  height: 30px;
  font-size: 19px;
  font-weight: bold;
  border: none;

  &:focus {
    outline: none;
  }

  @media (max-width: 1800px) {
    font-size: 16px;
    margin: 0 0 0 15px;
  }
`;

export const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  padding: 23px 50px;
`;

export const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-self: end;
  padding: 8px;
  border: none;
  border-radius: 999px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const ToggleButton = styled.button`
  width: 140px;
  height: 63px;
  border: none;
  background-color: ${({ active }) => (active ? '#4c67db' : '#fff')};
  color: ${({ active }) => (active ? '#fff' : '#000')};
  border-radius: 999px;
  font-size: 19px;
  cursor: pointer;

  @media (max-width: 1800px) {
    width: 100px;
    height: 50px;
    font-size: 16px;
  }
`;

export const SearchIcon = styled.img`
  width: 39px;
  height: 39px;

  @media (max-width: 1800px) {
    width: 30px;
    height: 30px;
  }
`;
