import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { themeColorsType } from 'store/settings/types';
import { setThemeColor } from 'store/settings/actions';

export const useDarkMode = () => {
  const [pageTheme, setPageTheme] = useState(themeColorsType.LIGHT);

  const dispatch = useDispatch();
  const getThemeColor = ({ settings }) => settings.colorTheme;
  const theme = useSelector(getThemeColor);

  const toggleTheme = () => {
    if (theme === themeColorsType.LIGHT) {
      setPageTheme(themeColorsType.DARK);
      dispatch(setThemeColor(themeColorsType.DARK));
    } else {
      setPageTheme(themeColorsType.LIGHT);
      dispatch(setThemeColor(themeColorsType.LIGHT));
    }
  };

  useEffect(() => {
    setPageTheme(theme);
  }, [theme]);

  return [pageTheme, toggleTheme];
};
