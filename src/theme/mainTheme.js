const breakpoints = {
  phone: 374,
  tablet: 767,
  bigTablet: 1020,
  desktop: 1150,
  bigDesktop: 1440,
  huge: 1700,
};

const theme = {
  font: {
    weight: {
      regular: 400,
      bold: 700,
    },
    size: {
      xxs: '1.2rem',
      xs: '1.4rem',
      s: '1.6rem',
      m: '1.8rem',
      l: '2rem',
      xl: '2.2rem',
      xxl: '2.6rem',
      xxxl: '3.6rem',
    },
  },

  zIndex: {
    level1: '1000',
    level2: '2000',
    level3: '3000',
    level4: '4000',
    level5: '5000',
    level6: '6000',
    level7: '7000',
    level8: '8000',
    level9: '9000',
  },

  mq: {
    mobile: `(min-width: ${breakpoints.phone}px)`,
    tablet: `(min-width: ${breakpoints.tablet}px)`,
    bigTablet: `(min-width: ${breakpoints.bigTablet}px)`,
    desktop: `(min-width: ${breakpoints.desktop}px)`,
    bigDesktop: `(min-width: ${breakpoints.bigDesktop}px)`,
    huge: `(min-width: ${breakpoints.huge}px)`,
  },

  layout: {
    maxContainerWidth: '1700px',
  },
};

export const themeDark = {
  colors: {
    primary: '#7B0BEB',
    secondary: '#8650FA',
    tertiary: '#A8DADC',
    background: '#192532',
    background20: '#1E2A37',
    white: '#FBFEF9',
    black: '#000000',
  },
  ...theme,
};

export const themeLight = {
  colors: {
    primary: '#7B0BEB',
    secondary: '#8650FA',
    tertiary: '#F27A23',
    background: '#f4f2f3',
    background20: '#e7e8e8',
    white: '#FBFEF9',
    black: '#000000',
  },
  ...theme,
};
