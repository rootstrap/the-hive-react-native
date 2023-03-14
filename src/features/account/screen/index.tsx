import React, { FunctionComponent } from 'react';

import { Text } from 'design-system';
import { SafeAreaView } from 'dripsy';

import styles from './styles';
import type { AccountPropTypes } from './types';

const AccountScreen: FunctionComponent<AccountPropTypes> = () => (
  <SafeAreaView sx={styles.container}>
    <Text accessibilityRole="text">Account</Text>
  </SafeAreaView>
);

export default AccountScreen;
