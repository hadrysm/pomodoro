import React, { useContext } from 'react';
import { useSelector } from 'react-redux';

import { AppContext } from 'context';
import CircleProgressBar from 'components/atoms/CircleProgressBar';
import Timer from 'components/molecules/Timer';
import { Button } from 'components/atoms/Button/Button.style';
import { Wrapper } from 'components/atoms/Wrapper/Wrapper.style';
import { InnerWrapper } from './TimerBox.style';

const TimerBox = () => {
  const { onStartTimer, onPauseTimer } = useContext(AppContext);

  const isTimerRunning = useSelector(({ timer }) => timer.isRunning);

  const startClickHandler = () => {
    onStartTimer();
  };

  const pauseClickHandler = () => {
    onPauseTimer();
  };

  return (
    <Wrapper>
      <CircleProgressBar />
      <Timer />
      <InnerWrapper>
        <Button type="button" onClick={isTimerRunning ? pauseClickHandler : startClickHandler}>
          {isTimerRunning ? 'pause' : 'start'}
        </Button>
      </InnerWrapper>
    </Wrapper>
  );
};

export default TimerBox;
