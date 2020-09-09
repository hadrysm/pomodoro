import React from 'react';
import PropTypes from 'prop-types';

import { routes } from 'routes';
import { StyledLink, StyledLogo } from './Logo.styles';

const Logo = ({ handleClick }) => (
  <StyledLink to={routes.timer} onClick={handleClick}>
    <StyledLogo>pomodoro</StyledLogo>
  </StyledLink>
);

Logo.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Logo;
