import styled from 'styled-components';

export const ToolBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 100px;
`;

export const Title = styled.h1`
  font-size: 48px;
  color: #4c67db;
  font-weight: 500;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Filter = styled.select`
  width: 300px;
  height: 50px;
  margin: 0 10px;
  padding: 0 10px;
  line-height: 50px;
  font-size: 16px;
  border-radius: 8px;
`;
