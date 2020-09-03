import timerTypes, { timerLabel } from './types';

const INITIAL_STATE = {
  sessionLength: 1,
  breakLength: 2,
  currentTime: 0,
  nextTime: 0,
  timerLabel: timerLabel.SESSION,
  isRunning: false,
  timerInProgress: false,
};

const settingsReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case timerTypes.TOGGLE_TIMER_RUNNING:
      return {
        ...state,
        isRunning: payload.isRunning,
      };

    case timerTypes.INCREMENT_TIME:
      return {
        ...state,
        [payload.currentUnit]: state[payload.currentUnit] + 1,
      };

    case timerTypes.DECREMENT_TIME:
      return {
        ...state,
        [payload.currentUnit]: state[payload.currentUnit] - 1,
      };

    case timerTypes.SET_CURRENT_TIME:
      return {
        ...state,
        currentTime: payload.time,
      };

    case timerTypes.SET_NEXT_TIME:
      return {
        ...state,
        nextTime: payload.nextTime,
      };

    case timerTypes.SET_TIMER_LABEL:
      return {
        ...state,
        timerLabel: payload.typeLabel,
      };

    case timerTypes.SET_TIMER_IN_PROGRESS:
      return {
        ...state,
        timerInProgress: payload.isInProgress,
      };

    case timerTypes.SET_DEFAULT_SETTINGS:
      return {
        sessionLength: payload.sessionLength,
        breakLength: payload.breakLength,
        currentTime: 0,
        nextTime: 0,
        timerLabel: timerLabel.SESSION,
        isRunning: false,
        timerInProgress: false,
      };

    default:
      return state;
  }
};

export default settingsReducer;
