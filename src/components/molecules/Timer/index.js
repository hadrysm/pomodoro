import React from 'react';
import { useSelector } from 'react-redux';

import SessionLength from 'components/molecules/SesionLength';
import BreakInterval from 'components/molecules/BreakInterval';
import { Wrapper } from './Timer.style';

const Timer = () => {
  const currentTime = useSelector(({ timer }) => timer.currentTime);
  const nextTime = useSelector(({ timer }) => timer.nextTime);
  const nextAction = useSelector(({ timer }) => timer.timerLabel);

  return (
    <Wrapper>
      <BreakInterval time={nextTime} nextAction={nextAction} />
      <SessionLength time={currentTime} />
    </Wrapper>
  );
};

export default Timer;
