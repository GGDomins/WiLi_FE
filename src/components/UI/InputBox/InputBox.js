import styled from 'styled-components';

const StyledInputBox = styled.input`
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || '50px'};
  font-size: ${(props) => props.fontSize || '16px'};
  padding: 0 15px;
  border: ${(props) => props.border || '1px solid #D9D9D9'};
  border-radius: ${(props) => props.borderRadius || '7px'};
  background-color: ${(props) => props.backgroundColor || '#ffffff'};
`;

const InputBox = ({
  name,
  value,
  onChange,
  type,
  fontSize,
  placeholder,
  width,
  height,
  border,
  borderRadius,
}) => {
  return (
    <StyledInputBox
      name={name}
      value={value}
      onChange={onChange}
      type={type}
      fontSize={fontSize}
      placeholder={placeholder}
      width={width}
      height={height}
      border={border}
      borderRadius={borderRadius}
    />
  );
};

export default InputBox;
