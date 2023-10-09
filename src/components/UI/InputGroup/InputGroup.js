import styled from 'styled-components';

const StyledInputGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${(props) => props.marginBottom || '20px'};
  width: ${(props) => props.width || 'fit-content'};

  @media (max-width: 1800px) {
    width: 463px;
  }
`;

const InputGroup = ({ children, width, marginBottom }) => {
  return (
    <StyledInputGroup width={width} marginBottom={marginBottom}>
      {children}
    </StyledInputGroup>
  );
};

export default InputGroup;
