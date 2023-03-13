import { Colors, ThemeWithColors } from './types';

export const colorFromCurrentTheme = (color: keyof Colors) => (theme: ThemeWithColors) =>
  theme?.colors?.[color];
