import { makeTheme } from 'dripsy';

import { fontWeights, textSizes } from './typography';

const fontName = 'LeagueSpartan';

const palette = {
  black: '#000000',
  primary: {},
  secondary: {},
  status: {},
  backgrounds: {
    white: '#FFFFFF',
  },
};

const theme = makeTheme({
  customFonts: {
    [fontName]: {
      bold: `${fontName}-Bold`,
      default: `${fontName}-Medium`,
      '400': `${fontName}-Regular`,
      '500': `${fontName}-Medium`,
      '600': `${fontName}-SemiBold`,
      '700': `${fontName}-Bold`,
      '800': `${fontName}-ExtraBold`,
      normal: `${fontName}-Medium`,
    }
  },
  fonts: {
    root: `${fontName}-Medium`,
  },
  colors: {
    background: palette.backgrounds.white,
  },
  borders: {},
  borderRadius: {
    small: 4,
    medium: 8,
    large: 16,
  },
  space: {},
  fontSizes: {}, // overriding the default font sizes
  text: textSizes,
  fontWeights,
  shadows: {},
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
