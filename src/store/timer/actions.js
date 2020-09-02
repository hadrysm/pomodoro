import timerTypes from './types';

export const toggleTimerRunning = (isRunning) => ({
  type: timerTypes.TOGGLE_TIMER_RUNNING,
  payload: {
    isRunning,
  },
});

export const incrementTime = (currentUnit) => ({
  type: timerTypes.INCREMENT_TIME,
  payload: { currentUnit },
});

export const decrementTime = (currentUnit) => ({
  type: timerTypes.DECREMENT_TIME,
  payload: { currentUnit },
});

export const setCurrentTime = (time) => ({ type: timerTypes.SET_CURRENT_TIME, payload: { time } });

export const setNextTime = (nextTime) => ({
  type: timerTypes.SET_NEXT_TIME,
  payload: { nextTime },
});

export const setTimerLabel = (typeLabel) => ({
  type: timerTypes.SET_TIMER_LABEL,
  payload: { typeLabel },
});

export const setTimerInProgress = (isInProgress) => ({
  type: timerTypes.SET_TIMER_IN_PROGRESS,
  payload: { isInProgress },
});

export const setDefaultSettings = (sessionLength, breakLength) => ({
  type: timerTypes.SET_DEFAULT_SETTINGS,
  payload: {
    sessionLength,
    breakLength,
  },
});
