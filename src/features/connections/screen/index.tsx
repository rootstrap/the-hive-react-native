import React, { FunctionComponent } from 'react';

import { Text } from 'design-system';
import { SafeAreaView } from 'dripsy';

import styles from './styles';
import type { ConnectionsPropTypes } from './types';

const ConnectionsScreen: FunctionComponent<ConnectionsPropTypes> = () => (
  <SafeAreaView sx={styles.container}>
    <Text accessibilityRole="text">Connections</Text>
  </SafeAreaView>
);

export default ConnectionsScreen;
