import styled from 'styled-components';

const StyledIconButton = styled.button`
  position: relative;
  width: 48px;
  height: 48px;
  margin: 0 10px;
  border-radius: 50%;
  border: none;
  outline: none;
  background-color: ${(props) => props.backgroundColor || '#4c67db'};
  float: ${(props) => props.float || 'none'};
  cursor: pointer;

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

const SvgIcon = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const IconButton = ({ onClick, icon, float, backgroundColor }) => {
  return (
    <StyledIconButton
      onClick={onClick}
      float={float}
      backgroundColor={backgroundColor}
    >
      <SvgIcon src={icon} alt='Icon' />
    </StyledIconButton>
  );
};

export default IconButton;
