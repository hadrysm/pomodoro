import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyled from 'theme/GlobalStyled';

const MainTemplate = ({ children }) => (
  <Router>
    <GlobalStyled />
    {children}
  </Router>
);

export default MainTemplate;

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};
