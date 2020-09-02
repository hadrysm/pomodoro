import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { routes } from 'routes';

import { convertToMilliseconds } from 'helpers';
import { useInterval } from 'hooks/useInteval';
import { AppContext } from 'context';
import {
  toggleTimerRunning,
  setCurrentTime,
  setNextTime,
  setTimerLabel,
  setTimerInProgress,
  setDefaultSettings,
} from 'store/timer/actions';
import { timerLabel } from 'store/timer/types';
import MainTemplate from 'templates/MainTemplate';
import SettingsPage from 'views/SettingsPage';
import TimerPage from 'views/TimerPage/TimerPage';

const Root = () => {
  const dispatch = useDispatch();

  const currentCycleType = useSelector(({ timer }) => timer.timerLabel);
  const sessionLength = useSelector(({ timer }) => timer.sessionLength);
  const breakLength = useSelector(({ timer }) => timer.breakLength);
  const isRunning = useSelector(({ timer }) => timer.isRunning);
  const currentTime = useSelector(({ timer }) => timer.currentTime);
  const timerInProgress = useSelector(({ timer }) => timer.timerInProgress);

  const countdown = () => {
    dispatch(setCurrentTime(currentTime - 10));
  };

  const [start, stop] = useInterval(countdown, 10, false);

  // func change current time beteen session time and break time
  const setCycleTime = (type, currentLength, nextLength) => {
    dispatch(setTimerLabel(type));
    dispatch(setCurrentTime(convertToMilliseconds(currentLength)));
    dispatch(setNextTime(convertToMilliseconds(nextLength)));
    dispatch(toggleTimerRunning(true));
    start();
  };

  const setCycle = () => {
    dispatch(setCurrentTime(convertToMilliseconds(sessionLength)));
    dispatch(setNextTime(convertToMilliseconds(breakLength)));
  };

  const memoizedSetCycle = useCallback(setCycle, [sessionLength, breakLength]);

  const memoizedsetCycleTime = useCallback(setCycleTime, [isRunning, currentCycleType]);

  useEffect(() => {
    if (timerInProgress || isRunning) return;
    memoizedSetCycle();
  }, [isRunning, timerInProgress, memoizedSetCycle]);

  useEffect(() => {
    if (timerInProgress && currentTime - 10 < 0) {
      stop();
      dispatch(toggleTimerRunning(false));
      if (!isRunning && currentCycleType === timerLabel.BREAK) {
        memoizedsetCycleTime(timerLabel.SESSION, sessionLength, breakLength);
      } else if (!isRunning && currentCycleType === timerLabel.SESSION) {
        memoizedsetCycleTime(timerLabel.BREAK, breakLength, sessionLength);
      }
    }
  }, [
    stop,
    currentTime,
    memoizedsetCycleTime,
    dispatch,
    timerInProgress,
    isRunning,
    currentCycleType,
    breakLength,
    sessionLength,
  ]);

  const onStartTimer = () => {
    dispatch(toggleTimerRunning(true));
    dispatch(setTimerInProgress(true));
    start();
  };

  const onPauseTimer = () => {
    dispatch(toggleTimerRunning(false));
    stop();
  };

  const onClearTimer = () => {
    dispatch(setDefaultSettings(sessionLength, breakLength));
    memoizedSetCycle();
    stop();
  };

  const appContextElements = {
    onStartTimer,
    onPauseTimer,
    onClearTimer,
  };

  return (
    <AppContext.Provider value={appContextElements}>
      <MainTemplate>
        <Switch>
          <Route path={routes.timer} component={TimerPage} exact />
          <Route path={routes.settings} component={SettingsPage} exact />
        </Switch>
      </MainTemplate>
    </AppContext.Provider>
  );
};

export default Root;
