import React from 'react';

import { Text } from 'design-system';
import { View } from 'dripsy';

import styles from './styles';
import { SignUpPropTypes } from './types';

const SignUpScreen: React.FunctionComponent<SignUpPropTypes> = () => (
  <View sx={styles.container}>
    <Text>Sign Up</Text>
  </View>
);

export default SignUpScreen;
