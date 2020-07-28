import React from 'react';

import { routes } from 'routes';
import { StyledLink, StyledLogo } from './Logo.styles';

const Logo = () => (
  <StyledLink to={routes.timer}>
    <StyledLogo>pomodoro</StyledLogo>
  </StyledLink>
);

export default Logo;
