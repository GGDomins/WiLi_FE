import styled from 'styled-components';

export const Brand = styled.h2`
  display: none;
  position: absolute;
  color: #fff;
  bottom: 40px;
  z-index: 1;
`;

export const ProductName = styled.h1`
  display: none;
  position: absolute;
  color: #fff;
  bottom: 10px;
  z-index: 1;
`;

export const StyledCard = styled.div`
  position: relative;
  overflow: hidden;

  border-radius: 30px;
  margin: 15px;
  padding: 20px;

  grid-row-end: ${(props) =>
    props.size === 'small'
      ? 'span 30'
      : props.size === 'medium'
      ? 'span 36'
      : 'span 48'};

  @media (max-width: 768px) {
    margin: 8px;
    grid-row-end: ${(props) =>
      props.size === 'small'
        ? 'span 20'
        : props.size === 'medium'
        ? 'span 26'
        : 'span 32'};
  }

  &:hover ${Brand} {
    display: block;
  }

  &:hover ${ProductName} {
    display: block;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${(props) => props.productInfo.img});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0); // Lighter black background when not hovered
    transition: 0.3s;
  }

  &:hover::after {
    background: rgba(0, 0, 0, 0.5); // Darker black background when hovered
  }
  cursor: pointer;
`;
