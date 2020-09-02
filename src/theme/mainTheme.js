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
      big: '6rem',
      bigger: '9rem',
      biggest: '13rem',
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
    primary: '#66FCF1',
    secondary: '#45A29E',
    tertiary: '#FD8C39',
    background: '#1F2833',
    background20: '#0B0C10',
    text: '#FBFEF9',
    white: '#FFFFFF',
    white20: '#F2F2FF',
  },
  ...theme,
};

export const themeLight = {
  colors: {
    primary: '#EE4C7C',
    secondary: '#9A1750',
    tertiary: '#123C69',
    background: '#E3E2DF',
    background20: '#E3AFBC',
    text: '#2D221C',
    white: '#FFFFFF',
    white20: '#F2F2FF',
  },
  ...theme,
};
