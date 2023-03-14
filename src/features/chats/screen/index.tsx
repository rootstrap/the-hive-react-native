import React, { FunctionComponent } from 'react';

import { Text } from 'design-system';
import { SafeAreaView } from 'dripsy';

import styles from './styles';
import type { ChatsPropTypes } from './types';

const ChatsScreen: FunctionComponent<ChatsPropTypes> = () => (
  <SafeAreaView sx={styles.container}>
    <Text accessibilityRole="text">Messages</Text>
  </SafeAreaView>
);

export default ChatsScreen;
