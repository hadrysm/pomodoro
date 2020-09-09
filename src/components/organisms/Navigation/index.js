import React, { useState } from 'react';

import Logo from 'components/atoms/Logo';
import Burger from 'components/atoms/Burger';
import NavList from 'components/molecules/NavList';
import { Nav } from './Navigation.style';

const Navigation = () => {
  const [isMenuVisible, setMenuVisibility] = useState(false);

  const handleBurgerClick = () => setMenuVisibility((prevState) => !prevState);

  const closeNavigation = () => setMenuVisibility(false);

  return (
    <header>
      <Nav>
        <Logo handleClick={closeNavigation}>pomodoro</Logo>
        <Burger handleClick={handleBurgerClick} isVisibility={isMenuVisible} />
        <NavList handleClick={handleBurgerClick} isVisibility={isMenuVisible} />
      </Nav>
    </header>
  );
};

export default Navigation;
