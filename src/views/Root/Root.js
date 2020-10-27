import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { routes } from 'routes';

import { convertToMilliseconds, getSeconds, getMinutes } from 'helpers';
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
import AboutPage from 'views/AboutPage/AboutPage';
import PageTemplate from 'templates/PageTemplate';

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

  const setCycle = (currentLength, nextLength) => {
    dispatch(setCurrentTime(convertToMilliseconds(currentLength)));
    dispatch(setNextTime(convertToMilliseconds(nextLength)));
  };

  // func change current time beteen session time and break time
  const setCycleTime = (type, currentLength, nextLength) => {
    dispatch(setTimerLabel(type));
    setCycle(currentLength, nextLength);
    dispatch(toggleTimerRunning(true));
    start();
  };

  const memoizedSetCycle = useCallback(setCycle, [sessionLength, breakLength]);

  const memoizedsetCycleTime = useCallback(setCycleTime, [isRunning, currentCycleType]);

  useEffect(() => {
    if (timerInProgress || isRunning) return;
    memoizedSetCycle(sessionLength, breakLength);
  }, [isRunning, timerInProgress, memoizedSetCycle, sessionLength, breakLength]);

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

  useEffect(() => {
    if (timerInProgress) {
      document.title = `Pomodoro | ${getMinutes(currentTime)}:${getSeconds(currentTime)}`;
    } else {
      document.title = 'Pomodoro';
    }
  }, [timerInProgress, currentTime]);

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
    memoizedSetCycle(sessionLength, breakLength);
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
        <PageTemplate>
          <Switch>
            <Route path={routes.timer} component={TimerPage} exact />
            <Route path={routes.settings} component={SettingsPage} exact />
            <Route path={routes.about} component={AboutPage} exact />
          </Switch>
        </PageTemplate>
      </MainTemplate>
    </AppContext.Provider>
  );
};

export default Root;
