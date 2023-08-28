import styled from 'styled-components';

const StyledContainer = styled.div`
  margin: 0;
  padding: 0;
  width: 1300px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 10px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  justify-content: center;
  background-color: 'black';
`;

const ImageContainer = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default ImageContainer;
