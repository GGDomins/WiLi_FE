import styled from 'styled-components';

const StyledLabel = styled.label`
  display: block;
  color: ${(props) => props.color || '#000'};
  font-size: ${(props) => props.fontSize || '16px'};
  font-weight: ${(props) => props.fontWeight || '700'};
`;

const Label = ({ children, color, fontSize, fontWeight }) => {
  return (
    <StyledLabel color={color} fontSize={fontSize} fontWeight={fontWeight}>
      {children}
    </StyledLabel>
  );
};

export default Label;
