import React, { useState } from 'react';

import Logo from 'components/atoms/Logo';
import Burger from 'components/atoms/Burger';
import { Nav } from './Navigation.style';

const Navigation = () => {
  const [isMenuVisible, toggleMenuVisibility] = useState(false);

  const handleBurgerClick = () => toggleMenuVisibility((prevState) => !prevState);

  return (
    <header>
      <Nav>
        <Logo>pomodoro</Logo>
        <Burger handleClick={handleBurgerClick} isVisibility={isMenuVisible} />
        {/* <ul>
          <li>Timer</li>
          <li>settings</li>
        </ul> */}
      </Nav>
    </header>
  );
};

export default Navigation;
