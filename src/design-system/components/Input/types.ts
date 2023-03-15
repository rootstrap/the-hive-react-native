import { ComponentProps } from 'react';
import { GestureResponderEvent } from 'react-native';

import { Image as DripsyImage, TextInput as DripsyTextInput } from 'dripsy';
import type { SxProp } from 'dripsy';

import { Colors } from 'design-system/types';

import { icons } from '../../assets';

export type IconProps = {
  name: keyof typeof icons;
  containerSx?: SxProp;
  onPress?: (e: GestureResponderEvent) => void;
  disabled?: boolean;
} & Omit<ComponentProps<typeof DripsyImage>, 'source'>;

export type TextInputProps = {
  name?: string;
  error?: string;
  isDisabled?: boolean;
  isRequired?: boolean;
  isSuccess?: boolean;
  hideError?: boolean;
  pattern?: RegExp;
  containerSx?: SxProp;
  contentSx?: SxProp;
  nameSx?: SxProp;
  errorSx?: SxProp;
  inputSx?: SxProp;
  leftIconProps?: IconProps;
} & Omit<ComponentProps<typeof DripsyTextInput>, 'sx'>;

export type DefaultColors = {
  disabled?: keyof Colors;
  error?: keyof Colors;
  success?: keyof Colors;
  focus?: keyof Colors;
  filled?: keyof Colors;
  default?: keyof Colors;
};
