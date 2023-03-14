import { ComponentProps } from 'react';
import { TouchableOpacity } from 'react-native';

import { SxProp, Theme } from 'dripsy';

import { IconName } from 'design-system/types';

type TextVariant = keyof Theme['text'];
type TouchableVariant = keyof Theme['touchable'];

export type TouchableProps = {
  children: React.ReactNode;
  containerSx?: SxProp;
  leftIcon?: IconName;
  rightIcon?: IconName;
  textSx?: SxProp;
  textVariant?: TextVariant;
  variant?: TouchableVariant;
} & ComponentProps<typeof TouchableOpacity>;
