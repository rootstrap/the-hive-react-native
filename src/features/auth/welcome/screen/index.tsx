import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';

import { Button } from 'design-system';
import { SafeAreaView } from 'dripsy';

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
        label="Sign In"
        onPress={onSignInPress}
      />
      <Button
        testID="dummy-button"
        accessibilityState={{ disabled: false }}
        label="Sign Up"
        onPress={onSignUpPress}
        variant="secondary"
      />
    </SafeAreaView>
  );
};

export default WelcomeScreen;
