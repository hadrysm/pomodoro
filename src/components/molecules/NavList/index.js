import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { routes } from 'routes';

import { AppContext } from 'context';
import { List, ListItem } from 'components/atoms/List/List.style';
import { NavLinkItem } from 'components/atoms/NavLinkItem/NavLinkItem.style';
import { Button } from 'components/atoms/Button/Button.style';
import { Wrapper, InnerWrapper } from './NavList.style';

const NavList = ({ isVisibility }) => {
  const { onClearTimer } = useContext(AppContext);

  const handleClearTimer = () => onClearTimer();

  return (
    <Wrapper isVisibility={isVisibility}>
      <InnerWrapper>
        <List>
          <ListItem>
            <NavLinkItem exact to={routes.timer}>
              Timer
            </NavLinkItem>
          </ListItem>
          <ListItem>
            <NavLinkItem exact to={routes.about}>
              About
            </NavLinkItem>
          </ListItem>
          <ListItem>
            <NavLinkItem exact to={routes.settings}>
              Settings
            </NavLinkItem>
          </ListItem>
        </List>
      </InnerWrapper>
      <InnerWrapper isFlex>
        <Button type="button" onClick={handleClearTimer}>
          clear cycle
        </Button>
      </InnerWrapper>
    </Wrapper>
  );
};

NavList.propTypes = {
  isVisibility: PropTypes.bool,
};

NavList.defaultProps = {
  isVisibility: false,
};
export default NavList;
