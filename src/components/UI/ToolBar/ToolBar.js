import { useNavigate } from 'react-router-dom';
import { ToolBarContainer, Title, ButtonContainer, Filter } from './style';
import IconButton from '../IconButton/IconButton';
import add from '../../../assets/icons/add.svg';
import editprofile from '../../../assets/icons/settings.svg';

const ToolBar = ({ onChooseSort }) => {
  const navigate = useNavigate();

  const filterChangeHandler = (event) => {
    const selectedValue = event.target.value;
    onChooseSort(selectedValue);
  };

  return (
    <ToolBarContainer>
      <Title>My WishList</Title>
      <ButtonContainer>
        <Filter onChange={filterChangeHandler}>
          <option value='' selected disabled hidden>
            필터 선택하기
          </option>
          <option value='month'>월별로 제품 보기</option>
          <option value='category'>카테고리별로 제품 보기</option>
        </Filter>
        <IconButton onClick={() => navigate('/add')} icon={`${add}`} />
        <IconButton
          onClick={() => navigate('/profile')}
          icon={`${editprofile}`}
        />
      </ButtonContainer>
    </ToolBarContainer>
  );
};

export default ToolBar;
