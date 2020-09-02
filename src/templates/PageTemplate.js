import React from 'react';
import PropTypes from 'prop-types';

import Navigation from 'components/organisms/Navigation';
import { Wrapper } from 'components/atoms/Wrapper/Wrapper.style';

const PageTemplate = ({ children }) => (
  <Wrapper>
    <Navigation />
    <Wrapper as="main">{children}</Wrapper>
  </Wrapper>
);

PageTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageTemplate;
