import { ComponentProps } from 'react';

import { Pressable as DripsyPressable, SxProp, Theme } from 'dripsy';

type Sizes = keyof Theme['sizes'];
type Variant = keyof Theme['button'];
type Sx = {
  button: SxProp;
  text: SxProp;
};

export type ButtonProps = {
  label: string;
  onPress: () => void;
  size?: Sizes;
  sx?: Sx;
  variant?: Variant;
} & Omit<ComponentProps<typeof DripsyPressable>, 'variant'>;
