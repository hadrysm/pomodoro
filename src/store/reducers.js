import { combineReducers } from 'redux';

import settingsReducer from 'store/settings';

const rootReducer = combineReducers({
  settings: settingsReducer,
});

export default rootReducer;
