import React from 'react';

import { View } from 'dripsy';

import Logo from '../components/Logo';
import styles from './styles';
import { SignInPropTypes } from './types';

const SignInScreen: React.FunctionComponent<SignInPropTypes> = () => (
  <View sx={styles.container}>
    <Logo />
  </View>
);

export default SignInScreen;
