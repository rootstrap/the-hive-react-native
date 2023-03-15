import React from 'react';
import { TouchableOpacity } from 'react-native';

import { Image as DripsyImage, SxProp, View, styled } from 'dripsy';

import { IconProps } from 'design-system/components/Input/types';

import { icons } from '../../assets';
import styles from './styles';

const DripsyTouchable = styled(TouchableOpacity, {
  themeKey: 'touchable',
})({});

const Icon = ({
  name,
  containerSx,
  onPress,
  disabled,
  focused = false,
  size,
  ...props
}: IconProps) => {
  const Container = onPress ? DripsyTouchable : View;
  const source = icons[name]();

  const focusTintColor = focused ? styles.focused : styles.unfocused;

  return (
    <Container
      sx={
        {
          ...(onPress ? styles.touchableContainer : {}),
          ...containerSx,
        } as SxProp
      }
      onPress={onPress}
      disabled={disabled}>
      <DripsyImage
        sx={{ ...focusTintColor, ...(size ? { height: size, width: size } : {}) }}
        {...props}
        source={source}
      />
    </Container>
  );
};

Icon.defaultProps = {
  onPress: undefined,
  containerSx: undefined,
};

export { Icon };
