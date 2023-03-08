import React from 'react';

import { Text } from 'design-system';
import { Pressable as DripsyPressable } from 'dripsy';

import styles from './styles';
import type { ButtonProps } from './types';

const Button = ({ label, variant = 'primary', onPress, size = 'large', sx }: ButtonProps) => (
  <DripsyPressable
    sx={{ ...styles.container, ...styles[variant], ...styles[size], ...sx?.button }}
    onPress={onPress}>
    <Text sx={{ ...styles[`${variant}Text`], ...sx?.text }}>{label}</Text>
  </DripsyPressable>
);

export { Button };
