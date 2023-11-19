import React, { useState } from 'react';

import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';
import search from '../../assets/icons/search.svg';

import {
  SearchContainer,
  SearchInput,
  SearchButton,
  SearchIcon,
} from './style';

const SearchBar = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [query, setQuery] = useState('');

  const queryChangeHandler = (event) => {
    setQuery(event.target.value);
  };

  const querySubmitHandler = async (event) => {
    event.preventDefault();

    window.location.replace(`/search?query=${query}`);
  };

  return (
    <SearchContainer onSubmit={querySubmitHandler}>
      <SearchIcon src={search} alt='search' />
      <SearchInput
        placeholder={t('SearchBar.Placeholder')}
        onChange={queryChangeHandler}
      />
      <SearchButton type='submit'>{t('SearchBar.Button')}</SearchButton>
    </SearchContainer>
  );
};

export default SearchBar;
