import React from 'react';
import PropTypes from 'prop-types';

import { getMinutes, getSeconds } from 'helpers';
import { timerLabel } from 'store/timer/types';
import { Paragraph } from 'components/atoms/Paragraph/Paragraph.style';
import { Time } from 'components/atoms/Time/Time.style';
import { Strong } from './BreakInterval.style';

const BreakInterval = ({ time, nextAction }) => (
  <div>
    <Paragraph isBig>
      next action: <Strong>{nextAction === timerLabel.BREAK ? 'break' : 'session'}</Strong>
    </Paragraph>
    <Time isSmall>{getMinutes(time)}</Time>
    <Time isSmall>:</Time>
    <Time isSmall>{getSeconds(time)}</Time>
  </div>
);

BreakInterval.propTypes = {
  time: PropTypes.number,
  nextAction: PropTypes.string,
};

BreakInterval.defaultProps = {
  time: 0,
  nextAction: timerLabel.BREAK,
};

export default BreakInterval;
