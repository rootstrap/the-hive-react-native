import React from 'react';

import { Text } from 'design-system';

import Pressable from 'common/Pressable';

import styles from './styles';
import { ButtonProps } from './types';

const Button: React.FunctionComponent<ButtonProps> = ({ title, disabled = false, ...props }) => (
  <Pressable
    containerStyle={styles.container}
    disabledStyle={styles.disabledContainer}
    disabled={disabled}
    {...props}>
    <Text sx={{ ...styles.title, ...(disabled ? styles.disabledTitle : {}) }}>{title}</Text>
  </Pressable>
);

export default Button;
