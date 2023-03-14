import { ComponentProps } from 'react';
import { GestureResponderEvent, TextInput } from 'react-native';

import { Image as DripsyImage } from 'dripsy';
import type { SxProp } from 'dripsy';

import { IconName } from 'design-system/types';

export type IconProps = {
  name: IconName;
  containerSx?: SxProp;
  onPress?: (e: GestureResponderEvent) => void;
  disabled?: boolean;
} & Omit<ComponentProps<typeof DripsyImage>, 'source'>;

export type TextInputProps = {
  name?: string;
  error?: string;
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
  info?: string;
} & ComponentProps<typeof TextInput>;

export type TextInputStates = {
  isFocused: boolean;
  isInvalid: boolean;
  isSuccess?: boolean;
};
