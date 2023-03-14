import React from 'react';
import { TouchableOpacity } from 'react-native';

import { Image as DripsyImage, View, styled } from 'dripsy';

import { icons } from '../../assets';
import { IconProps } from '../Input/types';
import styles from './styles';

const DripsyTouchable = styled(TouchableOpacity, {
  themeKey: 'touchable',
})({});

const Icon = ({ name, containerSx, onPress, disabled, ...props }: IconProps) => {
  const Container = onPress ? DripsyTouchable : View;
  const source = icons[name]();

  return (
    <Container
      sx={{
        ...(onPress ? styles.touchableContainer : {}),
        ...containerSx,
      }}
      onPress={onPress}
      disabled={disabled}>
      <DripsyImage {...props} source={source} />
    </Container>
  );
};

Icon.defaultProps = {
  onPress: undefined,
  containerSx: undefined,
};

export { Icon };
