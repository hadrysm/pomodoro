import React from 'react';
import PropTypes from 'prop-types';

import Navigation from 'components/organisms/Navigation';
import { Wrapper } from 'components/atoms/Wrapper/Wrapper.style';

const PageTemplate = ({ children }) => (
  <Wrapper>
    <Navigation />
    {children}
  </Wrapper>
);

PageTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PageTemplate;
