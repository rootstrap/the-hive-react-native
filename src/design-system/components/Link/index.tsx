import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';

import { Text } from 'design-system';
import { styled } from 'dripsy';

import styles from './styles';
import { LinkProps } from './types';

const DripsyTouchable = styled(TouchableOpacity, {
  themeKey: 'link',
})({});

const Link = ({
  children,
  disabled,
  containerSx,
  textSx,
  textVariant = 'link-lg',
  variant = 'primary',
  ...props
}: LinkProps) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <DripsyTouchable
      {...props}
      activeOpacity={1}
      disabled={disabled}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      variant={variant}>
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
    </DripsyTouchable>
  );
};

export { Link };
export type { LinkProps };
