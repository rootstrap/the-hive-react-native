import React from 'react';

import { Image as DripsyImage, View } from 'dripsy';

import { icons } from '../../assets';
import { IconProps } from '../Input/types';
import { Touchable } from '../Touchable';
import styles from './styles';

const Icon = ({ name, containerSx, onPress, disabled, ...props }: IconProps) => {
  const Container = onPress ? Touchable : View;
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
