import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { ToggleContainer, ToggleButton } from './style';

const Toggle = () => {
  const location = useLocation();
  const { t } = useTranslation();

  const [redirect, setRedirect] = useState(getActivePage(location.pathname));

  const handleToggle = (page) => {
    setRedirect(page);
  };

  function getActivePage(pathname) {
    if (pathname === '/profile') {
      return 'profile';
    } else if (pathname === '/random-feed') {
      return 'random-feed';
    }
    return 'profile'; // Default to 'profile' if the pathname doesn't match any known pages
  }

  return (
    <ToggleContainer>
      <NavLink to='/random-feed' onClick={() => handleToggle('random-feed')}>
        <ToggleButton active={redirect === 'random-feed'}>
          {t('Toggle.RandomFeed')}
        </ToggleButton>
      </NavLink>
      <NavLink to='/' onClick={() => handleToggle('profile')}>
        <ToggleButton active={redirect === 'profile'}>
          {t('Toggle.Profile')}
        </ToggleButton>
      </NavLink>
    </ToggleContainer>
  );
};

export default Toggle;
