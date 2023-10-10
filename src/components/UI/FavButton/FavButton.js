import styled from 'styled-components';

const StyledFavSelect = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || '50px'};
  text-align: center;
  font-size: 16px;
  border-radius: 25px;
  background-color: ${(props) => (props.isFav ? '#4c67db' : '#4c67db4d')};
  color: ${(props) => (props.isFav ? '#fff' : '000')};
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #4c67db;
    color: #fff;
  }

  @media (max-width: 1800px) {
    font-size: 16px;
    width: 130px;
    height: 40px;
  }

  @media (max-width: 768px) {
    width: 50px;
    height: 35px;
  }
`;

const FavButton = ({ children, onClick, isFav, width, height }) => {
  return (
    <StyledFavSelect
      onClick={onClick}
      isFav={isFav}
      width={width}
      height={height}
    >
      {children}
    </StyledFavSelect>
  );
};

export default FavButton;
