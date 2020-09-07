import React from 'react';
import { useSelector } from 'react-redux';

import SessionLength from 'components/molecules/SesionLength';
import BreakInterval from 'components/molecules/BreakInterval';
import ProgressBar from 'components/atoms/ProgressBar';
import { useProgressBar } from 'hooks/useProgressBar';
import { Wrapper } from './Timer.style';

const Timer = () => {
  const progress = useProgressBar();

  const currentTime = useSelector(({ timer }) => timer.currentTime);
  const nextTime = useSelector(({ timer }) => timer.nextTime);
  const nextAction = useSelector(({ timer }) => timer.timerLabel);

  return (
    <Wrapper>
      <BreakInterval time={nextTime} nextAction={nextAction} />
      <SessionLength time={currentTime} />
      <ProgressBar progress={progress} />
    </Wrapper>
  );
};

export default Timer;
