import { ComponentProps } from 'react';
import { TouchableOpacity } from 'react-native';

import { SxProp, Theme } from 'dripsy';

type TextVariant = keyof Theme['text'];
type LinkVariant = keyof Theme['link'];

export type LinkProps = {
  children: React.ReactNode;
  containerSx?: SxProp;
  textSx?: SxProp;
  textVariant?: TextVariant;
  variant?: LinkVariant;
} & ComponentProps<typeof TouchableOpacity>;
