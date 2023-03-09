import { makeTheme } from 'dripsy';

import { fontWeights, textFormats } from './typography';

// TODO: Add fonts
const fontName = 'arial';
const headingFontName = 'arial';

const palette = {
  chat: {
    1: '#897716',
    2: '#B48B01',
    3: '#FF001C',
    4: '#FF008A',
    5: '#CC00FF',
    6: '#7000FF',
    7: '#001AFF',
    8: '#04A487',
    9: '#0474A4',
    10: '#1AA404',
    11: '#A45104',
    12: '#A40404',
  },
  neutrals: {
    black: '#060605',
    white: '#FFFFFF',
    100: '#F2F2F2',
    200: '#D9D9D9',
    300: '#ACACAC',
    400: '#8D8D8D',
    500: '#6A6A6A',
    600: '#2A2F39',
  },
  primary: {
    200: '#F7F5FF',
    400: '#8156FF',
    500: '#3A00E5',
    600: '#27009A',
  },
  status: {
    'error-100': '#FFF5F5',
    'error-200': '#FED7D7',
    'error-500': '#DB3131',
    'error-700': '#AE1616',
    'info-200': '#E3F5FF',
    'info-500': '#2F97ED',
    'info-700': '#2F97ED',
    'success-200': '#C9F3DA',
    'success-500': '#2FBE2C',
    'success-700': '#055F03',
    'warning-200': '#FEFCBF',
    'warning-500': '#FFC93E',
    'warning-700': '#9B6616',
  },
  transparent: 'transparent',
};

const sizes = {
  small: '60%',
  medium: '80%',
  large: '100%',
};

const theme = makeTheme({
  button: {
    primary: 'primary',
    secondary: 'secondary',
    tertiary: 'tertiary',
  },
  customFonts: {
    [fontName]: {
      default: fontName,
      bold: 'Inter-Bold',
    },
    [headingFontName]: {
      default: headingFontName,
      bold: 'DMSans-Bold',
    },
  },
  fonts: {
    root: fontName,
    heading: headingFontName,
  },
  colors: {
    background: palette.neutrals.white,
    '$Button-Disabled-Background': palette.neutrals[100],
    '$Button-Primary-Background': palette.primary[500],
    '$Button-Primary-Disabled-Background': palette.neutrals[100],
    '$Button-Primary-Disabled-Text': palette.neutrals[400],
    '$Button-Primary-Label': palette.neutrals.white,
    '$Button-Primary-Pressed-Background': palette.primary[600],
    '$Button-Primary-Pressed-Text': palette.neutrals.white,
    '$Button-Secondary-Background': palette.primary[200],
    '$Button-Secondary-Disabled-Background': palette.transparent,
    '$Button-Secondary-Disabled-Text': palette.neutrals[400],
    '$Button-Secondary-Label': palette.primary[500],
    '$Button-Secondary-Pressed-Color':  palette.neutrals.white,
    '$Button-Secondary-Pressed-Background':  palette.primary[500],
    '$Button-Secondary-Pressed-Text': palette.neutrals.white,
    '$Button-Tertiary-Background': palette.transparent,
    '$Button-Tertiary-Disabled-Background': palette.transparent,
    '$Button-Tertiary-Disabled-Text': palette.neutrals[400],
    '$Button-Tertiary-Label': palette.primary[500],
    '$Button-Tertiary-Pressed-Background': palette.transparent,
    '$Button-Tertiary-Pressed-Text': palette.primary[600],
  },
  borders: {},
  borderRadius: {
    small: 16,
    medium: 16,
    large: 16,
  },
  sizes,
  space: {},
  fontSizes: {}, // overriding the default font sizes
  text: textFormats,
  fontWeights,
  shadows: {},
  status: {
    error: 'error',
    info: 'info',
    success: 'success',
    warning: 'warning',
  },
  types: {
    onlyAllowThemeValues: {
      colors: 'always',
      fontWeights: 'always',
    },
    reactNativeTypesOnly: true,
  },
});

type MyTheme = typeof theme;

declare module 'dripsy' {
  interface DripsyCustomTheme extends MyTheme {}
}

export { theme };
