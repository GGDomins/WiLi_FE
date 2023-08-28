import React, { useState } from 'react';

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
  const [query, setQuery] = useState('');

  const queryChangeHandler = (event) => {
    setQuery(event.target.value);
  };

  const querySubmitHandler = async (event) => {
    event.preventDefault();

    navigate(`/search?query=${query}`);
  };

  return (
    <SearchContainer onSubmit={querySubmitHandler}>
      <SearchIcon src={search} alt='search' />
      <SearchInput
        placeholder='검색어를 입력하세요 (나이키 에어포스 / @wili)'
        onChange={queryChangeHandler}
      />
      <SearchButton type='submit'>검색하기</SearchButton>
    </SearchContainer>
  );
};

export default SearchBar;
