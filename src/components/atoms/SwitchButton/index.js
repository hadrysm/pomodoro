import React from 'react';
import PropTypes from 'prop-types';

import { StyledSwitchButton } from './SwitchButton.style';

const SwitchButton = ({ type, checked, onChange }) => {
  return <StyledSwitchButton type={type} checked={checked} onChange={onChange} />;
};

SwitchButton.propTypes = {
  type: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

SwitchButton.defaultProps = {
  type: 'checkbox',
  checked: false,
};

export default SwitchButton;
