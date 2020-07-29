import { SET_THEME_COLOR, themeColorsType } from './types';

const INITIAL_STATE = {
  colorTheme: themeColorsType.LIGHT,
};

const settingsReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case SET_THEME_COLOR:
      return {
        ...state,
        colorTheme: payload.option,
      };

    default:
      return state;
  }
};

export default settingsReducer;
