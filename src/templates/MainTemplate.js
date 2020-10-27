import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import { themeDark, themeLight } from 'theme/mainTheme';

import GlobalStyled from 'theme/GlobalStyled';
import { themeColorsType } from 'store/settings/types';

const MainTemplate = ({ children }) => {
  const getThemeColor = ({ settings }) => settings.colorTheme;
  const theme = useSelector(getThemeColor);

  return (
    <>
      <ThemeProvider theme={theme === themeColorsType.LIGHT ? themeLight : themeDark}>
        <GlobalStyled />
        {children}
      </ThemeProvider>
    </>
  );
};

export default MainTemplate;

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};
