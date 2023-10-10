import styled from 'styled-components';

export const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 900px;
  height: 800px;
  background-color: #fff;
  border-radius: 40px;
  padding: 40px 62px;
  border-radius: 40px;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  @media (max-width: 1800px) {
    height: 700px;
  }
`;

export const FavGroup = styled.div`
  display: flex;
  justify-content: space-between;
  width: 750px;
  margin: 0 0 60px 0;

  @media (max-width: 1800px) {
    width: 720px;
  }
`;

export const Title = styled.h1`
  display: block;
  font-size: 40px;
  font-weight: 500;
  color: #4c67db;
  margin: 0 0 60px 0;
`;

export const FavContainer = styled.div`
  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px 30px;

  @media (max-width: 1800px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 500px;
`;
