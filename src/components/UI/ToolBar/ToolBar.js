import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { ToolBarContainer, Title, ButtonContainer, Filter } from './style';
import IconButton from '../IconButton/IconButton';
import add from '../../../assets/icons/add.svg';
import editprofile from '../../../assets/icons/settings.svg';

const ToolBar = ({ onChooseSort }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

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
            {t('ToolBar.Select')}
          </option>
          <option value='month'>{t('ToolBar.Month')}</option>
          <option value='category'>{t('ToolBar.Category')}</option>
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
