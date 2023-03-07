import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';

import { SafeAreaView } from 'dripsy';

import Button from 'common/Button';

import styles from './styles';
import { WelcomePropTypes } from './types';

const WelcomeScreen: React.FunctionComponent<WelcomePropTypes> = ({ navigation: { navigate } }) => {
  const isDarkMode = useColorScheme() === 'dark';

  const onSignInPress = () => navigate('SignIn');
  const onSignUpPress = () => navigate('SignUp');

  return (
    <SafeAreaView sx={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Button
        testID="dummy-button"
        accessibilityState={{ disabled: false }}
        title="Sign In"
        onPress={onSignInPress}
      />
      <Button
        testID="dummy-button"
        accessibilityState={{ disabled: false }}
        title="Sign Up"
        onPress={onSignUpPress}
      />
    </SafeAreaView>
  );
};

export default WelcomeScreen;
