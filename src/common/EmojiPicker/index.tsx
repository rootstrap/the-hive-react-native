import React, { FunctionComponent } from 'react';

import { Text } from 'design-system';
import { View } from 'dripsy';

import styles from './styles';
import { EmojiPickerPropTypes } from './types';

const EmojiPicker: FunctionComponent<EmojiPickerPropTypes> = ({
  emoji,
  size = 'small',
  containerSx,
}) => (
  <View sx={{ ...styles.centerContainer, ...containerSx }}>
    <View sx={{ ...styles[`${size}AvatarContainer`], ...styles.avatarContainer }}>
      <Text sx={styles[`${size}Emoji`]}>{emoji}</Text>
    </View>
  </View>
);

export default EmojiPicker;
