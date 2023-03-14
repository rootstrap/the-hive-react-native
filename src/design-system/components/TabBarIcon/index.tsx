import React from 'react';

import { View } from 'dripsy';

import { Icon } from 'design-system/components/Icon';
import { IconName } from 'design-system/components/Input/types';
import { Text } from 'design-system/components/Text';

import styles, { ICON_SIZE } from './styles';

type TabBarIconProps = {
  iconName: IconName;
  focused: boolean;
  label: string;
  size?: number;
};

const TabBarIcon = ({ iconName, label, size = ICON_SIZE, focused }: TabBarIconProps) => (
  <View sx={styles.container}>
    {iconName ? (
      <Icon name={iconName} focused={focused} size={size} />
    ) : (
      // TODO: replace emoji with user emoji
      <Text sx={{ ...styles.emoji, ...(focused ? styles.emojiFocused : {}) }}>😀</Text>
    )}
    <Text sx={{ ...styles.label, ...(focused ? styles.labelFocused : {}) }}>{label}</Text>
  </View>
);

export { TabBarIcon };
