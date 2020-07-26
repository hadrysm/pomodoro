import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import GlobalStyled from 'theme/GlobalStyled';
import { themeLight } from 'theme/mainTheme';

const MainTemplate = ({ children }) => (
  <Router>
    <ThemeProvider theme={themeLight}>
      <GlobalStyled />
      {children}
    </ThemeProvider>
  </Router>
);

export default MainTemplate;

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};
