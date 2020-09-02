import { combineReducers } from 'redux';

import settingsReducer from 'store/settings/reducers';
import timerReducer from 'store/timer/reducers';

const rootReducer = combineReducers({
  settings: settingsReducer,
  timer: timerReducer,
});

export default rootReducer;
