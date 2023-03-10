import React, { ComponentProps } from 'react';
import { TouchableOpacity } from 'react-native';

import { SxProp, styled } from 'dripsy';

import { Text } from '../Text';

type TouchableProps = {
  children: React.ReactNode;
  sx?: SxProp;
  textSx?: SxProp;
} & ComponentProps<typeof TouchableOpacity>;

const DripsyTouchable = styled(TouchableOpacity)({});

const Touchable = ({ children, textSx, ...props }: TouchableProps) => (
  <DripsyTouchable {...props}>
    {typeof children === 'string' ? <Text sx={textSx}>{children}</Text> : children}
  </DripsyTouchable>
);

Touchable.defaultProps = {
  sx: undefined,
  textSx: undefined,
};

export { Touchable };
export type { TouchableProps };
