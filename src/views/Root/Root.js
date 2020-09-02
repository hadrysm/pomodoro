import React, { useEffect } from 'react';
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
  const setCycleTime = () => {
    if (currentCycleType === timerLabel.SESSION) {
      dispatch(setCurrentTime(convertToMilliseconds(sessionLength)));
      dispatch(setNextTime(convertToMilliseconds(breakLength)));
      dispatch(setTimerLabel(timerLabel.BREAK));
    } else if (currentCycleType === timerLabel.BREAK) {
      dispatch(setCurrentTime(convertToMilliseconds(breakLength)));
      dispatch(setNextTime(convertToMilliseconds(sessionLength)));
      dispatch(setTimerLabel(timerLabel.SESSION));
    }
  };

  const setCycle = () => {
    dispatch(setCurrentTime(convertToMilliseconds(sessionLength)));
    dispatch(setNextTime(convertToMilliseconds(breakLength)));
  };

  useEffect(() => {
    if (timerInProgress || isRunning) return;
    setCycle();
  }, [isRunning, timerInProgress, setCycle]);

  useEffect(() => {
    if (currentTime - 10 < 0) {
      stop();
      dispatch(toggleTimerRunning(false));
      setCycleTime();
    }
  }, [stop, currentTime, setCycleTime, toggleTimerRunning]);

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
    dispatch(toggleTimerRunning(false));
    dispatch(setTimerInProgress(false));
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
