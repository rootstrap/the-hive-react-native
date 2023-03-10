import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';

import { Text } from 'design-system';
import { Image, View, styled } from 'dripsy';

import styles from './styles';
import { TouchableProps } from './types';

const DripsyTouchable = styled(TouchableOpacity, {
  themeKey: 'touchable',
})({});

const Touchable = ({
  children,
  disabled,
  containerSx,
  leftIcon,
  rightIcon,
  textSx,
  textVariant = 'button-lg',
  variant = 'primary',
  ...props
}: TouchableProps) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <DripsyTouchable
      {...props}
      activeOpacity={1}
      disabled={disabled}
      sx={{
        ...styles.container,
        ...styles[variant],
        ...(isPressed && styles[`${variant}Pressed`]),
        ...(disabled && styles[`${variant}Disabled`]),
        ...containerSx,
      }}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      variant={variant}>
      {typeof children === 'string' ? (
        <View sx={styles.rowContainer}>
          {leftIcon && (
            <Image
              source={leftIcon}
              sx={{
                ...styles.icon,
                ...styles[`${variant}Icon`],
                ...(isPressed && styles[`${variant}PressedIcon`]),
                ...(disabled && styles[`${variant}DisabledIcon`]),
                ...styles.leftIcon,
              }}
            />
          )}
          <Text
            sx={{
              ...styles[`${variant}Text`],
              ...(isPressed && styles[`${variant}PressedText`]),
              ...(disabled && styles[`${variant}DisabledText`]),
              ...textSx,
            }}
            variant={textVariant}>
            {children}
          </Text>
          {rightIcon && (
            <Image
              source={rightIcon}
              sx={{
                ...styles.icon,
                ...styles[`${variant}Icon`],
                ...(isPressed && styles[`${variant}PressedIcon`]),
                ...(disabled && styles[`${variant}DisabledIcon`]),
                ...styles.rightIcon,
              }}
            />
          )}
        </View>
      ) : (
        children
      )}
    </DripsyTouchable>
  );
};

export { Touchable };
export type { TouchableProps };
