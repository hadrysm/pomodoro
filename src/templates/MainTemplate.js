import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router } from 'react-router-dom';

const MainTemplate = ({ children }) => <Router>{children}</Router>;

export default MainTemplate;

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};
