import React from 'react';
import PropTypes from 'prop-types';
import { routes } from 'routes';

import { List } from 'components/atoms/List/List.style';
import { NavLinkItem } from 'components/atoms/NavLinkItem/NavLinkItem.style';
import { Button } from 'components/atoms/Button/Button.style';
import { Wrapper, InnerWrapper } from './NavList.style';

const NavList = ({ handleClick, isVisibility }) => (
  <Wrapper isVisibility={isVisibility}>
    <InnerWrapper>
      <List>
        <li>
          <NavLinkItem exact to={routes.timer}>
            Timer
          </NavLinkItem>
        </li>
        <li>
          <NavLinkItem exact to={routes.settings}>
            Settings
          </NavLinkItem>
        </li>
      </List>
    </InnerWrapper>
    <InnerWrapper isFlex>
      <Button type="button" onClick={handleClick}>
        clear cycle
      </Button>
      <Button type="button" onClick={handleClick} secondary>
        create cycle
      </Button>
    </InnerWrapper>
  </Wrapper>
);

NavList.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isVisibility: PropTypes.bool,
};

NavList.defaultProps = {
  isVisibility: false,
};
export default NavList;
