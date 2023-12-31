import styled from 'styled-components';

export const EditProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 1340px;
  height: calc(100vh - 110px);
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-size: 29px;
  color: #4c67db;
  margin: 0 0 43px 0;
`;

export const ImagePreview = styled.img`
  width: 450px;
  height: 450px;
  border-radius: 40px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
  cursor: pointer;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1240px;
  margin: 0 0 59px 0;

  @media (max-width: 1800px) {
    margin: 0 0 50px 0;
  }
`;

export const InputInnerContainer = styled.div`
  margin: 0 0 0 70px;
`;

export const ButtonContainer = styled.div`
  display: block;
  width: 100%;
`;

export const TextAreaGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1062px;
  margin: 0 0 20px 0;

  @media (max-width: 1800px) {
    width: 832px;
  }
`;

export const Category = styled.select`
  width: 383px;
  height: 50px;
  border: 1px solid #d9d9d9;
  border-radius: 7px;

  @media (max-width: 1800px) {
    width: 353px;
  }
`;

export const TextArea = styled.textarea`
  resize: none;
  width: 922px;
  height: 150px;
  font-size: 16px;
  border: 1px solid #d9d9d9;
  border-radius: 7px;
  padding: 15px;

  @media (max-width: 1800px) {
    width: 722px;
  }
`;
