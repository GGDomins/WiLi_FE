import styled from 'styled-components';

const StyledButton = styled.button`
  display: inline-block;
  width: ${(props) => props.width || '115px'};
  height: ${(props) => props.height || '51px'};
  border: ${(props) => props.border || 'none'};
  border-radius: ${(props) => props.borderRadius || '5px'};
  background-color: ${(props) => props.backgroundColor || '#ffffff'};
  color: ${(props) => props.color || '#000000'};
  font-size: ${(props) => props.fontSize || '18px'};
  font-weight: ${(props) => props.fontWeight || '500'};
  float: ${(props) => props.float || 'none'};
  transition: all 0.3s ease-in-out;

  cursor: pointer;

  &:hover {
    background-color: #4c67db;
    color: #ffffff;
  }
`;

const Button = ({
  children,
  onClick,
  type,
  width,
  height,
  border,
  borderRadius,
  color,
  backgroundColor,
  fontSize,
  fontWeight,
  float,
}) => {
  return (
    <StyledButton
      type={type}
      onClick={onClick}
      width={width}
      height={height}
      border={border}
      borderRadius={borderRadius}
      color={color}
      backgroundColor={backgroundColor}
      fontSize={fontSize}
      fontWeight={fontWeight}
      float={float}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
