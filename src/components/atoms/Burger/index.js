import React from 'react';
import PropTypes from 'prop-types';

import { BurgerButton, BurgerLine } from './Burger.style';

const Burger = ({ handleClick, isVisibility }) => (
  <BurgerButton onClick={handleClick}>
    <BurgerLine isVisibility={isVisibility} />
  </BurgerButton>
);

Burger.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isVisibility: PropTypes.bool,
};

Burger.defaultProps = {
  isVisibility: false,
};

export default Burger;
