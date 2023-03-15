import { ComponentProps } from 'react';
import { GestureResponderEvent } from 'react-native';

import { Image as DripsyImage, TextInput as DripsyTextInput } from 'dripsy';
import type { SxProp } from 'dripsy';

import { icons } from '../../assets';

export type IconName = keyof typeof icons;

export type IconProps = {
  name: IconName;
  containerSx?: SxProp;
  onPress?: (e: GestureResponderEvent) => void;
  disabled?: boolean;
  focused?: boolean;
  size?: number;
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
} & Omit<ComponentProps<typeof DripsyTextInput>, 'sx'>;

export type TextInputStates = {
  isFocused: boolean;
  isInvalid: boolean;
  isSuccess?: boolean;
};
