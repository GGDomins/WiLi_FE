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

  @media (max-width: 1400px) {
    width: 1000px;
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1080px) {
    width: 700px;
  }

  @media (max-width: 768px) {
    width: 380px;
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ImageContainer = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default ImageContainer;
