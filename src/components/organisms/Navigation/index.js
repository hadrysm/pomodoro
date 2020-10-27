import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import Logo from 'components/atoms/Logo';
import Burger from 'components/atoms/Burger';
import NavList from 'components/molecules/NavList';
import { Nav } from './Navigation.style';

const Navigation = () => {
  const location = useLocation();
  const [isMenuVisible, setMenuVisibility] = useState(false);

  const handleBurgerClick = () => setMenuVisibility((prevState) => !prevState);

  const closeNavigation = () => setMenuVisibility(false);

  useEffect(() => {
    setMenuVisibility(false);
  }, [location]);

  return (
    <header>
      <Nav>
        <Logo handleClick={closeNavigation}>pomodoro</Logo>
        <Burger handleClick={handleBurgerClick} isVisibility={isMenuVisible} />
        <NavList isVisibility={isMenuVisible} />
      </Nav>
    </header>
  );
};

export default Navigation;
