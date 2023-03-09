import React, { useState } from 'react';

import { Text } from 'design-system';
import { Image, Pressable, View } from 'dripsy';

import styles from './styles';
import type { ButtonProps } from './types';

const Button = ({
  disabled,
  label,
  variant = 'primary',
  onPress,
  containerSx,
  labelSx,
  leftIcon,
  rightIcon,
}: ButtonProps) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <Pressable
      accessibilityRole="button"
      sx={{
        ...styles.container,
        ...styles[variant],
        ...(isPressed && styles[`${variant}Pressed`]),
        ...(disabled && styles[`${variant}Disabled`]),
        ...containerSx,
      }}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      disabled={disabled}
      onPress={onPress}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        {leftIcon && <Image source={leftIcon} sx={{ ...styles.icon, ...styles.leftIcon }} />}
        <Text
          sx={{
            ...styles.label,
            ...styles[`${variant}Text`],
            ...(isPressed && styles[`${variant}PressedText`]),
            ...(disabled && styles[`${variant}DisabledText`]),
            ...labelSx,
          }}>
          {label}
        </Text>
        {rightIcon && <Image source={rightIcon} sx={{ ...styles.icon, ...styles.rightIcon }} />}
      </View>
    </Pressable>
  );
};

export { Button };
