import { makeTheme } from 'dripsy';

import { fontWeights, textVariants } from './typography';

const fontName = 'LeagueSpartan';

const colors = {
  // chat
  'chat-1': '#897716',
  'chat-2': '#B48B01',
  'chat-3': '#FF001C',
  'chat-4': '#FF008A',
  'chat-5': '#CC00FF',
  'chat-6': '#7000FF',
  'chat-7': '#001AFF',
  'chat-8': '#04A487',
  'chat-9': '#0474A4',
  'chat-10': '#1AA404',
  'chat-11': '#A45104',
  'chat-12': '#A40404',

  //neutrals
  black: '#060605',
  white: '#FFFFFF',
  'n-100': '#F2F2F2',
  'n-200': '#D9D9D9',
  'n-300': '#ACACAC',
  'n-400': '#8D8D8D',
  'n-500': '#6A6A6A',
  'n-600': '#2A2F39',

  //primary
  'primary-200': '#F7F5FF',
  'primary-300': '#8156FF',
  'primary-400': '#751CE6',
  'primary-500': '#3A00E5',
  'primary-600': '#27009A',

  //status
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

  transparent: 'transparent',
};

const theme = makeTheme({
  customFonts: {
    [fontName]: {
      bold: `${fontName}-Bold`,
      default: `${fontName}-Regular`,
      '400': `${fontName}-Regular`,
      '500': `${fontName}-Medium`,
      '600': `${fontName}-SemiBold`,
      '700': `${fontName}-Bold`,
      '800': `${fontName}-ExtraBold`,
    },
  },
  fonts: {
    root: `${fontName}-Regular`,
  },
  colors,
  borders: {},
  space: {},
  text: textVariants,
  fontWeights,
  shadows: {},
  touchable: {
    primary: 'primary',
    secondary: 'secondary',
    tertiary: 'tertiary',
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
