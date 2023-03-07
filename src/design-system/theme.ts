import { makeTheme } from 'dripsy';

import { fontWeights, textSizes } from './typography';

// TODO: Add fonts
const fontName = 'arial';
const headingFontName = 'arial';

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
