import { ComponentProps } from 'react';
import { ImageSourcePropType, TouchableOpacity } from 'react-native';

import { SxProp, Theme } from 'dripsy';

type TextVariant = keyof Theme['text'];
type TouchableVariant = keyof Theme['touchable'];

export type TouchableProps = {
  children: React.ReactNode;
  containerSx?: SxProp;
  leftIcon?: ImageSourcePropType;
  rightIcon?: ImageSourcePropType;
  textSx?: SxProp;
  textVariant?: TextVariant;
  variant?: TouchableVariant;
} & ComponentProps<typeof TouchableOpacity>;
