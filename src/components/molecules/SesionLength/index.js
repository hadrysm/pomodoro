import React from 'react';
import PropTypes from 'prop-types';

import { getSeconds, getMinutes } from 'helpers';
import { Time } from 'components/atoms/Time/Time.style';

const SessionLength = ({ time }) => (
  <div>
    <Time>{getMinutes(time)}</Time>
    <Time>:</Time>
    <Time>{getSeconds(time)}</Time>
  </div>
);

SessionLength.propTypes = {
  time: PropTypes.number,
};

SessionLength.defaultProps = {
  time: 0,
};

export default SessionLength;
