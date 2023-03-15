import React, { FunctionComponent } from 'react';

import { Text } from 'design-system';
import { SafeAreaView } from 'dripsy';

import styles from './styles';
import type { HomePropTypes } from './types';

const HomeScreen: FunctionComponent<HomePropTypes> = () => (
  <SafeAreaView sx={styles.container}>
    <Text accessibilityRole="text">Chat Rooms</Text>
  </SafeAreaView>
);

export default HomeScreen;
