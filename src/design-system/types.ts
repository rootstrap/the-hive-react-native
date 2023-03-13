import { ColorValue } from 'react-native';

import { DripsyBaseTheme, DripsyFinalTheme, SxProp } from 'dripsy';

import { colors } from 'design-system/theme';

export type Colors = typeof colors;

export type ThemeWithColors = DripsyBaseTheme & { colors: Colors };

export type SxPropWithTintColor = {
  tintColor?: (theme: DripsyFinalTheme) => ColorValue;
} & SxProp;

export type DripsyStylesPropWithTintColor = {
  [key: string]: NonNullable<SxPropWithTintColor>;
};
