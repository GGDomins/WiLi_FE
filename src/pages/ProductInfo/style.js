import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Image = styled.img`
  width: 600px;
  height: 600px;
  object-fit: contain;
  border-radius: 40px;
  background-color: #d9d9d9;
  margin: 0 55px 0 0;

  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
    margin: 0 0 15px 0;
  }
`;

export const CloseContainer = styled.div`
  display: block;
  text-align: right;
  width: 100%;
  margin: 0 0 20px 0;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 700px;

  @media (max-width: 768px) {
    width: 300px;
    justify-content: unset;
  }
`;

export const BrandName = styled.h1`
  display: block;
  color: #6a6a6a;
  font-size: 24px;

  @media (max-width: 768px) {
    margin: 0 0 10px 0;
    font-size: 16px;
  }
`;

export const ProductName = styled.h2`
  display: block;
  color: #6a6a6a;
  font-size: 29px;

  @media (max-width: 768px) {
    margin: 0 0 10px 0;
    font-size: 24px;
  }
`;

export const Description = styled.p`
  display: block;
  color: #6a6a6a;
  font-size: 19px;
  width: 100%;

  @media (max-width: 768px) {
    margin: 0 0 10px 0;
    font-size: 16px;
  }
`;

export const Category = styled.div`
  display: block;
  width: 178px;
  height: 53px;
  line-height: 53px;
  text-align: center;
  font-size: 19px;
  border: 1px solid #6a6a6a;
  border-radius: 87px;
  color: #6a6a6a;
  background: #fff;

  @media (max-width: 768px) {
    width: 150px;
    height: 30px;
    line-height: 30px;
    font-size: 16px;
    margin: 0 0 15px 0;
  }
`;

export const Price = styled.p`
  display: block;
  color: #6a6a6a;
  font-size: 29px;

  @media (max-width: 768px) {
    margin: 0 0 15px 0;
    font-size: 20px;
  }
`;

export const ButtonContainer = styled.div`
  display: block;
  width: 100%;
`;

export const ProductLink = styled.div`
  display: block;
  font-size: 19px;
  width: 231px;
  height: 51px;
  line-height: 51px;
  text-align: center;
  color: #fff;
  background-color: #4c67db;
  border-radius: 21px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  @media (max-width: 768px) {
    margin: 0 0 15px 0;
    width: 170px;
    height: 30px;
    line-height: 30px;
  }
`;
