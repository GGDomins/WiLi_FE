import styled from 'styled-components';
import emptyImage from '../../assets/etc/addimage.png';

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 1340px;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0px 25px;
  }
`;

export const Title = styled.h1`
  font-size: 29px;
  color: #4c67db;
  margin: 0 0 43px 0;

  @media (max-width: 768px) {
    font-size: 24px;
    margin: 0 0 24px 0;
  }
`;

export const ImageField = styled.div`
  width: 450px;
  height: 450px;
  border-radius: 40px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
  background-image: url(${emptyImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 350px;
    height: 350px;
  }
`;

export const ImagePreview = styled.img`
  width: 450px;
  height: 450px;
  border-radius: 40px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
  object-fit: contain;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 350px;
    height: 350px;
  }
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

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
  }
`;

export const InputInnerContainer = styled.div`
  margin: 0 0 0 70px;

  @media (max-width: 768px) {
    margin: 10px;
  }
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

  @media (max-width: 768px) {
    width: 353px;
    align-items: unset;
    flex-direction: column;
    justify-content: center;
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

  @media (max-width: 768px) {
    width: 100%;
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
